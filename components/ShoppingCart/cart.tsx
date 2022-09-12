import React from "react";
import { Badge } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { IStoreContextData } from "../../utils/store";
import { NextPage } from "next";
const Cart: NextPage<IStoreContextData> = ({ cart }) => {
  debugger;
  return (
    <Badge badgeContent={cart.cartItems.length} color="warning">
      <ShoppingBagOutlinedIcon />
    </Badge>
  );
};

export default Cart;
