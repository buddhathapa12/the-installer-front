import React from 'react';
import Footer from './footer';
import Header from './header';

function Layout(props: any) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
