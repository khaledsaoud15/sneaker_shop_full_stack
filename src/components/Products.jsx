import React, { useState } from "react";
import { products } from "../data";
import Product from "./Product";
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "@mui/material";

const Products = () => {
  return (
    <section className=" w-full px-8 lg:px-16 h-full py-16 flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl  lg:text-6xl text-gray-600">NEW ARRIVALS</h1>
          <p className="text-gray-500 md:w-2/4 mx-auto text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            voluptatibus, sint deserunt et distinctio incidunt excepturi
            voluptatem laudantium quasi odit nostrum! Eveniet officia corporis
            porro quod dignissimos minus iste laboriosam.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:w-3/4 lg:mx-auto">
          <Button
            variant="outlined"
            size="medium"
            className="!mx-auto hover:!bg-black !border-black !text-black hover:!text-white !w-full lg:!text-xs !py-3"
          >
            Men's Fashion
          </Button>
          <Button
            variant="outlined"
            size="medium"
            className="!mx-auto hover:!bg-black !border-black !text-black hover:!text-white !w-full lg:!text-xs !py-3"
          >
            Women's Fashion
          </Button>
          <Button
            variant="outlined"
            size="medium"
            className="!mx-auto hover:!bg-black !border-black !text-black hover:!text-white !w-full lg:!text-xs !py-3"
          >
            Men's Accessories
          </Button>
          <Button
            variant="outlined"
            size="small"
            className="!mx-auto hover:!bg-black !border-black !text-black hover:!text-white !w-full lg:lg:!text-xs !py-3"
          >
            Women's Accessories
          </Button>
          <Button
            variant="outlined"
            size="medium"
            className="!mx-auto hover:!bg-black !border-black !text-black hover:!text-white !w-full lg:!text-xs !py-3"
          >
            Discount Deals
          </Button>
        </div>
      </div>

      <div className="grid w-full px-8  lg:w-4/5 grid-cols-1 gap-6 mx-auto h-fit py-8 items-center justify-center lg:grid-cols-3 md:grid-cols-2">
        {products.map((p, index) => (
          <Product key={index} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Products;
