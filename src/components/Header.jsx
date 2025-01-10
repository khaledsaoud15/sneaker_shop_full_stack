import { Search, ShoppingCart } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";

const Header = () => {
  return (
    <nav className="flex flex-row-reverse justify-between h-20 bg-white px-8 items-center w-full lg:flex-row lg:px-16">
      <div className="hidden items-center gap-8  lg:flex ">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="" className="flex items-center">
          Shop <ArrowDropDownIcon />
        </a>
        <a href="" className="flex items-center">
          About <ArrowDropDownIcon />
        </a>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer lg:hidden">
        <span className="w-8 h-1 rounded-full bg-black"></span>
        <span className="w-6 h-1 ml-auto rounded-full bg-black"></span>
        <span className="w-4 h-1 ml-auto rounded-full bg-black"></span>
      </div>
      <img src="/logo.svg" alt="" className="h-fit " />

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-4 lg:flex">
          <a href="">Account</a>
          <a href="">Wishlist</a>
        </div>
        <div className="flex items-center gap-4 text-md">
          <a className="flex items-center gap-1 " href="">
            Account
            <a
              href=""
              className="w-4 h-4 p-3 rounded-full bg-gray-100 flex border border-black items-center justify-center"
            >
              0
            </a>
          </a>
          <Search className="!text-md cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
