import React from "react";
import { IoMdGlobe } from "react-icons/io";
import logo from "./../assets/key-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] bg-primary">
      <div className="w-full h-full max-w-[1200px] p-4 sm:p-0 flex justify-between mx-auto items-center">
        <Link to='/'>
          <div className="flex gap-2 items-center">
            <img className="hidden sm:block w-12 h-12" src={logo} />
            <h1 className="text-white text-lg sm:text-2xl font-bold">Traffic Expert</h1>
          </div>
        </Link>
        <button className=" hidden sm:flex bg-slate-100 py-1 px-2 rounded  items-center gap-2">
          <IoMdGlobe style={{ fontSize: "20px" }} />
          Countries
        </button>
        <button className=" flex text-white border py-1 px-2 rounded  items-center gap-2">
          <IoMdGlobe style={{ fontSize: "20px" }} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
