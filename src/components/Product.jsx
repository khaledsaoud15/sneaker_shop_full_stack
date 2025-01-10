import {
  Close,
  Favorite,
  HeartBrokenRounded,
  RemoveRedEye,
  Search,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { products } from "../data";

const Pop_up = ({ product, setShow }) => {
  return (
    <div className="w-full mx-auto h-[60vh] px-8 py-6 bg-white z-10 shadow-lg rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 lg:w-3/5">
      <img src={product.img} alt={product.title} className="h-full w-2/5" />
      <Close
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => setShow(false)}
      />
    </div>
  );
};

const Product = ({ p }) => {
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);

  const getItem = (id) => {
    if (id === p.id) {
      setProduct(p);
      setShow(true);
    } else {
      setProduct({});
    }
  };

  console.log(product);
  return (
    <>
      <div className="relative w-full h-fit p-6 shadow-xl flex flex-col gap-2 overflow-hidden rounded-lg md:w-auto md:h-auto group lg:w-fit">
        <div className="absolute top-8 -right-8 flex flex-col gap-2 group-hover:right-4 transition-all duration-300">
          <Favorite className="bg-[#2F4858] rounded-full text-white !w-8 !h-8 p-1 cursor-pointer" />
          <RemoveRedEye
            className="bg-[#2F4858] rounded-full text-white !w-8 !h-8 p-1 cursor-pointer"
            onClick={() => getItem(p.id)}
          />
        </div>
        <img
          src={p.img}
          alt={p.title}
          className="w-1/2 mx-auto md:h-[25vh] md:w-2/3"
        />
        <h1 className="text-xl">
          title: <b>{p.title}</b>
        </h1>
        <div className="flex items-center justify-between">
          <p>
            price: <b>${p.price}</b>
          </p>
          <div className="flex items-center gap-2">
            {p.category.map((c, i) => (
              <p key={i} className="text-gray-500">
                {c}
              </p>
            ))}
          </div>
        </div>
        <Button
          variant="contained"
          endIcon={<Search />}
          className="!bg-[#2F4858] hover:!bg-[#04090c]"
        >
          More Details
        </Button>
      </div>
      {show ? <Pop_up product={product} setShow={setShow} /> : ""}
    </>
  );
};

export default Product;
