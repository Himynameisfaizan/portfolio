import React from "react";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-center w-full gap-5 md:gap-8 lg:gap-10">
        {/* Fixed Email Sidebar - Hidden on mobile, visible on md and up */}
        <div className="hidden md:block md:w-20 lg:w-30 relative">
          <div className="fixed left-2 md:left-4 top-[60%] -translate-y-1/2 z-50 mix-blend-difference">
            <span
              className="text-xs md:text-sm text-[#dedede] font-normal tracking-widest block"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(0deg)",
              }}
            >
              faizansaikh830@gmail.com
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full py-6 md:py-10 sm:py-0 px-4 sm:px-8 md:px-6 lg:px-0 flex flex-col gap-4 md:gap-6">
          <div>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['anton'] text-[#FFAC40] leading-tight">
              FULL STACK
            </h3>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['anton'] text-[#dedede] ml-0 sm:ml-2 md:ml-3 lg:ml-4 leading-tight">
              DEVELOPER
            </h3>
          </div>
          <div className="w-[50%] text-justify">
            <span className="text-[#afafaf] text-base sm:text-base md:text-[1rem] lg:text-[1.1rem] leading-relaxed">
              Hi, I'm <span className="text-white">Faizan</span>. A Full-Stack
              Developer dedicated to crafting seamless user experiences and
              high-performance web applications.
            </span>
          </div>
          <Button />
        </div>

        {/* Stats Section - Responsive Layout */}
        <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end px-4 sm:px-8 md:px-4 lg:px-1 gap-4 md:gap-10 md:h-auto lg:h-125">
          <div className="flex flex-col items-center md:items-end gap-1">
            <h3 className="text-[#FFAC40] text-2xl sm:text-3xl md:text-4xl font-['anton']">1</h3>
            <span className="text-[#afafaf] text-xs sm:text-base  font-light  md:text-right">
              Year of Experience
            </span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <h3 className="text-[#FFAC40] text-2xl sm:text-3xl md:text-4xl font-['anton']">10</h3>
            <span className="text-[#afafaf] text-xs sm:text-base font-light text-center md:text-right">
              Completed Projects
            </span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <h3 className="text-[#FFAC40] text-2xl sm:text-3xl md:text-4xl font-['anton']">10+</h3>
            <span className="text-[#afafaf] text-xs sm:text-base font-light text-center md:text-right">
              Happy Clients Served
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
