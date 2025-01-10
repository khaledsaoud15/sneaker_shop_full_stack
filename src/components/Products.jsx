import React, { useState } from "react";
import { products } from "../data";
import Product from "./Product";

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
      <div className="relative flex flex-wrap w-full h-fit gap-4 md:justify-start">
        {products.map((p, index) => (
          <Product key={index} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Products;
