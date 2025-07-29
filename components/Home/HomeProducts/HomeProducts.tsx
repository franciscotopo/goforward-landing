/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import AnimatedTitle from "../../../hooks/AnimatedTitle";

const HomeProducts = () => {
  return (
    <section id="products" className="scroll-mt-30">

      <div className="relative w-full bg-orange-400 px-4 py-10 flex flex-col gap-y-2 ">

        
        <div className="bg-red-400 rounded-lg min-h-[100px] mb-2">
          <AnimatedTitle text="Our Products"/>
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-3 max-w-5xl m-3">
          
          <div className="bg-transparent rounded-lg min-h-14 max-w-100 m-1">
            <img 
              src="images/rim1.jpeg" 
              alt="Rim Image" 
              className="w-auto h-auto rounded-3xl cursor-pointer"
            />
          </div>
          
          <div className="bg-transparent rounded-lg min-h-14 max-w-100 m-1">
            <img 
              src="images/rim3.jpeg" 
              alt="Combo Image" 
              className="w-auto h-auto rounded-3xl cursor-pointer"
            />
          </div>
          
          <div className="bg-transparent rounded-lg min-h-14 max-w-100 m-1">
            <img 
              src="images/rim4.jpeg" 
              alt="Combo Image" 
              className="w-auto h-auto rounded-3xl cursor-pointer"
            />
          </div>
          
        </div>

      </div>
      
    </section>
  );
};

export default HomeProducts;
