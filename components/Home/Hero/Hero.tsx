"use client";

import React from "react";
import useTypewriter from "../../../hooks/useTypewriter";

const Hero = () => {
  const typedText = useTypewriter("Gear up. Lock in. Go Forward.", 80);

  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* Hero Video Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>

      <video
        src="/videos/court-footage.webm"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Hero Text Content */}
      <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div>
            <h1 className="min-h-[120px] text-6xl mb-4 md:mb-0 text-center md:text-[35px] lg:text-[80px] tracking-[0.5rem] text-white font-anton uppercase">
              {typedText}
            </h1>
            <p className="md:text-3xl text-center text-white font-anton [word-spacing:5px] [letter-spacing:2px]">
              Champion quality, ready for you.
            </p>
          </div>

          {/* Explore Products Button */}
          <button
            onClick={() => {
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded hover:bg-gray-200 transition"
          >
            Explore our products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
