"use client";

import React, { useState } from "react";
import SliderComponent from "../Slider";
import Link from "next/link";

export default function FirstSection() {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (e, linkIndex) => {
    e.preventDefault();
    setActiveLink(linkIndex);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full relative">
      <div className="w-[768px] py-32">
        <h1 className="text-soDigital-grey-700 text-center text-[40px] font-bold leading-[120%]">Der Social Recruitment Experte aus Freiburg mit Fokus auf deine Arbeitgebermarke.</h1>
      </div>
      <div className="flex flex-col w-full">
        <div className="w-fit p-6 self-center">
          <div className="flex items-center gap-1 rounded-xl bg-soDigital-grey-100 p-1 w-full">
            <Link className={`px-4 py-2 ${activeLink === 0 ? "bg-white" : ""}  rounded-lg`} href="#" onClick={(e) => handleLinkClick(e, 0)}>
              Talente gewinnen
            </Link>
            <Link className={`px-4 py-2 ${activeLink === 1 ? "bg-white" : ""}  rounded-lg`} href="#" onClick={(e) => handleLinkClick(e, 1)}>
              Marke stärken
            </Link>
          </div>
        </div>
        <div className="flex w-full px-12">
          <SliderComponent />
        </div>
      </div>
    </div>
  );
}
