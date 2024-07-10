export interface ProductAttributes {
  title: string;
  company: string;
  description: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: string;
  image: string;
  price: string;
  shipping: boolean;
  colors: string[];
}

export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface Meta {
  categories: string[];
  companies: string[];
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface cartProduct {
  CartID: string;
  productID: number;
  image: string;
  title: string;
  price: string;
  company: string;
  productColor: string;
  amount: number;
}

export interface Params {
  search: string;
  company: string;
  category: string;
  shipping: string;
  price: string;
  order: string;
}

export type cart = {
  cartItems: cartProduct[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

export enum themes {
  light = "nord",
  dark = "night",
}

export interface userStore {
  user: { username: string } | loggedUser | null;
  theme: themes;
  toggleUserStore: () => void;
  logoutUser: () => void;
}

export interface loggedUserData {
  jwt: string;
  user: User;
}

export interface loggedUser extends User {
  token: string;
}
export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CustomError extends Error {
  response: {
    data: {
      error: {
        message: string;
      };
    };
    status?: number;
  };
}

export interface MetaOrders {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface OrderDataAttributes {
  address: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  orderTotal: string;
  cartItems: cartProduct[];
  numItemsInCart: number;
}

export interface OrderData {
  id: number;
  attributes: OrderDataAttributes;
}
