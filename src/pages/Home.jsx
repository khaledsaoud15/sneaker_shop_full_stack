import React from "react";
import Header from "../components/Header";
import MarqueeItem from "../components/Marquee";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Brands from "../components/home/Brands";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <MarqueeItem text="Final Reductions on the up to $60 - Off Sale" />
      <Hero />
      <Categories />
      <Brands />
      <Products />
    </div>
  );
};

export default Home;
