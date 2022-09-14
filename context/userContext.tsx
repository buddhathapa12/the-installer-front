import React, { createContext } from "react";
import { IProduct } from "../fixtures/BookOnline/productList";
import { IStore } from "../utils/store";
import useCartHook from "../hooks/cartHook";

export interface HooksInterface {
  cartItems: IStore[];
  addCartItem: (item: IProduct) => void;
  quantityIncrement: (id: number) => void;
  quantityDecrement: (id: number) => void;
  removeCartItem: (id: number) => void;
}

export const UserContext = createContext<HooksInterface>({
  cartItems: [],
  addCartItem: () => {},
  quantityIncrement: () => {},
  quantityDecrement: () => {},
  removeCartItem: () => {},
});
