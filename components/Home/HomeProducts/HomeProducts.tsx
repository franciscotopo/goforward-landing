"use client";

import React from "react";
import AnimatedTitle from "../../../hooks/AnimatedTitle";


const HomeProducts = () => {

  return (
    <section id="products" className="scroll-mt-30">
      <div className="relative w-full h-[120vh] sm:h-[100vh] bg-orange-400">
        <AnimatedTitle text="Our Products" textColor="text-white"/>
      </div>
    </section>
  );
};

export default HomeProducts;
