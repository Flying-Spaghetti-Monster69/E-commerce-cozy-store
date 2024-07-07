import { create } from "zustand";
import { cartProduct, type cart } from "../types";

const LOCAL_STORAGE_CART = "cart";

interface themeStore {
  theme: string;
  setStoreTheme: (theme: string) => void;
}

interface cartStore extends cart {
  addItem: (cartItemToAdd: cartProduct) => void;
  clearCart: () => void;
  removeItem: (id: any) => void;
  getItemsFromLocalStorage: () => void;
  calculateTotals: () => void;
}

export const useThemeStore = create<themeStore>((set) => ({
  theme: "nord",
  setStoreTheme: (theme) => set({ theme }),
}));

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
  clearCart: () =>
    set({
      cartItems: [],
      numItemsInCart: 0,
      cartTotal: 0,
      shipping: 500,
      tax: 0,
      orderTotal: 0,
    }),
  removeItem: (id) => console.log(id),
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
