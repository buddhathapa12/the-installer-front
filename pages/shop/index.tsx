import { Box } from "@mui/system";
import React from "react";
import ShopItemList from "../../components/ShopItems";
import { ProductsData } from "../../fixtures/BookOnline/productList";
import useStyles from "../../utils/shop";

const Shop = () => {
  const styles = useStyles();
  return (
    <Box width={1} height={1} className={styles.container}>
      <Box className={styles.wrapper}>
        <ShopItemList data={ProductsData} />
      </Box>
    </Box>
  );
};

export default Shop;
