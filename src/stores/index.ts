import { create } from "zustand";

type themeStore = {
  theme: string;
  setStoreTheme: (theme: string) => void;
};

export const useThemeStore = create<themeStore>((set) => ({
  theme: "nord",
  setStoreTheme: (theme) => set({ theme }),
}));
