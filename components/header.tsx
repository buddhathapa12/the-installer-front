import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useStyles from "../utils/header.styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.navbar}>
        <CssBaseline />
        <Toolbar>
          <div className={classes.logo}>
            <Link href="/" passHref>
              <a>
                <Image src="/home/logo.png" alt="logo" width={120} height={90} />
              </a>
            </Link>
          </div>
          <div className={classes.titleNameCont}>
            <Typography className={classes.titleName}>
              <Link href="/">The Installer</Link>
            </Typography>
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
              <li className={classes.navbarItemCont}>
                <Link href="/shop">
                  <a className={classes.navbarItem}>Shop</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.cartCont}>
            <div className={classes.cart}>
              <span>price</span>
              <span className={classes.cartIcon}>Hello</span>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
