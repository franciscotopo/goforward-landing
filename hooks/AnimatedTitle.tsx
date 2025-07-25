"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedTitleProps = {
  text: string;
  className?: string;
  textColor?: string;
};

const AnimatedTitle = ({
  text,
  className = "",
  textColor = "text-white",
}: AnimatedTitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px 0px -30%",
  });

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`absolute top-10 left-10 text-6xl md:text-7xl font-anton uppercase tracking-[0.3rem] ${textColor} ${className}`}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedTitle;
