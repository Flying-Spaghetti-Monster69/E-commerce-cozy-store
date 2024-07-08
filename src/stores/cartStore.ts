import { create } from "zustand";
import { cartProduct, type cart } from "../types";

const LOCAL_STORAGE_CART = "cart";

interface cartStore extends cart {
  addItem: (cartItemToAdd: cartProduct) => void;
  clearCart: () => void;
  removeItem: (id: string) => void;
  editItem: (id: string, amount: number) => void;
  getItemsFromLocalStorage: () => void;
  calculateTotals: () => void;
}

export const useCartStore = create<cartStore>((set, get) => ({
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
  addItem: (cartItemToAdd) => {
    const currentItems = get().cartItems;
    const itemIndex = currentItems.findIndex(
      (cartItem) => cartItem.CartID === cartItemToAdd.CartID
    );
    if (itemIndex !== -1) {
      currentItems[itemIndex] = {
        ...cartItemToAdd,
        amount: currentItems[itemIndex].amount + cartItemToAdd.amount,
      };
      set({ cartItems: currentItems });
    } else {
      set({ cartItems: [...currentItems, cartItemToAdd] });
    }
    set((state) => ({
      numItemsInCart: state.numItemsInCart + cartItemToAdd.amount,
      cartTotal:
        state.cartTotal + Number(cartItemToAdd.price) * cartItemToAdd.amount,
    }));

    get().calculateTotals();
  },
  clearCart: () => {
    localStorage.setItem(
      LOCAL_STORAGE_CART,
      JSON.stringify({
        cartItems: [],
        numItemsInCart: 0,
        cartTotal: 0,
        shipping: 500,
        tax: 0,
        orderTotal: 0,
      })
    );
    set({
      cartItems: [],
      numItemsInCart: 0,
      cartTotal: 0,
      shipping: 500,
      tax: 0,
      orderTotal: 0,
    });
  },
  removeItem: (id) => {
    const currentItems = get().cartItems;
    const product = currentItems.find((cartItem) => cartItem.CartID === id);
    if (product) {
      set({
        cartItems: currentItems.filter((cartItem) => cartItem.CartID !== id),
      });
      set((state) => ({
        numItemsInCart: state.numItemsInCart - product.amount,
        cartTotal: state.cartTotal - Number(product.price) * product.amount,
      }));
      get().calculateTotals();
    }
  },
  editItem(id, amount) {
    const currentItems = get().cartItems;
    const product = currentItems.findIndex(
      (cartItem) => cartItem.CartID === id
    );
    if (product !== -1) {
      set((state) => ({
        numItemsInCart:
          state.numItemsInCart + (amount - currentItems[product].amount),
        cartTotal:
          state.cartTotal +
          Number(currentItems[product].price) *
            (amount - currentItems[product].amount),
      }));
      currentItems[product].amount = amount;
      set({ cartItems: currentItems });
      get().calculateTotals();
    }
  },
  getItemsFromLocalStorage: () => {
    const cart = localStorage.getItem(LOCAL_STORAGE_CART);
    if (cart) {
      const {
        cartItems,
        cartTotal,
        numItemsInCart,
        shipping,
        tax,
        orderTotal,
      } = JSON.parse(cart) as cart;
      set({ cartItems, cartTotal, numItemsInCart, shipping, tax, orderTotal });
    }
  },
  calculateTotals: () => {
    set((state) => ({ tax: state.cartTotal * 0.05 }));
    set((state) => ({
      orderTotal: state.cartTotal + state.shipping + state.tax,
    }));
    const { cartItems, shipping, tax, cartTotal, numItemsInCart, orderTotal } =
      get();
    localStorage.setItem(
      LOCAL_STORAGE_CART,
      JSON.stringify({
        cartItems,
        shipping,
        tax,
        cartTotal,
        numItemsInCart,
        orderTotal,
      })
    );
  },
}));
