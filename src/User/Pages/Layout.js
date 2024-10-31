// import React from "react";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { Outlet } from "react-router-dom";






const Layout = () => {


  return (
    <>
    <Header />
    <ScrollToTop />
     <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
