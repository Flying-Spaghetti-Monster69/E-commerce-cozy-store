import { create } from "zustand";
import { cartProduct } from "../types";

type themeStore = {
  theme: string;
  setStoreTheme: (theme: string) => void;
};

type cartStore = {
  cartItems: cartProduct[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
  addItem: (cartItemToAdd: cartProduct) => void;
  clearCart: () => void;
  removeItem: (id: any) => void;
};

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
}));
