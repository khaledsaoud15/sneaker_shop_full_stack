import { ArrowRightAlt } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] px-20 flex items-center ">
      <img
        src="./assets/hero.jpg"
        alt=""
        className="absolute w-full h-full left-0 top-0 object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10"></div>
      <div className="flex flex-col gap-3 z-30">
        <h1 className="text-white text-5xl w-2/4 font-bold lg:text-8xl md:text-6xl pointer-events-none">
          SEASON ARRIVAL
        </h1>
        <p className="text-white font-thin cursor-pointer w-fit ">
          SHOP NOW <ArrowRightAlt />
        </p>
      </div>
      <div className="absolute bottom-32 right-16 flex flex-col pl-2 border-l z-40 md:bottom-56 md:right-80 lg:bottom-[30%] lg:right-[35%] pointer-events-none">
        <h2 className="font-semibold text-lg text-white">Hermes SHOES</h2>
        <p className="text-white font-medium">$48.00</p>
      </div>
    </section>
  );
};

export default Hero;
