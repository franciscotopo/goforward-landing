/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import AnimatedTitle from "../../../hooks/AnimatedTitle";

const HomeProducts = () => {
  return (
    <section id="products" className="scroll-mt-30">
      <div className="relative w-full h-[120vh] sm:h-[100vh] bg-orange-400 flex flex-col items-center justify-center gap-6">
        <AnimatedTitle text="Our Products" textColor="text-white" />

        {/* Main container with 2 columns */}
        <div className="w-full max-w-7xl mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          {/* Left column: 3 columns */}
          <div className="grid grid-cols-3 gap-4 h-full">
            <div>
            <img
              src="/images/rim1.jpeg"
              alt="Rim preview 1"
              className="w-full h-full object-cover rounded-2xl shadow-lg aspect-[3/4]"
            />
            </div>

            <div>
            <img
              src="/images/rim2.jpeg"
              alt="Rim preview 2"
              className="w-full h-full object-cover rounded-2xl shadow-lg aspect-[3/4]"
            />
            </div>

            <div>
            <img
              src="/images/rim3.jpeg"
              alt="Rim preview 3"
              className="w-full h-full object-cover rounded-2xl shadow-lg aspect-[3/4]"
            />
            </div>
            
          </div>

          {/* Columna derecha: texto + botón */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-anton text-7xl text-gray-100">
              Coming soon...
            </h1>

            <h3 className="mt-5 font-anton text-4xl text-gray-100">
              Meanwhile, check out our catalog and send us an inquiry using the online form below
            </h3>

            <a
              href="/files/Catalogo.pdf"
              download
              className="mt-5 btn-primary cursor-pointer"
            >
              Download Catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
