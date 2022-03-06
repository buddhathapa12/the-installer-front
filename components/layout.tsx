import React from "react";
import useStyles from "../utils/layout.styles";
import Footer from "./footer";
import Header from "./header";

function Layout(props: any) {
  const { children } = props;
  // const classes = useStyles();
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
