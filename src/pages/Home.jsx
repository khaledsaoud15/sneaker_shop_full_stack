import React from "react";
import Header from "../components/Header";
import MarqueeItem from "../components/home/Marquee";
import Hero from "../components/home/Hero";
import Brands from "../components/home/Brands";
import Products from "../components/Products";
import Offers from "../components/home/Offers";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <div>
      <MarqueeItem text="Final Reductions on the up to $60 - Off Sale" />
      <Hero />
      <Brands />
      <Products />
      <Offer />
      <Offers />
    </div>
  );
};

export default Home;
