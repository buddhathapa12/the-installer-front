import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { IProduct, ProductsData } from "../../fixtures/BookOnline/productList";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import GoogleSignIn from "../../components/signIn/GoogleSignIn";

const ProductItem = () => {
  const router = useRouter();
  debugger;
  const itemId = router.query.itemId;
  const productDetail: IProduct | undefined = ProductsData.find((obj) => {
    return obj.id.toString() === itemId;
  });

  // Google Authentication
  debugger;
  const { data: session } = useSession();

  // useEffect(() => {
  //   debugger;
  //   if (session == null) {
  //     signIn("google");
  //   }
  // }, [session]);

  if (session) {
    return productDetail != undefined ? (
      <Box>
        <Image src={productDetail.imageUrl} alt={productDetail?.name} width={500} height={400} />
        <Typography>{productDetail.name}</Typography>
        <Typography>{productDetail.description}</Typography>
        <Typography>{productDetail.price} </Typography>
      </Box>
    ) : (
      <Typography>404 Page not found</Typography>
    );
  } else {
    return <GoogleSignIn />;
  }
};

export default ProductItem;

//<Button onClick={() => signIn("google")}>Please Sign in</Button>
