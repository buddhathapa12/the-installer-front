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
      <Link href={`products/${props.id}`} passHref>
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
      <Box className={classes.contentWrapper}>
        <Typography className={classes.title}>{props.name}</Typography>
        <Typography className={classes.description}>{props.description}</Typography>
      </Box>
      <Link href={`products/${props.id}`} passHref>
        <Box className={classes.buttonWrapper} component="a">
          <ShrinkingButton title="Book Now" icon={<CalendarMonthIcon className={classes.calendarIcon} />} />
        </Box>
      </Link>
    </Box>
  );
};

export default Product;
