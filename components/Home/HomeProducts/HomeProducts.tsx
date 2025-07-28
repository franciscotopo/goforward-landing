/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import AnimatedTitle from "../../../hooks/AnimatedTitle";

const HomeProducts = () => {
  return (
    <section id="products" className="scroll-mt-30">

      <div className="w-full bg-orange-400 px-4 py-4 flex flex-col gap-y-2">

        <div>
          <div className="bg-red-500 rounded-lg min-h-[50px]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-3">
          
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          <div className="bg-blue-500 rounded-lg min-h-[50px]"></div>
          
        </div>

      </div>
      
    </section>
  );
};

export default HomeProducts;
