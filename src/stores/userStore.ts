import { create } from "zustand";
import { loggedUserData, themes, userStore } from "../types";

const LOCAL_STORAGE_THEME = "theme";
const LOCAL_STORAGE_USER = "user";

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem(LOCAL_STORAGE_USER);
  return user ? JSON.parse(user) : null;
};

const getThemeFromLocalStorage = () => {
  const theme =
    (localStorage.getItem(LOCAL_STORAGE_THEME) as themes) || themes.light;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

export const useUserStore = create<userStore>((set, get) => ({
  user: getUserFromLocalStorage(),
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

export const loginUser = (response: loggedUserData) => {
  const user = { ...response.user, token: response.jwt };
  useUserStore.setState({ user });
  localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));
};

export const getUserFromStore = () => {
  return useUserStore.getState().user;
};
