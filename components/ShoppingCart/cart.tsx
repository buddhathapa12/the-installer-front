import React, { useContext, useState } from "react";
import { Avatar, Badge, Box, Button, Divider, Drawer, drawerClasses, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { UserContext } from "../../context/userContext";
import CartItem from "./cartItem";

const Cart = () => {
  const { cartItems } = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cartContent = cartItems.map((cartItem, index) => <CartItem key={index} {...cartItem} />);
  return (
    <Badge badgeContent={cartItems.length} color="warning">
      <ShoppingBagOutlinedIcon
        style={{ color: "#ff0000" }}
        onClick={() => {
          setIsDrawerOpen(!isDrawerOpen);
        }}
      />
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 400,
            background: "#ffffff",
          },
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: 400, textAlign: "center", margin: "5px", color: "#cd6b62" }}>
          Shopping Cart
        </Typography>
        {cartContent}
      </Drawer>
    </Badge>
  );
};

export default Cart;
