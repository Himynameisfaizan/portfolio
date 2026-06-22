import React from "react";

const Tools = () => {
  return (
    <>
      <div
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
        id="skills"
      >
        <div className="flex gap-3 md:gap-4">
          <img
            src="/icons/tools/stack.png"
            className="animate-[spin_5s_linear_infinite] w-5 md:w-6 object-contain"
            alt="img"
          />
          <span className="text-base md:text-xl text-[#b5b5b5] font-medium">
            MY STACK
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 py-8 md:py-12 items-start justify-start">
          <div className="w-full md:col-span-5">
            <span className="text-3xl md:text-5xl text-[#b5b5b5] font-['anton']">
              FRONTEND
            </span>
          </div>
          <div className="w-full md:col-span-7 flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center gap-2 py-1 md:py-2">
              <img
                src="/icons/tools/js.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                JavaScript
              </span>
            </div>
            <div className="flex items-center gap-2 py-1 md:py-2">
              <img
                src="/icons/tools/react.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                React.Js
              </span>
            </div>
            <div className="flex items-center gap-2 py-1 md:py-2">
              <img
                src="/icons/tools/redux.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Redux
              </span>
            </div>
            <div className="flex items-center gap-2 py-1 md:py-2">
              <img
                src="/icons/tools/TypeScript.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                TypeScript
              </span>
            </div>
            <div className="flex items-center gap-2 py-1 md:py-2">
              <img
                src="/icons/tools/next.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Next.Js
              </span>
            </div>

            <div className="flex items-center gap-2 py-1 md:py-2">
              <img
                src="/icons/tools/gsap.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                GSAP
              </span>
            </div>
            <div className="flex items-center gap-2 py-1 md:py-2">
              <img
                src="/icons/tools/tailwind.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Tailwind CSS
              </span>
            </div>

            <div className="flex items-center gap-2 py-1 md:py-2">
              <img
                src="/icons/tools/sass.webp"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                SASS
              </span>
            </div>
            <div className="flex items-center gap-2 py-1 md:py-2">
              <img
                src="/icons/tools/bootstrap.svg"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Bootstrap
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 py-8 md:py-12 items-start justify-start">
          <div className="w-full md:col-span-5">
            <span className="text-3xl md:text-5xl text-[#b5b5b5] font-['anton']">
              BACKEND
            </span>
          </div>
          <div className="w-full md:col-span-7 flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/node.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Node.Js
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/express.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Express.Js
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/PHP.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                PHP
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/Laravel.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Laravel
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 py-8 md:py-12 items-start justify-start">
          <div className="w-full md:col-span-5">
            <span className="text-3xl md:text-5xl text-[#b5b5b5] font-['anton']">
              DATABASE
            </span>
          </div>
          <div className="w-full md:col-span-7 flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/mysql.svg"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                MySQL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/mongodb.svg"
                className="w-5 md:w-5 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                MongoDB
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 py-8 md:py-12 items-start justify-start">
          <div className="w-full md:col-span-5">
            <span className="text-3xl md:text-5xl text-[#b5b5b5] font-['anton']">
              TOOLS
            </span>
          </div>
          <div className="w-full md:col-span-7 flex flex-wrap gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/git.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Git
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/github.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Github
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/Redis.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Redis
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/Postman.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Postman
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/icons/tools/wordpress.png"
                className="w-8 md:w-10 object-contain"
                alt="img"
              />
              <span className="text-base md:text-2xl text-[#dedede] font-medium">
                Wordpress
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
