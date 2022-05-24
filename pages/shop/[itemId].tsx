import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { IProduct, ProductsData } from "../../fixtures/BookOnline/productList";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Login from "../signIn";
import { Store } from "../../utils/store";

const ProductItem = () => {
  const router = useRouter();
  const itemId = router.query.itemId;
  const productDetail: IProduct | undefined = ProductsData.find((obj) => {
    return obj.id.toString() === itemId;
  });

  // Google Authentication
  const { data: session } = useSession();

  // useEffect(() => {
  //   debugger;
  //   if (session == null) {
  //     signIn("google");
  //   }
  // }, [session]);

  const { dispatch } = useContext(Store);
  const addToCartHandler = async () => {
    // debugger;
    // const { data } = await axios.get(`/api/products/${product._id}`);
    // if (data.countInStock <= 0) {
    //   window.alert("Sorry. Product is out of stock");
    //   return;
    // }
    dispatch({ type: "CART_ADD_ITEM", payload: { data: productDetail, quantity: 1 } });
  };

  if (session) {
    return productDetail != undefined ? (
      <Box>
        <Image src={productDetail.imageUrl} alt={productDetail?.name} width={500} height={400} />
        <Typography>{productDetail.name}</Typography>
        <Typography>{productDetail.description}</Typography>
        <Typography>{productDetail.price} </Typography>
        <Button fullWidth variant="contained" color="primary" onClick={addToCartHandler}>
          Add to cart
        </Button>
      </Box>
    ) : (
      <Typography>404 Page not found</Typography>
    );
  } else {
    return <Login />;
  }
};

export default ProductItem;

//<Button onClick={() => signIn("google")}>Please Sign in</Button>
