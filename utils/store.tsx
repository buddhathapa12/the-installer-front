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
