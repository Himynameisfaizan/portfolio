import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const sidebarRef = useRef(null);
  const menuItemsRef = useRef([]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (!isOpen) {
      gsap.to(line1Ref.current, { y: 2, duration: 0.2, ease: "power2.out" });
      gsap.to(line2Ref.current, { y: -2, duration: 0.2, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (!isOpen) {
      gsap.to(line1Ref.current, { y: 0, duration: 0.2, ease: "power2.out" });
      gsap.to(line2Ref.current, { y: 0, duration: 0.2, ease: "power2.out" });
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    if (isOpen) {
      tl.to(line1Ref.current, { y: 5, rotate: 45, duration: 0.3, ease: "power2.inOut" }, 0)
        .to(line2Ref.current, { y: -5, rotate: -45, duration: 0.3, ease: "power2.inOut" }, 0)
        .to(sidebarRef.current, { x: 0, duration: 0.6, ease: "power4.out" }, 0)
        .fromTo(
          menuItemsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.05 },
          "-=0.3"
        );
    } else {
      tl.to(line1Ref.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" }, 0)
        .to(line2Ref.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" }, 0)
        .to(sidebarRef.current, { x: "100%", duration: 0.5, ease: "power4.inOut" }, 0);
    }
  }, [isOpen]);

  return (
    <>
      {/* Top Header Navbar - Responsive Padding */}
      <div className="fixed top-0 right-0 py-6 px-6 md:py-11 md:px-10 text-white h-10 z-50 flex items-center justify-end select-none">
        <div
          className="w-10 h-10 flex flex-col justify-center items-end gap-2 cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={line1Ref} className="w-7 h-0.5 rounded-full bg-[#DEDEDE] origin-center"></div>
          <div ref={line2Ref} className="w-7 h-0.5 rounded-full bg-[#DEDEDE] origin-center"></div>
        </div>
      </div>

      {/* Slide-in Sidebar Panel - Responsive Width and Padding */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-screen w-full sm:w-112.5 bg-[#1a1a1a] z-40 shadow-2xl p-8 sm:p-16 flex flex-col justify-between text-white overflow-y-auto"
        style={{ transform: "translateX(100%)" }}
      >
        {/* Navigation Content - Responsive Flex Grid Layout */}
        <div className="mt-16 sm:mt-20 flex flex-col-reverse md:flex-row gap-10 md:gap-20">
          {/* Social Block */}
          <div>
            <p className="text-xs tracking-widest text-[#afafaf] mb-4 uppercase">Social</p>
            <div className="flex flex-col gap-2 text-lg font-medium">
              <a href="https://github.com/Himynameisfaizan" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFAC40] transition-colors duration-300 w-fit">Github</a>
              <a href="https://www.linkedin.com/in/faizan-sheikh-18791b285" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFAC40] transition-colors duration-300 w-fit">Linkedin</a>
            </div>
          </div>

          {/* Menu Block */}
          <div>
            <p className="text-xs tracking-widest text-[#afafaf] mb-4 uppercase">Menu</p>
            <div className="flex flex-col gap-4 text-xl sm:text-2xl tracking-wide">
              {[
                { name: "Home", color: "bg-blue-400", link: "#home" },
                { name: "About Me", color: "bg-blue-400", link: "#intro" },
                { name: "Skills", color: "bg-yellow-400", link: "#skills" },
                { name: "Experience", color: "bg-emerald-400", link: "#experience" },
                { name: "Projects", color: "bg-indigo-500", link: "#projects" },
              ].map((item, index) => (
                <div
                  key={item.name}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 cursor-pointer group w-fit"
                >
                  <div className={`w-2.5 h-2.5 rounded-full ${item.color}`}></div>
                  <a href={item.link} className="hover:text-[#FFAC40] transition-colors duration-300">
                    <span className="text-[#dedede] group-hover:text-[#FFAC40] transition-colors duration-300">
                      {item.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Contact Details Inside Sidebar */}
        <div ref={(el) => (menuItemsRef.current[4] = el)} className="mt-10 md:mt-0">
          <p className="text-xs tracking-widest text-[#afafaf] mb-2 uppercase">Get In Touch</p>
          <div className="flex flex-col gap-2 text-sm font-medium">
            <a href="tel:+917835901533" className="text-sm tracking-wider text-[#dedede] hover:text-[#FFAC40]">+91 78359 01533</a>
            <a href="mailto:faizansaikh830@gmail.com" className="text-sm tracking-wider text-[#dedede] hover:text-[#FFAC40]">faizansaikh830@gmail.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;