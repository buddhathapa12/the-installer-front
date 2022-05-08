import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/system";
import { IProduct } from "../../fixtures/BookOnline/productList";
import { Typography } from "@mui/material";
import useStyles from "./styles";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";

const ShopItem: NextPage<IProduct> = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Link href={`/shop/${props.id}`} passHref>
      <Box className={classes.itemWrapper} component="a">
        <Box
          className={classes.productWrapper}
          sx={{
            ":hover": {
              color: "black",
            },
          }}
        >
          <Box className={classes.imageWrapper}>
            <Image src={props.imageUrl} alt={props.name} layout="fill" />
          </Box>
          <Box className={classes.contentWrapper}>
            <Typography className={classes.title}>{props.name}</Typography>
            <Typography className={classes.price}>${props.price}</Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default ShopItem;
