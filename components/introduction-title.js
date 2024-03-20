"use client"
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

const IntroductionTitle = ({ isRight, title }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div>
      <div ref={ref} className={`w-full md:hidden  z-20 relative bottom-24`}>
        <p
          className={`home-images-title opacity-0 font-light ${
            isRight ? "rounded-l-full ms-auto" : "rounded-r-full"
          } ${inView && "tilt-in-bottom-1"}`}
        >
          {title}
        </p>
      </div>
      <div className={`w-full absolute hidden md:block  bottom-8`}>
        <p className="home-images-title border-none font-normal">{title}</p>
      </div>
    </div>
  );
};

export default IntroductionTitle;
