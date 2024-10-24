"use client";

import React from "react";

import Link from "next/link";
import Arrow from "./Arrow.js";

export default function MainSplash() {
  return (
    <>
      <div className="[background:rgba(255,255,255,0.70)] backdrop-blur w-1/2 hover:scale-[1.01] transition-all rounded-lg overflow-hidden">
        <Link
          href="/solutions"
          className="flex h-[302px] desktop:h-[600px] flex-col justify-between items-start flex-[1_0_0] [background:linear-gradient(270deg,rgba(255,255,255,0.00)_0%,#FFF_90.12%)] p-12"
        >
          <div className="flex justify-between w-full">
            <h4 className="text-soDigital-grey-600 text-[28px] font-bold leading-[125%]">Solutions</h4>
            <Arrow className="w-10 h-10" />
          </div>
          <div className="flex flex-col">
            <h5 className="text-soDigital-grey-700 text-base font-bold leading-[150%]">Digitale Lösungen</h5>
            <p className="">Von Webentwicklung bis zum Online Marketing.</p>
          </div>
        </Link>
      </div>
      <div className="[background:rgba(255,255,255,0.70)] backdrop-blur w-1/2 hover:scale-[1.01] transition-all rounded-lg overflow-hidden">
        <Link
          href="/recruiters"
          className="flex h-[302px] desktop:h-[600px] flex-col justify-between items-start flex-[1_0_0] [background:linear-gradient(270deg,rgba(255,255,255,0.00)_0%,#FFF_90.12%)] p-12  "
        >
          <div className="flex justify-between w-full">
            <h4 className="text-soDigital-grey-600 text-[28px] font-bold leading-[125%]">Recruiting</h4>
            <Arrow className="w-10 h-10" />
          </div>
          <div className="flex flex-col">
            <h5 className="text-soDigital-grey-700 text-base font-bold leading-[150%]">Personal Marketing</h5>
            <p className="">Talente gewinnen, Arbeitgebermarke stärken.</p>
          </div>
        </Link>
      </div>
    </>
  );
}
