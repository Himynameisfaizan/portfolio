import React, { useRef } from 'react';
import { gsap } from 'gsap';

export default function Button() {
  const bgRef = useRef(null);
  const textRef = useRef(null);

  // Resume Download Logic
  const handleDownload = () => {
    // Apne public folder mein rakhi hui resume file ka path yahan dalo
    const resumeUrl = "/faizan.pdf"; 
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Faizan_Resume.pdf"); // Download hone wale file ka naam
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Mouse Enter: Yellow background aur text color smoothly animate hoga
  const handleMouseEnter = () => {
    // Yellow BG ko left se right stretch karenge
    gsap.to(bgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.4,
      ease: "power2.out",
    });

    // Dark Text overlay ko visual fill dene ke liye reveal karenge
    gsap.to(textRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  // Mouse Leave: Sab vapas normal state mein reset hoga
  const handleMouseLeave = () => {
    gsap.to(bgRef.current, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      duration: 0.4,
      ease: "power2.inOut",
    });

    gsap.to(textRef.current, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <div 
      onClick={handleDownload}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden w-fit inline-block border border-[#FFAC40] bg-[#FFAC40] py-3 px-6 cursor-pointer select-none group"
    >
      {/* 1. Dynamic Yellow Background Layer (Default Hidden via clipPath) */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-[#dedede]"
        style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
      />

      {/* 2. Base Text Layer (Default Yellow Text) */}
      <button className="relative z-10 font-['anton'] text-[#212121] text-lg tracking-wider cursor-pointer pointer-events-none">
        DOWNLOAD RESUME
      </button>

      {/* 3. Text Overlay Layer (Hover par dark dikhane ke liye - left to right slide) */}
      <button 
        ref={textRef}
        className="absolute top-1/2 left-6 -translate-y-1/2 z-20 font-['anton'] text-[#212121] text-lg tracking-wider cursor-pointer pointer-events-none whitespace-nowrap"
        style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
      >
        DOWNLOAD RESUME
      </button>
    </div>
  );
}