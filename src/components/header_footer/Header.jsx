import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const sidebarRef = useRef(null);
  const menuItemsRef = useRef([]);

  // 1. Hamburger Hover Animation (Lines bending effect)
  const handleMouseEnter = () => {
    if (!isOpen) {
      // Dono lines halki si bend/skew ya close aayengi ek dynamic feel ke liye
      gsap.to(line1Ref.current, { y: 2, duration: 0.2, ease: "power2.out" });
      gsap.to(line2Ref.current, { y: -2, duration: 0.2, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (!isOpen) {
      // Mouse hatne par vapas apni jagah
      gsap.to(line1Ref.current, { y: 0, duration: 0.2, ease: "power2.out" });
      gsap.to(line2Ref.current, { y: 0, duration: 0.2, ease: "power2.out" });
    }
  };

  // 2. Toggle Menu (Click behavior for Cross and Sidebar slide)
  useEffect(() => {
    const tl = gsap.timeline();

    if (isOpen) {
      // --- OPENING ANIMATION ---
      // Hamburger to Cross
      tl.to(
        line1Ref.current,
        { y: 5, rotate: 45, duration: 0.3, ease: "power2.inOut" },
        0,
      )
        .to(
          line2Ref.current,
          { y: -5, rotate: -45, duration: 0.3, ease: "power2.inOut" },
          0,
        )
        // Sidebar Slide-In
        .to(sidebarRef.current, { x: 0, duration: 0.6, ease: "power4.out" }, 0)
        // Staggered Links Reveal (one by one upar aayenge)
        .fromTo(
          menuItemsRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.05,
          },
          "-=0.3",
        );
    } else {
      // --- CLOSING ANIMATION ---
      // Cross back to Hamburger
      tl.to(
        line1Ref.current,
        { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" },
        0,
      )
        .to(
          line2Ref.current,
          { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" },
          0,
        )
        // Sidebar Slide-Out (poora right se bahar)
        .to(
          sidebarRef.current,
          { x: "100%", duration: 0.5, ease: "power4.inOut" },
          0,
        );
    }
  }, [isOpen]);

  return (
    <>
      {/* Top Header Navbar */}
      <div className="fixed top-0 right-0 py-11 px-10 text-white h-10 z-50 flex items-center justify-end select-none">
        <div
          className="w-10 h-10 flex flex-col justify-center items-end gap-2 cursor-pointer group"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Line 1 */}
          <div
            ref={line1Ref}
            className="w-7 h-0.5 rounded-full bg-[#DEDEDE] origin-center"
          ></div>
          {/* Line 2 */}
          <div
            ref={line2Ref}
            className="w-7 h-0.5 rounded-full bg-[#DEDEDE] origin-center"
          ></div>
        </div>
      </div>

      {/* Slide-in Sidebar Panel */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-screen w-full sm:w-112.5 bg-[#1a1a1a] z-40 shadow-2xl p-16 flex flex-col justify-between text-white"
        style={{ transform: "translateX(100%)" }} // Initial state: Screen ke bahar right side mein
      >
        {/* Navigation Content */}
        <div className="mt-20 flex gap-20">
          {/* Social Block */}
          <div>
            <p className="text-xs tracking-widest text-[#afafaf] mb-4 uppercase">
              Social
            </p>
            <div className="flex flex-col gap-2 text-lg font-medium">
              <a
                href="https://github.com/Himynameisfaizan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFAC40] transition-colors duration-300 w-fit"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/faizan-sheikh-18791b285"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFAC40] transition-colors duration-300 w-fit"
              >
                Linkedin
              </a>
            </div>
          </div>

          {/* Menu Block */}
          <div>
            <p className="text-xs tracking-widest text-[#afafaf] mb-4 uppercase">
              Menu
            </p>
            <div className="flex flex-col gap-4 text-2xl tracking-wide">
              {[
                { name: "Home", color: "bg-yellow-400" },
                { name: "About Me", color: "bg-blue-400" },
                { name: "Experience", color: "bg-emerald-400" },
                { name: "Projects", color: "bg-indigo-500" },
              ].map((item, index) => (
                <div
                  key={item.name}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  className="flex items-center gap-3 cursor-pointer group w-fit"
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${item.color}`}
                  ></div>
                  <span className="text-[#dedede] group-hover:text-[#FFAC40] transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Contact Details Inside Sidebar */}
        <div ref={(el) => (menuItemsRef.current[4] = el)}>
          <p className="text-xs tracking-widest text-[#afafaf] mb-2 uppercase">
            Get In Touch
          </p>
          <a
            href="mailto:faizansaikh830@gmail.com"
            className="text-sm tracking-wider text-[#dedede] hover:text-[#FFAC40]"
          >
            faizansaikh830@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
