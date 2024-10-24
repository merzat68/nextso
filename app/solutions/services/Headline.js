"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import calendar from "@/public/calendar.svg";
import calendarPurple from "@/public/calendar-purple.svg";
import Phone from "@/public/phone.svg";

export default function Headline() {
  const path = usePathname();
  let backgroundColor = "#BDFFC2";
  let calendarIcon = calendar;

  if (path.includes("solutions")) {
    backgroundColor = "#EDD5FF";
    calendarIcon = calendarPurple;
  }

  return (
    <section className="flex flex-col relative">
      <div className="flex">
        <Image src="/references.jpeg" className="h-[752px] object-cover" alt="alt" width={1536} height={752} />
      </div>
      <div className="flex justify-between px-12 py-8">
        <Link href="#" className="flex items-center gap-4 py-3">
          <h6 className="">Mehr erfahren</h6>
          <p className="">↓</p>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="#" className="flex p-3 items-center gap-1 rounded-lg bg-soDigital-grey-700">
            <Image src={calendarIcon} alt="alt" width={24} height={24} />
            <p className="text-white text-base font-medium leading-[150%] px-2">Lerne uns kennen</p>
          </Link>
          <Link href="#" className={`flex items-center justify-center p-3 bg-[${backgroundColor}] rounded-lg`}>
            <Image src={Phone} alt="alt" width={24} height={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
