"use client";

import React from "react";
import Link from "next/link";

export default function Title({ title, type }) {
  return (
    <Link href="#" className="flex items-center gap-2 py-2 px-3 bg-[#3A3538] rounded-lg w-fit">
      <span className={`${type === "rec" ? "bg-[#82E89D]" : "bg-[#DA9FFF]"} block w-3 h-3 rounded-full`}></span>
      <p className="text-soDigital-grey-100 text-sm font-medium leading-5">{title}</p>
    </Link>
  );
}
