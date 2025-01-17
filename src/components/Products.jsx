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
      <div className="flex items-center justify-between"></div>

      <div className="grid w-full px-8  lg:w-4/5 grid-cols-1 gap-6 mx-auto h-fit py-8 items-center justify-center md:grid-cols-3">
        {products.map((p, index) => (
          <Product key={index} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Products;
