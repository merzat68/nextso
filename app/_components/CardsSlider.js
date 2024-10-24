"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./cards-slider.css";
import { usePathname } from "next/navigation";

export default function CardsSlider({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const path = usePathname();
  let backgroundColor = "#BDFFC2";

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  if (path.includes("solutions")) {
    backgroundColor = "#EDD5FF";
  }

  return (
    <div className="cards-container">
      <button className={`cards-container-button prev bg-[${backgroundColor}]`} onClick={handlePrev}>
        <Image src={"/right-arrow.png"} alt="alt" width={40} height={40} />
      </button>
      <div className="cards-container-wrapper">
        {slides.map((slide, index) => {
          let className = "cards-container-item";
          if (index === activeIndex) {
            className += " active";
          } else if (index === (activeIndex + 1) % slides.length || (activeIndex === slides.length - 1 && index === 0)) {
            className += " first-back";
          } else if (index === (activeIndex + 2) % slides.length || (activeIndex === slides.length - 2 && index === 0)) {
            className += " second-back";
          } else {
            className += " background";
          }

          return (
            <div key={index} className={className}>
              <Image src={slide.image} alt="alt" width={1056} height={704} />
            </div>
          );
        })}
      </div>
      <button className={`cards-container-button next bg-[${backgroundColor}]`} onClick={handleNext}>
        <Image src={"/right-arrow.png"} alt="alt" width={40} height={40} />
      </button>
    </div>
  );
}
