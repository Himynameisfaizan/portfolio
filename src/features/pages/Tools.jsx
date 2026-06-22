import React from "react";

// 1. Pure Tech Stack ka Data Clean Structure mein convert kiya
const skillsData = [
  {
    category: "FRONTEND",
    items: [
      { name: "JavaScript", icon: "/icons/tools/js.png" },
      { name: "React.Js", icon: "/icons/tools/react.png" },
      { name: "Redux", icon: "/icons/tools/redux.png" },
      { name: "TypeScript", icon: "/icons/tools/TypeScript.png" },
      { name: "Next.Js", icon: "/icons/tools/next.png" },
      { name: "GSAP", icon: "/icons/tools/gsap.png" },
      { name: "Tailwind CSS", icon: "/icons/tools/tailwind.png" },
      { name: "SASS", icon: "/icons/tools/sass.webp" },
      { name: "Bootstrap", icon: "/icons/tools/bootstrap.svg" },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { name: "Node.Js", icon: "/icons/tools/node.png" },
      { name: "Express.Js", icon: "/icons/tools/express.png" },
      { name: "PHP", icon: "/icons/tools/PHP.png" },
      { name: "Laravel", icon: "/icons/tools/Laravel.png" },
    ],
  },
  {
    category: "DATABASE",
    items: [
      { name: "MySQL", icon: "/icons/tools/mysql.svg" },
      { name: "MongoDB", icon: "/icons/tools/mongodb.svg" },
    ],
  },
  {
    category: "TOOLS",
    items: [
      { name: "Git", icon: "/icons/tools/git.png" },
      { name: "Github", icon: "/icons/tools/github.png" },
      { name: "Redis", icon: "/icons/tools/Redis.png" },
      { name: "Postman", icon: "/icons/tools/Postman.png" },
      { name: "Wordpress", icon: "/icons/tools/wordpress.png" },
    ],
  },
];

const Tools = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10" id="skills">
      {/* Header Block */}
      <div className="flex items-center gap-3 md:gap-4 mb-6">
        <img
          src="/icons/tools/stack.png"
          className="animate-[spin_5s_linear_infinite] w-5 md:w-6 object-contain"
          alt="stack icon"
        />
        <span className="text-base md:text-xl text-[#b5b5b5] font-medium tracking-wider">
          MY STACK
        </span>
      </div>

      {/* Dynamic Rows Mapping */}
      {skillsData.map((section) => (
        <div 
          key={section.category} 
          className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 md:py-10 border-b border-[#afafaf22] last:border-0 items-start"
        >
          {/* Title Component */}
          <div className="w-full md:col-span-5">
            <span className="text-3xl md:text-5xl text-[#b5b5b5] font-['anton'] tracking-wide">
              {section.category}
            </span>
          </div>

          {/* Icons Grid: Fixed 3 columns on mobile (320px-375px) and auto-wrap on desktop */}
          <div className="w-full md:col-span-7 grid grid-cols-3 sm:flex sm:flex-wrap gap-x-2 gap-y-6 sm:gap-6 md:gap-8 pt-2 sm:pt-0">
            {section.items.map((item) => (
              <div 
                key={item.name} 
                className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-center sm:text-left"
              >
                <img
                  src={item.icon}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                  alt={item.name}
                />
                <span className="text-[11px] sm:text-base md:text-xl text-[#dedede] font-medium tracking-tight break-words sm:break-normal max-w-full">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;