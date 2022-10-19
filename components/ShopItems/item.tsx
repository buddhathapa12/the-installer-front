import type { NextPage } from "next";
import Image from "next/image";
import { Box } from "@mui/system";
import { IProduct } from "../../fixtures/BookOnline/productList";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import React, { useState, useEffect } from "react";
import ItemWindow from "./itemWindow";

const ShopItem: NextPage<IProduct> = ({ ...props }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [productData, setProductData] = useState({ ...props });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box className={classes.itemWrapper} component="a">
      <Box
        className={classes.productWrapper}
        sx={{
          ":hover": {
            color: "black",
            transform: "scale(1.1)",
            transition: "ease-in",
          },
        }}
        onClick={handleOpen}
      >
        <Box className={classes.imageWrapper}>
          <Image src={props.imageUrl} alt={props.name} layout="fill" />
        </Box>
        <Box className={classes.contentWrapper}>
          <Typography className={classes.title}>{props.name}</Typography>
          <Typography className={classes.price}>${props.price}</Typography>
        </Box>
      </Box>
      {open ? <ItemWindow data={productData} open={open} onClose={handleClose} /> : null}
    </Box>
  );
};

export default ShopItem;
