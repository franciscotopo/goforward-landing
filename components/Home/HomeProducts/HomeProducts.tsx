/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import AnimatedTitle from "../../../hooks/AnimatedTitle";

const HomeProducts = () => {
  return (
    <section id="products" className="scroll-mt-30">
      
      <div className="relative w-full h-[120vh] sm:h-[100vh] bg-orange-400 flex flex-col items-center justify-center gap-6">
        <AnimatedTitle text="Our Products" textColor="text-white" />

        {/* Main container with 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-6xl px-4">
          <img src="/images/" />
        </div>

      </div>
    </section>
  );
};

export default HomeProducts;
