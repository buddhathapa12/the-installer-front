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
    debugger;
    // const isDataAvailable = cartItems.find((x) => {
    //   if (x.data.id == item.id) {
    //     return true;
    //   }
    //   return false;
    // });
    console.log("I m here");
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
      console.log(tempCartItems);
      setCartItems([...tempCartItems]);
      //   console.log("cartItems:", cartItems);
    } else {
      setCartItems([...cartItems, { data: item, quantity: 1 }]);
    }
    // sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  //   const cartLength = cartItems?.length;

  return { cartItems, addCartItem };
};

export default useCartHook;
