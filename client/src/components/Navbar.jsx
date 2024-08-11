import React from "react";
import { IoMdGlobe } from "react-icons/io";
import logo from "./../assets/key-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-screen h-[70px] bg-primary">
      <div className="w-full h-full max-w-[1200px] flex justify-between mx-auto items-center">
        <Link to='/'>
          <div className="flex gap-2 items-center">
            <img className="w-12 h-12" src={logo} />
            <h1 className="text-white font-normal text-2xl font-bold">Traffic Expert</h1>
          </div>
        </Link>
        <button className=" bg-slate-100 py-1 px-2 rounded flex items-center gap-2">
          <IoMdGlobe style={{ fontSize: "20px" }} />
          Countries
        </button>
      </div>
    </div>
  );
};

export default Navbar;
