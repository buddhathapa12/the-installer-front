import { Box } from "@mui/system";
import React from "react";
import useStyles from "../utils/layout.styles";
import Footer from "./footer";
import Header from "./header";

function Layout(props: any) {
  const { children } = props;
  const classes = useStyles();
  return (
    <Box className={`${classes.page} ${classes.backgroundImage}`}>
      <Header />
      <Box className={classes.children}>{children}</Box>
      <Footer />
    </Box>
  );
}

export default Layout;
