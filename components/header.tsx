import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <div>
      <div>
        <AppBar position="static">
          <CssBaseline />
          <Toolbar>
            <div>
              <Link href="/" passHref>
                <Image
                  src="/home/logo.png"
                  alt="logo"
                  width={120}
                  height={90}
                />
              </Link>
            </div>
            <div>
              <Typography>
                <Link href="/">The Installer</Link>
              </Typography>
            </div>
            <div>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/bookOnline">
                <a>Book Online</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </div>
            <div>
              <Typography>Cart logo here</Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
