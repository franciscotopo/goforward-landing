"use client";

import React from "react";
import AnimatedTitle from "../../../hooks/AnimatedTitle";

const Contact = () => {
  
  return (
    <section id="contact" className="scroll-mt-30">
      <div className="relative w-full h-[120vh] sm:h-[100vh] bg-gray-100">
        <AnimatedTitle text="Contact Us" textColor="text-black"/>
      </div>
    </section>
  );
};

export default Contact;
