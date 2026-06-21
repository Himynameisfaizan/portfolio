import React from "react";

const Summary = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-2 py-8">
        <span className="text-[#afafaf]">This is me.</span>
        <div className="w-6xl h-px bg-[#afafaf4d]"></div>
      </div>

      <div className="flex items-start justify-center w-6xl py-5 mb-40">
        <div className="w-full">
          <span className="text-[#dedede] text-5xl">Hi, I'm Faizan.</span>
        </div>
        <div className="w-full">
          <div className="w-[90%] text-justify">
            <p className="text-[#afafaf] text-lg leading-6.25">
             My journey into full-stack development stems from a deep curiosity about how things work under the hood. I enjoy breaking down complex problems and turning them into clean, efficient code. 
            </p>
            <p className="text-[#afafaf] text-lg mt-2 leading-6.25">
             For me, development isn't just a job it’s an ongoing adventure of learning new frameworks, optimizing logic, and building impactful digital experiences from scratch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
