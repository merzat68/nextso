"use client";

import React from "react";
import Marquee from "react-fast-marquee";

export default function Clients({ clients, color }) {
  return (
    <div className="relative py-6">
      <span className="absolute top-0 bottom-0 left-0 h-full z-10 w-[10%]" style={{ background: `linear-gradient(90deg, ${color}  0%, rgba(255,255,255,0) 100%)` }}></span>
      <span className="absolute top-0 bottom-0 right-0 h-full z-10 w-[10%]" style={{ background: `linear-gradient(90deg, rgba(255,255,255,0) 0%,${color}  100%)` }}></span>
      <Marquee>
        <div className="flex overflow-hidden justify-around">
          {clients.map((client, index) => (
            <span key={index} className="text-[#3A3538] text-base leading-[125%]">
              {client}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
/* 

rgba(239,238,239,1)
*/
