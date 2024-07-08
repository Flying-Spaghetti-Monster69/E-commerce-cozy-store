interface ProductAttributes {
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
