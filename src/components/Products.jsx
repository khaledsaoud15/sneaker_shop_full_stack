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

const Products = () => {
  return (
    <section className=" w-full px-8 lg:px-16 h-full py-16 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
          Popular Products
        </h1>
        <a href="#" className="underline text-sm lg:text-base">
          SEE MORE
        </a>
      </div>

      <div className="grid grid-cols-2 !w-full !h-[60vh] !items-center  !justify-center">
        {products.map((p, index) => (
          <Product key={index} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Products;
