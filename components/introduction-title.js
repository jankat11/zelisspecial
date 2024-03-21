"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const IntroductionTitle = ({ isRight, title }) => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: false,
  });
  return (
    <div>
      <div ref={ref} className={`w-full md:hidden  z-20 relative bottom-32`}>
        <p
          className={`home-images-title opacity-0 font-light ${
            isRight ? "rounded-l-full border-r-0 ms-auto" : "rounded-r-full border-l-0"
          } ${inView && (isRight ? "tilt-in-bottom-1" : "tilt-in-bottom-2")}`}
        >
          {title}
        </p>
      </div>
      <div className={`w-full absolute hidden md:block  bottom-8`}>
        <p className="home-images-title  font-normal">{title}</p>
      </div>
    </div>
  );
};

export default IntroductionTitle;
