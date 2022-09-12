import React, { useContext } from "react";
import { Badge } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { UserContext } from "../../context/userContext";

const Cart = () => {
  debugger;
  const { cartItems } = useContext(UserContext);
  return (
    <Badge badgeContent={cartItems.length} color="warning">
      <ShoppingBagOutlinedIcon />
    </Badge>
  );
};

export default Cart;
