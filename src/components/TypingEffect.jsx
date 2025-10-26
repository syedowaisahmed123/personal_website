import React from "react";
import { ReactTyped } from "react-typed";

const TypingEffect = () => {
  return (
    <ReactTyped
      strings={["Software Developer.", "Software Engineer.", "Full Stack Developer."]}
      typeSpeed={100}     // typing speed in ms
      backSpeed={50}     // deleting speed
      loop               // loop infinitely
      className="text-[#00bfa6] font-bold text-xl md:text-2xl"
    />
  );
};

export default TypingEffect;
