"use client";

import star from "@/public/star.svg";
import starPurple from "@/public/star-purple.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Testimonial() {
  const pathname = usePathname();
  let type = "rec";

  if (pathname.includes("solutions")) {
    type = "sol";
  }

  return (
    <div className="flex px-6 py-48 flex-col items-center gap-8 w-[575px] m-auto">
      <div className="flex gap-1 justify-center items-center">
        {[...Array(5)].map((_, index) => (
          <Image src={type === "rec" ? star : starPurple} alt="alt" width={48} height={48} key={index} />
        ))}
      </div>
      <div className="text-center text-[#1b1819] text-[40px] font-bold">„Wenn ich könnte, würde ich 10 Sterne vergeben.“</div>
      <div className="text-center text-[#3a3538] text-xl font-medium">Bewertung auf Google</div>
    </div>
  );
}
