import React from "react";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <>
      <div className="flex items-start justify-center w-full gap-5">

        <div className="w-30 relative">
          <span className="fixed -left-24 top-70 text-[#afafaf] -translate-y-1/2 rotate-90 font-normal tracking-widest">
            faizansaikh830@gmail.com
          </span>
        </div>

        <div className="w-full py-10 px-15 flex flex-col gap-6">
          <div>
            <h3 className="text-7xl font-['anton'] text-[#FFAC40]">
              FULL STACK
            </h3>
            <h3 className="text-7xl font-['anton'] text-[#dedede] ml-4">
              DEVELOPER
            </h3>
          </div>
          <div className="text-justify">
            <span className="text-[#afafaf] text-[1.1rem]">
              Hi, I'm <span className="text-white">Faizan</span>. A Full-Stack
              Developer dedicated to crafting seamless user experiences and
              high-performance web applications with 1 year of hands-on
              experience.
            </span>
          </div>
          <Button />
        </div>

        <div className="w-[80%] flex flex-col items-end justify-end px-14 gap-10 h-115">
          <div className="flex flex-col items-end">
            <h3 className="text-[#FFAC40] text-4xl font-['anton']">1</h3>
            <span className="text-[#afafaf] text-lg font-light">Year of Experience</span>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-[#FFAC40] text-4xl font-['anton']">10</h3>
            <span className="text-[#afafaf] text-lg font-light">Complete Projects</span>
          </div>
          <div className="flex flex-col items-end">
            <h3 className="text-[#FFAC40] text-4xl font-['anton']">6K+</h3>
            <span className="text-[#afafaf] text-lg font-light">Hour Worked</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;
