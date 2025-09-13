"use client";

import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-[#111] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-end">
        <div
          onClick={() => window.open("mailto:omerechchenygry@gmail.com")}
          className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5"
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
