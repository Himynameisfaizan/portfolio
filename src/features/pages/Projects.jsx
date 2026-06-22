import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const projectsData = [
  {
    id: "01",
    name: "Do it Creation",
    tags: [
      "Next.Js",
      "TypeScript",
      "GSAP",
      "MongoDB",
      "Bootstrap",
      "Razorpay",
    ],
    img: "/projects/doitcreation.png",
    link: "https://doitcreation.com/",
  },
  {
    id: "02",
    name: "Cert Ocean",
    tags: ["Core PHP", "MySQL", "Tailwind CSS", "Bootstrap", "Paypal"],
    img: "/projects/certocean.png",
    link: "https://certocean.com/",
  },
  {
    id: "03",
    name: "Globsure",
    tags: ["React.Js", "Tailwind CSS", "SMTP Mailer", "MySQL"],
    img: "/projects/globsure.png",
    link: "https://globsureinternational.com/",
  },
  {
    id: "04",
    name: "Happy Little Feet",
    tags: ["Wordpress", "WooCommerce", "Elementor", "Shiprocket", "Razorpay"],
    img: "/projects/happylittlefeet.png",
    link: "https://happylittlefeet.in/",
  },
  {
    id: "05",
    name: "Intellectual",
    tags: ["Laravel", "MySQL", "Tailwind CSS"],
    img: "/projects/ipcgv.png",
    link: "https://ipcgv.com/",
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-0 md:pt-10 overflow-hidden" id="projects">
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src="/icons/tools/stack.png"
          className="animate-[spin_5s_linear_infinite] w-5 md:w-6 object-contain"
          alt="img"
        />

        <span className="text-base md:text-xl text-[#b5b5b5] font-medium">
          SELECTED PROJECTS
        </span>
      </div>
      <div className="flex flex-col">
         {projectsData.map((project) => (
             <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.id}>
             <ProjectRow
            key={project.id}
            project={project}
            isAnyHovered={hoveredId !== null}
            isCurrentHovered={hoveredId === project.id}
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
            />
            </a>
        ))}
      </div>
    </div>
  );
};

function ProjectRow({
  project,
  isAnyHovered,
  isCurrentHovered,
  onMouseEnter,
  onMouseLeave,
}) {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(imageRef.current, {
      x: x,
      y: y,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleRowEnter = () => {
    onMouseEnter();

    gsap.to(imageRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(textRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleRowLeave = () => {
    onMouseLeave();

    gsap.to(imageRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    gsap.to(textRef.current, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      duration: 0.4,
      ease: "power2.in",
    });
  };

  return (
    <div
      className={`relative flex flex-col sm:flex-row pb-2 pt-6 md:pt-10 gap-3 md:gap-5 border-b border-[#afafaf44] cursor-pointer transition-opacity duration-500 ease-out z-10
        ${isAnyHovered && !isCurrentHovered ? "opacity-20" : "opacity-100"}`}
      onMouseEnter={handleRowEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleRowLeave}
    >
      <div className="z-20 shrink-0">
        <span className="font-['anton'] text-[#afafaf] text-sm md:text-base">_</span>
        <span className="font-['anton'] text-[#afafaf] text-sm md:text-base">{project.id}</span>
        <span className="font-['anton'] text-[#afafaf] text-sm md:text-base">.</span>
      </div>

      <div className="z-20 w-full">
        <div className="relative inline-block select-none">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-['anton'] text-[#dedede] leading-tight">
            {project.name}
          </p>

          <p
            ref={textRef}
            className="absolute top-0 left-0 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-['anton'] text-[#FFAC40] pointer-events-none leading-tight"
            style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
          >
            {project.name}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 items-center">
          {project.tags.map((tag, i) => (
            <React.Fragment key={tag}>
              <span className="text-[#afafaf] font-medium text-[0.65rem] md:text-[0.75rem]">
                {tag}
              </span>
              {i < project.tags.length - 1 && (
                <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#b5b5b5] rounded-full"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div
        ref={imageRef}
        className="absolute pointer-events-none w-40 h-28 sm:w-52 md:w-64 lg:w-72 sm:h-32 md:h-40 lg:h-44 rounded-lg overflow-hidden shadow-2xl opacity-0 scale-0 z-50 origin-center"
        style={{
          transform: "translate(-50%, -50%)",
          top: 0,
          left: 0,
        }}
      >
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default Projects;
