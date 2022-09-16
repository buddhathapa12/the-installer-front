import { useState } from "react";
import { IProduct } from "../fixtures/BookOnline/productList";

export interface IStore {
  data: IProduct;
  quantity: number;
}
const useCartHook = () => {
  const [cartItems, setCartItems] = useState<IStore[]>([]);

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
  };

  const removeCartItem = (id: number) => {
    let tempCartItems = cartItems.filter((item) => item.data.id != id);
    setCartItems(tempCartItems);
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
        quantity = quantity > 1 ? quantity - 1 : 1;
      }
      return {
        ...x,
        quantity: quantity,
      };
    });
    setCartItems([...tempCartItems]);
  };

  const getTotalAmount = (itemList: IStore[]) => {
    let totalAmount = 0;
    if (itemList.length > 0) {
      itemList.forEach((item) => {
        totalAmount += item.data.price * item.quantity;
      });
    }
    return totalAmount;
  };
  return { cartItems, addCartItem, removeCartItem, quantityIncrement, quantityDecrement, getTotalAmount };
};

export default useCartHook;
