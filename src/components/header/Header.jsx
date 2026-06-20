import React from "react";

const Header = () => {
  return (
    <div className="py-11 px-10 text-white h-10 w-full flex items-center justify-end ">
      <div className="w-10 flex flex-col gap-2 cursor-pointer">
        <div className="w-7 h-0.5 rounded-full bg-[#DEDEDE]"></div>
        <div className="w-7 h-0.5 rounded-full bg-[#DEDEDE]"></div>
      </div>
    </div>
  );
};

export default Header;
