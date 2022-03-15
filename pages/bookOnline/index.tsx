import { Box } from "@mui/material";
import React from "react";
import ImageBanner from "../../components/ImageBanner";
import ProductList from "../../components/ProductList";
import { ProductsData } from "../../fixtures/BookOnline/productList";

const BookOnline = () => {
  return (
    <Box>
      <ImageBanner
        data={{
          title: "Book Online",
          backgroundImageUrl: "/static/images/book-online/plumber-gfc4662f20_1280.jpg",
        }}
        titleFontSize="42px"
      />
      <Box>
        <ProductList data={ProductsData} />
      </Box>
    </Box>
  );
};

export default BookOnline;
