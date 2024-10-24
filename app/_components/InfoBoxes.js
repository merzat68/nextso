"use client";

import React from "react";

export default function InfoBoxes({ items, type }) {
  return (
    <div className="flex gap-2 flex-col pt-24 flex-grow">
      {items.map((item, index) => (
        <div className="flex gap-20 py-16 px-12 bg-[#1b1819] rounded-lg" key={index}>
          <div>
            <p className="text-white text-xl font-normal leading-7">{index + 1}</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex-col justify-start items-start gap-6 flex">
              <h6 className={`${type === "rec" ? "text-[#82E89D]" : "text-[#DA9FFF]"} text-xl font-medium leading-7`}>{item.title}</h6>
              <p className="text-white text-base font-normal leading-normal">{item.description}</p>
              <div className="flex items-center py-2">
                <p className="text-center text-white text-base font-medium leading-normal">Mehr erfahren</p>
                <p className="w-6 text-center text-white text-base font-medium leading-normal">→</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
