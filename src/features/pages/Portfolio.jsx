import React from "react";
import Hero from "./Hero";
import Intro from "./Intro";
import Summary from "./Summary";
import Tools from "./Tools";
import Experience from "./Experience";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <>
      <Hero />
      <div className="flex items-center justify-center">
        <Intro />
      </div>
      <div className="flex flex-col items-center">
        <Summary />
      </div>
      <div className="flex w-full items-center justify-center">
        <Tools />
      </div>
      <div className="flex w-full items-center justify-center pt-25">
        <Experience />
      </div>
      <div className="flex w-full items-center justify-center py-25">
        <Projects />
      </div>

    </>
  );
};

export default Portfolio;
