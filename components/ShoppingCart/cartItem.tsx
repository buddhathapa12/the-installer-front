import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import { NextPage } from "next";
import React, { useContext } from "react";
import useStyles from "../../utils/shoppingCart/shoppingCart.styles";
import { IStore } from "../../utils/store";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { UserContext } from "../../context/userContext";
import ClearIcon from "@mui/icons-material/Clear";

const CartItem: NextPage<IStore> = ({ ...props }) => {
  const classes = useStyles();

  const { quantityIncrement, quantityDecrement, removeCartItem } = useContext(UserContext);
  return (
    <Box className={classes.cartItem}>
      <Avatar src={props.data.imageUrl} sx={{ width: 96, height: 96, mr: 2 }} variant="square" />
      <Box className={classes.itemContent}>
        <Box className={classes.itemInformation}>
          <Box>
            <Typography>{props.data.name}</Typography>
            <Typography>{props.data.description}</Typography>
          </Box>
          <Box
            onClick={() => {
              removeCartItem(props.data.id);
            }}
            sx={{ cursor: "pointer" }}
          >
            <Tooltip title="Remove item">
              <ClearIcon />
            </Tooltip>
          </Box>
        </Box>
        <Box className={classes.itemQuantityAndPrice}>
          <Box className={classes.itemQuantity}>
            <Box
              className={classes.addRemoveButton}
              onClick={() => {
                quantityDecrement(props.data.id);
              }}
            >
              <RemoveIcon />
            </Box>
            <Typography>{props.quantity}</Typography>
            <Box
              className={classes.addRemoveButton}
              onClick={() => {
                quantityIncrement(props.data.id);
              }}
            >
              <AddIcon />
            </Box>
          </Box>
          <Typography>${props.quantity * props.data.price}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
