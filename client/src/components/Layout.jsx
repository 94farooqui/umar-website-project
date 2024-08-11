import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Home/Footer";

const Layout = () => {
  return (
    <div className="w-screen min-h-screen bg-[#F7F7F7]">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
