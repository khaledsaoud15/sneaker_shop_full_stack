import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <Marquee
      className="!w-full  flex items-center"
      gradient={true}
      gradientColor="#e8e8e8"
      gradientWidth={200}
    >
      <div className="flex w-screen justify-evenly gap-8 pointer-events-none">
        <img src="./assets/nike.png" alt="" className="h-16 lg:h-24" />
        <img src="./assets/hermes.png" alt="" className="h-16 lg:h-24" />
        <img src="./assets/adidas.png" alt="" className="h-16 lg:h-24" />
        <img src="./assets/paulbear.png" alt="" className="h-16 lg:h-24" />
      </div>
    </Marquee>
  );
};

export default Brands;
