import React from "react";
import {
  DeliveryDiningOutlined,
  Discount,
  MessageOutlined,
  Payment,
} from "@mui/icons-material";

const Offers = () => {
  return (
    <section className="grid grid-cols-1 gap-2 w-full h-full md:grid-cols-2 lg:grid-cols-4">
      <div className="flex items-center justify-center gap-4 w-full h-[15vh] p-3 ">
        <DeliveryDiningOutlined className="!text-3xl " />
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">Fast Delivery</h1>
          <p className="text-gray-500 font-thin text-xs">
            Free Shipping for orders over £130
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 w-full h-[15vh] p-3 ">
        <MessageOutlined className="!text-3xl" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">Secure SSL</h1>
          <p className="text-gray-500 font-thin text-xs">
            256-Bit Payment Protection
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 w-full h-[15vh] p-3 ">
        <Payment className="!text-3xl" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">Secure SSL</h1>
          <p className="text-gray-500 font-thin text-xs">
            256-Bit Payment Protection
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 w-full h-[15vh] p-3 ">
        <Discount className="!text-3xl" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">Get Discounts</h1>
          <p className="text-gray-500 font-thin text-xs">
            Join the sale campaign
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offers;
