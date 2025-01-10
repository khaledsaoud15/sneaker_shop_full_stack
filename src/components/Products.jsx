import React from "react";
import { products } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <section className="w-full px-8 lg:px-16 h-full py-16 flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
          Popular Products
        </h1>
        <a href="#" className="underline text-sm lg:text-base">
          SEE MORE
        </a>
      </div>
      <div className="flex flex-wrap w-full h-fit gap-4">
        {products.map((p, i) => (
          <Product p={p} i={i} />
        ))}
      </div>
    </section>
  );
};

export default Products;
