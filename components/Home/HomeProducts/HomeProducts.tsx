/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import AnimatedTitle from "../../../hooks/AnimatedTitle";

const HomeProducts = () => {
  return (
    <section id="products" className="scroll-mt-30">
      <div className="relative w-full min-h-screen bg-orange-400 px-4 py-10 flex flex-col items-center">
        
        {/* Título centrado que ocupa las 3 columnas */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 mb-8">
          <div className="md:col-span-3">
            <AnimatedTitle text="Our Products" textColor="text-white" />
          </div>
        </div>

        {/* Grid de imágenes */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          <img
            src="/images/rim1.jpeg"
            alt="Producto 1"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/rim2.jpeg"
            alt="Producto 2"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="/images/court.jpeg"
            alt="Producto 3"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
