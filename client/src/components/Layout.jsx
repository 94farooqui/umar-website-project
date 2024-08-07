import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-screen h-screen bg-[#F7F7F7]">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
