"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation.js";
import Menu from "@/app/_components/MainMenu";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  let position = "relative";

  // Function to update menuOpen in the parent
  const handleMenuToggle = (newState) => {
    setMenuOpen(newState);
  };

  // Effect to manage body overflow based on menuOpen state
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Restore default behavior
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  if (pathname.includes("solutions/services")) position = "absolute";

  return (
    <>
      <header className={`${position} top-0 flex justify-between items-center gap-4 max-w-[1536px] w-full mx-auto desktop:px-12 py-8 rounded-md z-10`}>
        <Logo />
        <Navigation menuOpen={menuOpen} onMenuToggle={handleMenuToggle} />
      </header>
      {menuOpen && <Menu menuOpen={menuOpen} onMenuToggle={handleMenuToggle} />}
    </>
  );
}
