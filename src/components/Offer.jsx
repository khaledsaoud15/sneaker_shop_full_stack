import { Button } from "@mui/material";
import React from "react";

const Offer = () => {
  return (
    <section className="w-full flex flex-col h-full text-white md:flex-row md:h-[80vh]">
      <img
        src="./assets/offre.png"
        alt="woman wearing peaky blinders outfit"
        className="aspect-square object-cover md:w-1/2 md:h-full"
      />
      <div className="flex flex-col w-full gap-3 h-fit py-8 px-8 justify-center bg-main md:w-1/2 md:h-full md:gap-6">
        <span className="text-xs tracking-widest font-thin text-slate-200 md:text-base lg:text-lg">
          Women's cloths
        </span>
        <h1 className="font-code font-extrabold text-xl leading-none tracking-widest text-slate-400 md:text-xl lg:text-5xl">
          Peaky Blinders
        </h1>
        <p className="font-thin text-sm text-slate-200 md:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          labore dignissimos aperiam eum modi esse accusantium omnis architecto,
          aliquam, autem harum odit illum. Soluta ad, recusandae nam fuga hic
          delectus aperiam quibusdam
        </p>
        <p className="flex items-center gap-1 font-thin text-gray-200 text-sm md:text-base">
          Size:{" "}
          <span className="px-2 py-0.5 rounded-md bg-gray-900 text-white">
            M
          </span>
        </p>
        <Button variant="contained" className="!bg-gray-900 !w-2/5">
          Buy Now
        </Button>
      </div>
    </section>
  );
};

export default Offer;
