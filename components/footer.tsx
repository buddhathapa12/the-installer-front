import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import useStyles from "../utils/footer.styles";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerCont}>
      <div className={classes.footerUpperCont}>
        <AppBar className={classes.navbar}>
          <CssBaseline />
          <div className={classes.ContactNumberCont}>
            <div className={classes.contactNumberLogo}>
              <Link href="tel:705-209-6525" passHref>
                <CallIcon />
              </Link>
            </div>
            <div className={classes.contactNumber}>
              <Link href="tel:705-209-6525">705-209-6525</Link>
            </div>
          </div>
          <div className={classes.navbarCont}>
            <ul className={classes.navbarList}>
              <li className={classes.navbarItemCont}>
                <Link href="/">
                  <a className={classes.navbarItem}>Home</a>
                </Link>
              </li>
              <li className={classes.navbarItemCont}>
                <Link href="/bookOnline">
                  <a className={classes.navbarItem}>Book Online</a>
                </Link>
              </li>
              <li className={classes.navbarItemCont}>
                <Link href="/about">
                  <a className={classes.navbarItem}>About</a>
                </Link>
              </li>
              <li className={classes.navbarItemCont}>
                <Link href="/projects">
                  <a className={classes.navbarItem}>Projects</a>
                </Link>
              </li>
              <li className={classes.navbarItemCont}>
                <Link href="/contact">
                  <a className={classes.navbarItem}>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.socialHandleCont}>
            <div className={classes.socialHandleItemCont}>
              <FacebookOutlinedIcon />
            </div>
            <div className={classes.socialHandleItemCont}>
              <TwitterIcon />
            </div>
            <div className={classes.socialHandleItemCont}>
              <LinkedInIcon />
            </div>
          </div>
        </AppBar>
      </div>
      <div className={classes.footer}>
        <p>&copy;2022 by the Installer.</p>
      </div>
    </div>
  );
};

export default Footer;
