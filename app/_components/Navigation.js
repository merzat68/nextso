"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation({ menuOpen, onMenuToggle }) {
  const pathname = usePathname();

  let linkText = "Gruppe";
  let backgroundColor = "#FFFFFF"; // Default background color

  if (pathname.includes("recruiters")) {
    linkText = "Recruiters";
    backgroundColor = "#BDFFC2"; // Background color for recruiters
  } else if (pathname.includes("solutions")) {
    linkText = "Solutions";
    backgroundColor = "#EDD5FF"; // Background color for solutions
  }

  const openMenu = () => {
    // Toggle the menu state and notify the parent
    onMenuToggle(!menuOpen);
  };

  return (
    <div className="flex gap-2">
      <nav className="flex items-center gap-1 py-2 pl-3 pr-2 rounded-md" style={{ backgroundColor }}>
        <Link className="text-soDigital-grey-700 text-[15px] font-medium leading-[120%]" href="/">
          {linkText}
        </Link>
        <Image src="/threeDot.svg" alt="alt" width={5} height={10} />
      </nav>
      {pathname !== "/" && (
        <div className="flex flex-col items-center justify-center gap-1 bg-black p-3 rounded-md min-h-full cursor-pointer" onClick={openMenu}>
          <span className="block h-[2px] w-3 bg-white"></span>
          <span className="block h-[2px] w-3 bg-white"></span>
        </div>
      )}
    </div>
  );
}
