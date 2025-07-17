"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px 0px -40%",
  });

  return (
    <section id="contact" ref={ref} className="scroll-mt-30">
      <div className="relative w-full h-[120vh] sm:h-[100vh] bg-gray-100">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-10 left-10 text-black text-6xl md:text-7xl font-anton uppercase tracking-[0.5rem]"
        >
          Contact
        </motion.h1>
      </div>
    </section>
  );
};

export default Contact;
