import { create } from "zustand";

type themeStore = {
  theme: string;
  setStoreTheme: (theme: string) => void;
};

type cartStore = {
  cartItems: [];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
  addItem: (cartItem: any) => void;
  clearCart: () => void;
  removeItem: (id: any) => void;
};

export const useThemeStore = create<themeStore>((set) => ({
  theme: "nord",
  setStoreTheme: (theme) => set({ theme }),
}));

export const useCartStore = create<cartStore>((set) => ({
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
  addItem: (cartItem) => console.log(cartItem),
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
