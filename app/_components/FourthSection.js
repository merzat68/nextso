"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import marcel from "@/public/Marcel.jpeg";
import Title from "@/app/_components/Title";

export default function FourthSection() {
  return (
    <div className="flex flex-col gap-24 py-32 px-12">
      <div className="flex flex-col">
        <span className="py-[360px]">
          <h1 className="text-[#1B1819] text-center text-[80px] font-bold leading-[120%]">It’s a match!</h1>
        </span>
        <span className="h-[710px] w-full relative">
          <div className="flex flex-col absolute bg-[#fff] rounded px-4 py-3 top-6 left-6">
            <p className="text-[#1B1819] text-base font-medium leading-[125%]">Tobi</p>
            <p className="text-[#A69EA2] text-sm font-normal leading-5">Recruitment Experte</p>
          </div>
          <div className="flex flex-col absolute bg-[#fff] rounded px-4 py-3 top-6 right-6">
            <p className="text-[#1B1819] text-base font-medium leading-[125%]">Marcel</p>
            <p className="text-[#A69EA2] text-sm font-normal leading-5">Online Marketing Experte</p>
          </div>
          <Image src={marcel} className="rounded-lg w-full h-full object-cover object-top" quality={100} alt="alt" />
        </span>
      </div>

      <div className="flex flex-col items-start gap-8 px-36">
        <Title title={"Team"} type={"rec"} />
        <div className="flex">
          <div className="pr-24 w-1/2">
            <p className="text-[#1b1819] text-[40px] font-bold leading-[48px]">Gemeinsam in die Zukunft des Recruitment</p>
          </div>
          <div className="flex flex-col gap-6 w-1/2">
            <div className="pr-12 py-4">
              <p className="text-[#3a3538] text-xl font-normal leading-7">
                Der perfekte Match: Jahrelange Erfahrung im Recruiting trifft auf Online-Marketing. Gemeinsam bilden wir ein optimales paar für erfolgreiche Recruitment Kampagnen.
              </p>
            </div>
            <div className="flex py-3 items-center">
              <p className="text-center text-[#1b1819] text-base font-medium leading-normal tracking-tight">Textbutton</p>
              <p className="w-6 h-6 text-center text-[#1b1819] text-base font-medium leading-normal tracking-tight">→</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
