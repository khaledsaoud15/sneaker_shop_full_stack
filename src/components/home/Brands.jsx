import React from "react";

const Brands = () => {
  return (
    <div className="flex items-center flex-wrap h-[15vh] mx-auto w-full  justify-center gap-4 md:gap-6 lg:gap-8 pointer-events-none">
      <img
        src="./assets/logo-1.png"
        alt=""
        className="h-2 lg:h-6 object-cover"
      />
      <img src="./assets/logo-2.png" alt="" className="h-2 lg:h-6" />
      <img src="./assets/logo-3.png" alt="" className="h-2 lg:h-6" />
      <img src="./assets/logo-4.png" alt="" className="h-2 lg:h-6" />
      <img src="./assets/logo.png" alt="" className="h-2 lg:h-6" />
    </div>
  );
};

export default Brands;
