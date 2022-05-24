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
export const Store = createContext<{ state: IStoreContextData; dispatch: React.Dispatch<any> }>({
  state: {
    cart: { cartItems: [] },
  },
  dispatch: () => null,
});

const initialState: IStoreContextData = {
  cart: { cartItems: Cookies.get("cartItems") ? JSON.parse(Cookies.get("cartItems")!) : [] },
};

function reducer(state: IStoreContextData, action: IAction) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      debugger;
      const newItem = action.payload;
      console.log(newItem);
      const existItem = state.cart.cartItems.find((item) => item.data?.id === newItem.data?.id);
      const cartItems = existItem
        ? state.cart.cartItems.map((item) => (item.data?.name === existItem.data?.name ? newItem : item))
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      return state;
  }
}

export function StoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

// Store.Provider value={value};
