import { create } from "zustand";
import { loggedUser, themes, userStore } from "../types";

const LOCAL_STORAGE_THEME = "theme";
const LOCAL_STORAGE_USER = "user";

const getThemeFromLocalStorage = () => {
  const theme =
    (localStorage.getItem(LOCAL_STORAGE_THEME) as themes) || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

export const useUserStore = create<userStore>((set, get) => ({
  user: { user: { username: "Felipe's dummy" } },
  theme: getThemeFromLocalStorage(),
  toggleUserStore: () => {
    set((state) => ({
      theme: state.theme === themes.light ? themes.dark : themes.light,
    }));
    document.documentElement.setAttribute("data-theme", get().theme);
    localStorage.setItem(LOCAL_STORAGE_THEME, get().theme);
  },

  logoutUser: () => {
    set({ user: null });
    localStorage.removeItem(LOCAL_STORAGE_USER);
  },
}));

export const loginUser = (response: loggedUser) => {
  useUserStore.setState({ user: response });
};
