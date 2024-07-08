import { create } from "zustand";
import { themes } from "../types";

const LOCAL_STORAGE_THEME = "theme";
const LOCAL_STORAGE_USER = "user";
interface userStore {
  user: { username: string } | null;
  theme: themes;
  toggleUserStore: () => void;
  loginUser: () => void;
  logoutUser: () => void;
}

const getThemeFromLocalStorage = () => {
  const theme =
    (localStorage.getItem(LOCAL_STORAGE_THEME) as themes) || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

export const useUserStore = create<userStore>((set, get) => ({
  user: { username: "Felipe's dummy" },
  theme: getThemeFromLocalStorage(),
  toggleUserStore: () => {
    set((state) => ({
      theme: state.theme === themes.light ? themes.dark : themes.light,
    }));
    document.documentElement.setAttribute("data-theme", get().theme);
    localStorage.setItem(LOCAL_STORAGE_THEME, get().theme);
  },
  loginUser: () => console.log("login"),
  logoutUser: () => {
    set({ user: null });
    localStorage.removeItem(LOCAL_STORAGE_USER);
  },
}));
