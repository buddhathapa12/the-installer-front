import React, { useEffect, useState } from "react";
import { IProduct } from "../fixtures/BookOnline/productList";

export interface IStore {
  data: IProduct;
  quantity: number;
}
const useCartHook = () => {
  const [cartItems, setCartItems] = useState<IStore[]>([]);

  //   useEffect(() => {
  //     const sessionItems = sessionStorage.getItem("cartItems")
  //       ? JSON.parse(sessionStorage.getItem("cartItems") || "")
  //       : [];
  //   }, []);

  const addCartItem = (item: IProduct) => {
    const isDataAvailable = !!cartItems.find((x) => x.data.id === item.id);
    if (isDataAvailable) {
      let tempCartItems = cartItems.map((x) => {
        let quantity = x.quantity;
        if (x.data.id == item.id) {
          quantity += 1;
        }
        return {
          ...x,
          quantity: quantity,
        };
      });
      setCartItems([...tempCartItems]);
    } else {
      setCartItems([...cartItems, { data: item, quantity: 1 }]);
    }
    // sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const quantityIncrement = (id: number) => {
    let tempCartItems = cartItems.map((x) => {
      let quantity = x.quantity;
      if (x.data.id == id) {
        quantity += 1;
      }
      return {
        ...x,
        quantity: quantity,
      };
    });
    setCartItems([...tempCartItems]);
  };

  const quantityDecrement = (id: number) => {
    let tempCartItems = cartItems.map((x) => {
      let quantity = x.quantity;
      if (x.data.id == id) {
        quantity -= 1;
      }
      return {
        ...x,
        quantity: quantity,
      };
    });
    setCartItems([...tempCartItems]);
  };

  return { cartItems, addCartItem, quantityIncrement, quantityDecrement };
};

export default useCartHook;
