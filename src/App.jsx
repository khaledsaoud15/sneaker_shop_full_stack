import React from "react";
import Header from "./components/Header";
import MarqueeItem from "./components/Marquee";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Brands from "./components/Brands";

const App = () => {
  return (
    <div>
      <Header />
      <MarqueeItem text="Final Reductions on the up to $60 - Off Sale" />
      <Hero />
      <Categories />
      <Brands />
    </div>
  );
};

export default App;
