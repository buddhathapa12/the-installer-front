import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/system";
import { IProduct } from "../../fixtures/BookOnline/productList";
import { Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import useStyles from "./styles";
import ShrinkingButton from "../../molecules/ShrinkingButton";

const Product: NextPage<IProduct> = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Box className={classes.productWrapper}>
      <Link href={`products/${props.id}`}>
        <Box
          className={classes.imageWrapper}
          component="a"
          sx={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image src={props.imageUrl} alt={props.name} layout="fill" className={classes.image} />
        </Box>
      </Link>
      <Box
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            fontSize: 26,
            fontWeight: 500,
            marginBottom: 20,
          }}
        >
          {props.name}
        </Typography>
        <Typography
          style={{
            fontSize: 16,
            marginBottom: 20,
          }}
        >
          {props.description}
        </Typography>
      </Box>
      <Box
        style={{
          textAlign: "center",
        }}
      >
        <ShrinkingButton title="Book Now" icon={<CalendarMonthIcon className={classes.calendarIcon} />} />
      </Box>
    </Box>
  );
};

export default Product;
