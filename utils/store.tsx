import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
import { IProduct } from "../fixtures/BookOnline/productList";
export interface IStore {
  data: IProduct;
  quantity: number;
}

export interface IAction {
  type: string;
  payload: IStore;
}

export interface IStoreContextData {
  cart: {
    cartItems: IStore[];
  };
}
// Store.Provider value={value};
