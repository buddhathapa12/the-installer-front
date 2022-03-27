import { Box } from "@mui/system";
import { NextPage } from "next";
import React from "react";
import { IProduct } from "../../fixtures/BookOnline/productList";
import ShopItem from "./item";
import useStyles from "./styles";

interface IProductData {
  data: IProduct[];
}

const ShopItemList: NextPage<IProductData> = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.productList}>
      {props.data.map((product, index) => (
        <ShopItem {...product} key={index} />
      ))}
    </Box>
  );
};

export default ShopItemList;
