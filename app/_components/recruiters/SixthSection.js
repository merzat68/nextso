"use client";

import React from "react";
import Title from "@/app/_components/Title";
import ProjectSlider from "@/app/_components/ProjectSlider";
import { usePathname } from "next/navigation";

export default function SixthSection() {
  const pathname = usePathname();
  let type = "rec";

  if (pathname.includes("solutions")) {
    type = "sol";
  }

  const items = [
    {
      title: "Title",
      link: "#",
      description: "Description",
      image: "/projects.png",
    },
    {
      title: "Title",
      link: "#",
      description: "Description",
      image: "/projects.png",
    },
    {
      title: "Title",
      link: "#",
      description: "Description",
      image: "/projects.png",
    },
  ];
  return (
    <div className="flex flex-col gap-32 py-32">
      <div className="flex flex-col items-center gap-8 px-[192px]">
        <Title title={"Projekte"} type={type} />
        <span className="px-[192px] pb-4">
          <h2 className="text-center text-[#1b1819] text-[40px] font-bold leading-[48px]">Von Menschen für Menschen. Gemeinsam schreiben wir digitale Erfolgsgeschichte. </h2>
        </span>
      </div>
      <ProjectSlider items={items} />
    </div>
  );
}
