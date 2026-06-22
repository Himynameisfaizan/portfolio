import React from "react";

const Experience = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8" id="experience">
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src="/icons/tools/stack.png"
            className="animate-[spin_5s_linear_infinite] w-5 md:w-6 object-contain"
            alt="img"
          />
          <span className="text-base md:text-xl text-[#b5b5b5] font-medium">
            MY EXPERIENCE
          </span>
        </div>
        <div className="flex flex-col gap-8 py-8 md:py-10">
          <div className="flex flex-col xl:items-start lg:flex-row lg:items-start justify-between gap-8">
            <div className="flex flex-col gap-3 w-full lg:w-[60%]">
              <span className="text-base md:text-lg text-[#b5b5b5]">Do It Creation</span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#dedede] font-['anton']">
                Full Stack Developer
              </h3>
              <span className="text-base md:text-lg text-[#b5b5b5]">May 2025 - May 2026</span>
            </div>
            <div className="w-full lg:w-[50%] text-justify">
              <p className="text-sm sm:text-base md:text-lg text-[#afafaf] leading-6 md:leading-7">
                Working here has been a great experience that really helped me grow as a developer. I took the initiative to move the company from basic WordPress sites to building complex, custom-coded web applications. By taking full responsibility for these bigger projects, I helped the company bring in larger clients and open up new business opportunities.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-[#afafaf] leading-6 md:leading-7 pt-3">
                On the technical side, I built fast and scalable frontend and backend solutions while managing databases smoothly. I focused on writing clean code, delivering projects quickly, and learning new technologies along the way. It felt amazing to see my work directly help the company grow and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
