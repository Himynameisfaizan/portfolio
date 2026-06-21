import React from "react";

const Experience = () => {
  return (
    <>
      <div className="w-6xl">
        <div className="gap-4 flex">
          <img
            src="/icons/tools/stack.png"
            class="animate-[spin_5s_linear_infinite] w-6 object-contain"
            alt="img"
          />
          <span className="text-xl text-[#b5b5b5] font-medium">
            MY EXPERIENCE
          </span>
        </div>
        <div className="flex justify-start py-10">
          <div className="flex flex-col w-full gap-4">
            <span className="text-lg text-[#b5b5b5] ">Do It Creation</span>
            <h3 className="text-5xl text-[#dedede] font-['anton']">
              Full Stack Developer
            </h3>
            <span className="text-lg text-[#b5b5b5] ">May 2025 - May 2026</span>
          </div>

        <div className="w-[90%] text-justify">
          <p className="text-[#afafaf] text-lg leading-6.25">
           Working here has been a great experience that really helped me grow as a developer. I took the initiative to move the company from basic WordPress sites to building complex, custom-coded web applications. By taking full responsibility for these bigger projects, I helped the company bring in larger clients and open up new business opportunities.
          </p>
          <p className="text-[#afafaf] text-lg leading-6.25 pt-2">
             On the technical side, I built fast and scalable frontend and backend solutions while managing databases smoothly. I focused on writing clean code, delivering projects quickly, and learning new technologies along the way. It felt amazing to see my work directly help the company grow and succeed.
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
