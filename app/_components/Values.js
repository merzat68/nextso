"use client";

import React from "react";
import Title from "@/app/_components/Title";
import InfoBoxes from "@/app/_components/InfoBoxes";
import { usePathname } from "next/navigation";

export default function Values({ title, headline, description, items }) {
  const pathname = usePathname();
  let type = "rec";

  if (pathname.includes("solutions")) {
    type = "sol";
  }

  return (
    <div className="flex gap-12 px-24 py-32">
      <div className="flex gap-8 flex-col w-5/12 py-8 pr-12">
        <Title title={title} type={type} />
        <p className="self-stretch text-[#1b1819] text-6xl font-bold leading-[100%]" dangerouslySetInnerHTML={{ __html: headline }}></p>
        <p className="self-stretch text-[#3a3538] text-xl font-normal leading-7">{description}</p>
      </div>
      <InfoBoxes items={items} type={type} />
    </div>
  );
}
