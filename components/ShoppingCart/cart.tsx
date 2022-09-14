import React, { useContext, useState } from "react";
import { Avatar, Badge, Box, Button, Divider, Drawer, drawerClasses, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { UserContext } from "../../context/userContext";
import CartItem from "./cartItem";
import useStyles from "../../utils/shoppingCart/shoppingCart.styles";
import CloseIcon from "@mui/icons-material/Close";
const Cart = () => {
  const classes = useStyles();
  const { cartItems } = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const cartContent = cartItems.map((cartItem, index) => <CartItem key={index} {...cartItem} />);
  return (
    <Badge badgeContent={cartItems.length} color="warning">
      <ShoppingBagOutlinedIcon
        className={classes.cartIcon}
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
            width: 375,
            background: "#ffffff",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          },
        }}
      >
        <Box style={{ display: "flex", margin: 5 }}>
          <CloseIcon
            style={{ alignSelf: "center", fontSize: 30, color: "#cd6b62", cursor: "pointer" }}
            onClick={() => {
              setIsDrawerOpen(false);
            }}
          />
          <Typography
            sx={{ flex: 5, fontSize: "30px", fontWeight: 400, textAlign: "center", margin: "5px", color: "#cd6b62" }}
          >
            Shopping Cart
          </Typography>
        </Box>

        {cartContent}
      </Drawer>
    </Badge>
  );
};

export default Cart;
