import { create } from "zustand";

interface userStore {
  theme: string;
  setUserTheme: (theme: string) => void;
}

export const useUserStore = create<userStore>((set) => ({
  theme: "nord",
  setUserTheme: (theme) => set({ theme }),
}));
