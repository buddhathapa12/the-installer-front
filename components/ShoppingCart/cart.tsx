import React, { useContext, useState } from "react";
import { Badge, Box, Button, Drawer, Modal, Tooltip, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { UserContext } from "../../context/userContext";
import CartItem from "./cartItem";
import useStyles from "../../utils/shoppingCart/shoppingCart.styles";
import CloseIcon from "@mui/icons-material/Close";
import { useSession } from "next-auth/react";
import LoginComponent from "../signIn/signIn";

const Cart = () => {
  const classes = useStyles();

  const { data: session, status } = useSession();

  const { cartItems, getTotalAmount } = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openLoginComponent, setOpenLoginComponent] = useState(false);
  const handleLoginComponentOpen = () => setOpenLoginComponent(true);
  const handleLoginComponentClose = () => setOpenLoginComponent(false);
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
            background: "#858585",
            borderTopLeftRadius: "15px",
            borderBottomLeftRadius: "15px",
          },
        }}
      >
        <Box
          style={{
            display: "flex",
            margin: 5,
            background: "#ffffff",
            borderRadius: 15,
          }}
        >
          <Tooltip title="Close">
            <CloseIcon
              style={{
                alignSelf: "center",
                fontSize: 30,
                color: "#cd6b62",
                cursor: "pointer",
                margin: 5,
              }}
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            />
          </Tooltip>
          <Typography
            sx={{ flex: 5, fontSize: "30px", fontWeight: 400, textAlign: "center", margin: "5px", color: "#cd6b62" }}
          >
            Shopping Cart
          </Typography>
        </Box>

        {cartContent}
        <Box className={classes.totalAndCheckoutContainer}>
          <Box style={{ alignSelf: "center", fontWeight: 500, fontSize: 20 }}>
            Subtotal: ${getTotalAmount(cartItems)}
          </Box>
          <Button
            sx={{
              alignSelf: "center",
              background: "#cd6b62",
              color: "#ffffff",
              "&:hover": {
                color: "red",
              },
            }}
            onClick={() => {
              status == "authenticated" ? alert("This feature is under maintenance!!") : handleLoginComponentOpen();
            }}
          >
            Checkout
          </Button>
          <Modal
            open={openLoginComponent}
            onClose={handleLoginComponentClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <LoginComponent />
          </Modal>
        </Box>
      </Drawer>
    </Badge>
  );
};

export default Cart;
