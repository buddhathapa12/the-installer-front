import { Box } from "@mui/material";
import React from "react";
import ImageBanner from "../../components/ImageBanner";

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
    </Box>
  );
};

export default BookOnline;
