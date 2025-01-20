import { Search } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MobileMenue = ({ active }) => {
  return (
    <div
      className={`absolute top-full left-0 flex flex-col w-full ${
        active ? "h-fit" : "h-0"
      } px-16 gap-6 bg-white z-50 overflow-hidden transition-all duration-300`}
    >
      <Link to="/" className="w-fit mt-8">
        Home
      </Link>
      <Link to="/about" className="w-fit">
        About
      </Link>
      <a href="" className="flex items-center w-fit">
        Shop <ArrowDropDownIcon />
      </a>
      <a href="#" className="flex items-center w-fit">
        Blog <ArrowDropDownIcon />
      </a>
      <a href="" className="w-fit">
        Account
      </a>
      <a href="" className="w-fit mb-8">
        Wishlist
      </a>
    </div>
  );
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const resize = () => {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 1020) {
          setIsActive(false);
        }
      });
    };

    resize();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <nav className="relative flex flex-row-reverse justify-between h-20 bg-white px-8 items-center w-full lg:flex-row lg:px-16">
      <div className="hidden items-center gap-8  lg:flex ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="" className="flex items-center">
          Shop <ArrowDropDownIcon />
        </a>
        <a href="#" className="flex items-center">
          Blog <ArrowDropDownIcon />
        </a>
      </div>
      <div
        className="flex flex-col gap-1 cursor-pointer lg:hidden "
        onClick={() => setIsActive(!isActive)}
      >
        <span
          className={`w-8 h-1 rounded-full bg-black ${
            isActive ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
          } transition-all duration-300`}
        ></span>
        <span
          className={`h-1 ml-auto rounded-full bg-black ${
            isActive ? "w-0" : "w-6"
          } transition-all duration-300`}
        ></span>
        <span
          className={`transition-all duration-300 h-1 rounded-full bg-black ml-auto ${
            isActive
              ? "-rotate-45 -translate-y-2 w-8"
              : "rotate-0 translate-y-0 w-4"
          }`}
        ></span>
      </div>
      <MobileMenue active={isActive} />
      <h1 className="font-oliver font-medium text-4xl">LATTO</h1>

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
