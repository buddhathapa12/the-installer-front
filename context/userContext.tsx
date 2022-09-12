import React, { createContext } from "react";
import { IProduct } from "../fixtures/BookOnline/productList";
import { IStore } from "../utils/store";
import useCartHook from "../hooks/cartHook";

export interface HooksInterface {
  cartItems: IStore[];
  addCartItem: (item: IProduct) => void;
}

export const UserContext = createContext<HooksInterface>({ cartItems: [], addCartItem: useCartHook });
