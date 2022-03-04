import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useStyles from '../utils/header.styles';
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
                <Image
                  src="/home/logo.png"
                  alt="logo"
                  width={120}
                  height={90}
                />
              </a>
            </Link>
          </div>
          <div className={classes.titleNameCont}>
            <Typography className={classes.titleName}>
              <Link href="/">The Installer</Link>
            </Typography>
          </div>

          <div className={classes.navbarList}>
            <div className={classes.navbarItem}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div className={classes.navbarItem}>
              <Link href="/bookOnline">
                <a>Book Online</a>
              </Link>
            </div>
            <div className={classes.navbarItem}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
            <div className={classes.navbarItem}>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </div>
            <div className={classes.navbarItem}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </div>
            <div className={classes.navbarItem}>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </div>
          </div>
          <div className={classes.cart}>
            <Typography>Cart logo here</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
