import React from "react";

const Summary = () => {
  return (
    <>
      <div className="flex flex-col items-start w-full max-w-7xl mx-auto gap-2 py-6 md:py-8 px-4 sm:px-6 md:px-8">
        <span className="text-xs md:text-sm text-[#afafaf]">This is me.</span>
        <div className="w-full max-w-6xl h-px bg-[#afafaf4d]"></div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-6xl mx-auto py-4 md:py-5 mb-20 md:mb-40 px-4 sm:px-6 md:px-8 gap-6 md:gap-0">
        <div className="w-full md:w-full">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#dedede] block">Hi, I'm Faizan.</span>
        </div>
        <div className="w-full md:w-full">
          <div className="w-full md:w-[90%] text-justify">
            <p className="text-sm sm:text-base md:text-lg text-[#afafaf] leading-6 md:leading-6.25">
             My journey into full-stack development stems from a deep curiosity about how things work under the hood. I enjoy breaking down complex problems and turning them into clean, efficient code. 
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#afafaf] mt-2 md:mt-3 leading-6 md:leading-6.25">
             For me, development isn't just a job it’s an ongoing adventure of learning new frameworks, optimizing logic, and building impactful digital experiences from scratch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
