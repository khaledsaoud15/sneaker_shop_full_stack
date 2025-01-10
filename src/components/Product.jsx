import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Product = ({ p, i }) => {
  return (
    <div
      className="w-full h-fit p-6 shadow-xl flex flex-col gap-2 overflow-hidden rounded-lg"
      key={i}
    >
      <img src={p.img} alt={p.title} className="w-1/2 mx-auto" />
      <h1 className="text-xl">
        title: <b>{p.title}</b>
      </h1>
      <div className="flex items-center justify-between">
        <p>
          price: <b>${p.price}</b>
        </p>
        <div className="flex items-center gap-2">
          {p.category.map((c, i) => (
            <p className="text-gray-500">{c}</p>
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
  );
};

export default Product;
