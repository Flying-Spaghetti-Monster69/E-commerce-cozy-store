import { create } from "zustand";
import { themes } from "../types";

interface userStore {
  user: { username: string };
  theme: themes;
  toggleUserStore: () => void;
  loginUser: () => void;
  logoutUser: () => void;
}

const getThemeFromLocalStorage = () => {
  const theme = (localStorage.getItem("theme") as themes) || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

export const useUserStore = create<userStore>((set, get) => ({
  user: { username: "Guest" },
  theme: getThemeFromLocalStorage(),
  toggleUserStore: () => {
    set((state) => ({
      theme: state.theme === themes.light ? themes.dark : themes.light,
    }));
    document.documentElement.setAttribute("data-theme", get().theme);
    localStorage.setItem("theme", get().theme);
  },
  loginUser: () => console.log("login"),
  logoutUser: () => console.log("logout"),
}));
