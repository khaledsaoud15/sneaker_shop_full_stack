import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <Marquee
      className="h-14 !w-full  flex items-center"
      gradient={true}
      gradientColor="#e8e8e8"
      gradientWidth={300}
    >
      <div className="flex w-screen justify-evenly gap-8 pointer-events-none">
        <h1 className="text-lg lg:text-4xl">NIKE</h1>
        <h1 className="text-lg lg:text-4xl">HERMES</h1>
        <h1 className="text-lg lg:text-4xl">PAUL&BEAR</h1>
        <h1 className="text-lg lg:text-4xl">ADIDAS</h1>
      </div>
    </Marquee>
  );
};

export default Brands;
