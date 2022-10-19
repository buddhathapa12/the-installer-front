import { Box, Button, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { NextPage } from "next";
import React, { useContext, useState } from "react";
import { IProduct } from "../../fixtures/BookOnline/productList";
import { UserContext } from "../../context/userContext";
import useStyles from "../../utils/shoppingCart/shoppingCart.styles";
import { useSession } from "next-auth/react";
import LoginComponent from "../signIn/signIn";

interface ItemWindowInterface {
  data: IProduct;
  open: boolean;
  onClose: () => void;
}

const ItemWindow: NextPage<ItemWindowInterface> = ({ ...props }) => {
  const classes = useStyles();
  const { data: session, status } = useSession();
  const { addCartItem } = useContext(UserContext);

  const [openLoginComponent, setOpenLoginComponent] = useState(false);
  const handleOpen = () => setOpenLoginComponent(true);
  const handleClose = () => setOpenLoginComponent(false);

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.dialogStyle}>
        <Box style={{ margin: 25, flex: 1 }}>
          <Image src={props.data.imageUrl} alt={props.data.name} width={500} height={400} />
        </Box>
        <Box style={{ flex: 1, alignSelf: "center", display: "flex", flexDirection: "column" }}>
          <Box style={{ margin: 25, flex: 4, textAlign: "center" }}>
            <Typography style={{ fontSize: 20, fontWeight: 600 }}>{props.data.name}</Typography>
            <Typography>Description: {props.data.description}</Typography>
            <Typography>Price: ${props.data.price} </Typography>
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              status == "authenticated" ? addCartItem(props.data) : handleOpen();
            }}
            style={{ width: 200, margin: 25, flex: 1, alignSelf: "center" }}
          >
            Add to cart
          </Button>
        </Box>
        <Modal
          open={openLoginComponent}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <LoginComponent />
        </Modal>
      </Box>
    </Modal>
  );
};

export default ItemWindow;
