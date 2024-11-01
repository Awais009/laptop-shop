// import React from "react";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { Outlet } from "react-router-dom";
import { Context } from '../Context';

const Layout = () => {


  return (
    <>
    <Context>
      <Header />
      <ScrollToTop />
      <Outlet />
        <Footer />
    </Context>
    </>
  );
};

export default Layout;
