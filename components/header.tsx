import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useStyles from "../utils/header.styles";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const [mobileView, setmobileView] = useState(false);
  const [active, setActive] = useState(false);
  const [activeHamBurger, setActiveHamBurger] = useState(false);

  //Google Authentication
  const { data: session } = useSession();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900 ? setmobileView(true) : setmobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const classes = useStyles();

  const displayDesktop = () => {
    return (
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
    );
  };

  const displayMobile = () => {
    return (
      <Toolbar
        className={classes.mobileViewCont}
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? (
          <CloseOutlinedIcon
            onClick={() => {
              setActiveHamBurger(!activeHamBurger);
            }}
          />
        ) : (
          <MenuOutlinedIcon
            onClick={() => {
              setActiveHamBurger(!activeHamBurger);
            }}
          />
        )}
      </Toolbar>
    );
  };

  const hamBurgerList = () => {
    return (
      <ul className={classes.hamBurgerCont}>
        <li className={classes.hamBurgerMenuItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={classes.hamBurgerMenuItem}>
          <Link href="/bookOnline">
            <a>Book Online</a>
          </Link>
        </li>
        <li className={classes.hamBurgerMenuItem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={classes.hamBurgerMenuItem}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li className={classes.hamBurgerMenuItem}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li className={classes.hamBurgerMenuItem}>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>
      </ul>
    );
  };
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
          <div className={classes.navbarCont}>{mobileView ? displayMobile() : displayDesktop()}</div>
          <div className={classes.cartCont}>
            <div className={classes.cart}>
              <Link href="/cart" passHref>
                <span className={classes.cartIcon}>
                  <ShoppingBagOutlinedIcon />
                </span>
              </Link>

              {/* {session ? (
                <>
                  <button onClick={() => signOut()}>Sign out</button>
                </>
              ) : (
                <>
                  <button onClick={() => signIn("google")}>Sign in</button>
                </>
              )} */}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {mobileView && activeHamBurger ? hamBurgerList() : null}
    </div>
  );
};

export default Header;
