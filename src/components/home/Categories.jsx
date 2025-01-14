import React from "react";
import { categories } from "../../data";

const Categories = () => {
  return (
    <section className="w-full h-full py-16 px-8 flex flex-col gap-8 lg:px-16">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-bold md:text-3xl lg:text-4xl">
          Popular Categories
        </h2>
        <a href="#" className="underline font-thin text-sm md:text-base ">
          SHOP NOW
        </a>
      </div>
      <div className="grid grid-col-1 md:grid-cols-3 w-full gap-4 justify-center">
        {categories.map((c, i) => (
          <div className="w-full h-[50vh] lg:h-[70vh] rounded-lg overflow-hidden relative text-end md:w-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30  to-black/30"></div>
            <img
              src={c.img}
              alt=""
              className="asbolute top-0 left-0 w-full h-full object-cover -z-20"
            />
            <h3 className="font-semibold text-3xl z-30 absolute bottom-6 left-8 text-white">
              {c.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
