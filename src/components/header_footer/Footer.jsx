import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-6xl flex flex-col gap-5 items-center justify-center py-8">
        <p className="text-[#dedede] font-medium text-lg">
          Have a project in mind? Let's discuss!
        </p>
        <h3 className="text-[#dedede] font-medium text-4xl font-['anton'] cursor-pointer hover:underline">
          <a
            href="mailto:faizansaikh830@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            faizansaikh830@gmail.com
          </a>
        </h3>
        <div className="flex gap-5">
          <a
            href="https://wa.me/917835901533"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/tools/whatsapp.png"
              className="w-6 object-contain"
              alt="whatsapp"
            />
          </a>

          <a href="tel:+917835901533" target="_blank" rel="noopener noreferrer">
            <img
              src="/icons/tools/phone.png"
              className="w-6 object-contain"
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
              className="w-6 object-contain"
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
              className="w-6 object-contain"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
