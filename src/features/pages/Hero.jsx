import React from "react";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-center w-full gap-8 md:gap-8 lg:gap-10 px-4 sm:px-8 md:px-12 py-10 md:py-20">
        
        {/* Fixed Email Sidebar - Hidden on mobile, visible on md and up */}
        <div className="hidden md:block md:w-20 lg:w-30 relative">
          <div className="fixed left-4 top-[60%] -translate-y-1/2 z-50 mix-blend-difference">
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

        {/* Main Content - Responsive adjustments applied */}
        <div className="w-full flex flex-col gap-5 md:gap-6">
          <div>
            {/* Mobile par text-3xl kiya taaki single line me fit aaye screen breaking ke bina */}
            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-['anton'] text-[#FFAC40] leading-none tracking-wide">
              FULL STACK
            </h3>
            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-['anton'] text-[#dedede] leading-none tracking-wide mt-1">
              DEVELOPER
            </h3>
          </div>

          {/* Fixed: Mobile par full width aur clean text alignment */}
          <div className="w-full md:w-[70%] lg:w-[55%] text-left">
            <span className="text-[#afafaf] text-sm sm:text-base md:text-[1rem] lg:text-[1.1rem] leading-relaxed block">
              Hi, I'm <span className="text-white font-medium">Faizan</span>. A Full-Stack
              Developer dedicated to crafting seamless user experiences and
              high-performance web applications.
            </span>
          </div>
          
          <div className="pt-2">
            <Button />
          </div>
        </div>

        {/* Stats Section - Responsive Layout */}
        <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-4 md:gap-10 md:mt-10 lg:mt-0">
          <div className="flex flex-col items-start md:items-end gap-1">
            <h3 className="text-[#FFAC40] text-xl sm:text-3xl md:text-4xl font-['anton']">1</h3>
            <span className="text-[#afafaf] text-[10px] sm:text-sm font-light md:text-right whitespace-nowrap">
              Year of Experience
            </span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <h3 className="text-[#FFAC40] text-xl sm:text-3xl md:text-4xl font-['anton']">10</h3>
            <span className="text-[#afafaf] text-[10px] sm:text-sm font-light text-center md:text-right whitespace-nowrap">
              Completed Projects
            </span>
          </div>
          <div className="flex flex-col items-end md:items-end gap-1">
            <h3 className="text-[#FFAC40] text-xl sm:text-3xl md:text-4xl font-['anton']">10+</h3>
            <span className="text-[#afafaf] text-[10px] sm:text-sm font-light text-right whitespace-nowrap">
              Happy Clients
            </span>
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;