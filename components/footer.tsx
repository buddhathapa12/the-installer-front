import { Typography } from "@mui/material";
import React from "react";
import useStyles from "../utils/footer.styles";

const Footer = () => {
  const classes = useStyles();
  return <Typography className={classes.footer}> &copy;2022 by the Installer</Typography>;
};

export default Footer;
