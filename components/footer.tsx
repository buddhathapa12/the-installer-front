import React from "react";
import useStyles from "../utils/footer.styles";

const Footer = () => {
  const classes = useStyles();
  return <div className={classes.footer}> &copy;2022 by the Installer</div>;
};

export default Footer;
