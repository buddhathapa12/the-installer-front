import { Box, Container } from "@mui/material";
import type { NextPage } from "next";
import { IProduct } from "../../fixtures/BookOnline/productList";
import Product from "./product";
import useStyles from "./styles";

interface IProductData {
  data: IProduct[];
}

const ProductList: NextPage<IProductData> = (props) => {
  const styles = useStyles();
  return (
    <Container className={styles.container}>
      <Box className={styles.productList}>
        {props.data.map((product, index) => {
          return <Product {...product} key={index} />;
        })}
      </Box>
    </Container>
  );
};

export default ProductList;
