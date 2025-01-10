import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-full gap-8 bg-gradient-to-r px-8 flex flex-col from-[#8f2d75] via-[#5c4381] to-[#334a73] py-16 lg:items-center lg:flex-row lg:justify-center">
      <div className="flex flex-col w-full gap-4 md:w-3/4 lg:w-1/2">
        <span className="py-1 px-2 text-xs rounded-full bg-main text-white w-fit">
          Limited edition
        </span>
        <h1 className="font-bold text-4xl lg:text-6xl text-white">
          The special winter CLOTHES ARE BACK
        </h1>
        <p className="text-sm text-white lg:w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rerum
          voluptate saepe adipisci consectetur libero quibusdam provident illo
          possimus nemo!
        </p>
        <Button variant="contained" size="large" className="!w-fit !bg-main">
          LEARN MORE
        </Button>
      </div>
      <img
        src="./hero.jpg"
        alt=""
        className="w-full aspect-auto lg:w-1/3 shadow-mainshadow"
      />
    </section>
  );
};

export default Hero;
