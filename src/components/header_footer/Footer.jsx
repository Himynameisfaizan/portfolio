import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-3 md:gap-5 items-center justify-center py-6 md:py-8 px-4 sm:px-6 md:px-8">
        <p className="text-[#dedede] font-medium text-base md:text-lg lg:text-lg text-center">
          Have a project in mind? Let's discuss!
        </p>
        <h3 className="text-[#dedede] font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['anton'] cursor-pointer hover:underline transition-all text-center">
          <a
            href="mailto:faizansaikh830@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            faizansaikh830@gmail.com
          </a>
        </h3>
        <div className="flex gap-3 md:gap-5">
          <a
            href="https://wa.me/917835901533"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/tools/whatsapp.png"
              className="w-5 md:w-6 object-contain hover:scale-110 transition-transform"
              alt="whatsapp"
            />
          </a>

          <a href="tel:+917835901533" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/tools/phone.png"
              className="w-5 md:w-6 object-contain hover:scale-110 transition-transform"
              alt="phone"
            />
          </a>
          <a
            href="https://github.com/Himynameisfaizan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/tools/github.png"
              className="w-5 md:w-6 object-contain hover:scale-110 transition-transform"
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/faizan-sheikh-18791b285/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/tools/linkedin.png"
              className="w-5 md:w-6 object-contain hover:scale-110 transition-transform"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
