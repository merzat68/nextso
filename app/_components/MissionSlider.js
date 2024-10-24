"use client";

import "./mission-slider.css";
import { useState } from "react";
import Image from "next/image";

const VerticalCardSlider = () => {
  const slides = [
    {
      backgroundColor: "#EDD5FF", // Red background
      title: "Slide 1",
      description: "Individualisierte und nachhaltige Digitale Lösungen sind das Ergebnis der ausgearbeiteten Vision und Strategie.",
      extraDescription: "We move fast while ensuring we stay on the right course. Through efficient workflows, expert guidance, and a cross-functional team of specialists.",
    },
    {
      backgroundColor: "#f3e7fd", // Green background
      title: "Slide 2",
      description: "Individualisierte und nachhaltige Digitale Lösungen sind das Ergebnis der ausgearbeiteten Vision und Strategie.",
      extraDescription: "We move fast while ensuring we stay on the right course. Through efficient workflows, expert guidance, and a cross-functional team of specialists.",
    },
    {
      backgroundColor: "#f7ecff", // Blue background
      title: "Slide 3",
      description: "Individualisierte und nachhaltige Digitale Lösungen sind das Ergebnis der ausgearbeiteten Vision und Strategie.",
      extraDescription: "We move fast while ensuring we stay on the right course. Through efficient workflows, expert guidance, and a cross-functional team of specialists.",
    },
    {
      backgroundColor: "#f7ecff", // Blue background
      title: "Slide 4",
      description: "Individualisierte und nachhaltige Digitale Lösungen sind das Ergebnis der ausgearbeiteten Vision und Strategie.",
      extraDescription: "We move fast while ensuring we stay on the right course. Through efficient workflows, expert guidance, and a cross-functional team of specialists.",
    },
    {
      backgroundColor: "#f7ecff", // Blue background
      title: "Slide 5",
      description: "Individualisierte und nachhaltige Digitale Lösungen sind das Ergebnis der ausgearbeiteten Vision und Strategie.",
      extraDescription: "We move fast while ensuring we stay on the right course. Through efficient workflows, expert guidance, and a cross-functional team of specialists.",
    },
    // Add more slides with different background colors
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideClick = (index) => {
    setActiveIndex(index); // Make the clicked slide the active one
  };

  const formatIndex = (index) => {
    return index < 9 ? `0${index + 1}` : index + 1;
  };

  return (
    <div className="mission-slider">
      {slides.map((slide, index) => {
        const offset = (index - activeIndex + slides.length) % slides.length;
        let className = "slide";

        // Apply depth based on position
        if (offset === 0) {
          className = `${className} active`;
        } else if (offset === 1) {
          className = `${className} second`;
        } else if (offset === 2) {
          className = `${className} third`;
        } else {
          className = `${className} hidden`;
        }

        return (
          <div
            key={index}
            className={className}
            style={{ backgroundColor: slide.backgroundColor }} // Set background color
            onClick={() => handleSlideClick(index)} // Set the slide as active on click
          >
            <div className="slide-image">
              <Image src="/marcel.png" alt="alt" width={500} height={300} />
            </div>
            <div className="slide-content">
              <div className="slide-content-title">
                <h2>{slide.title}</h2>
                <h3>{formatIndex(index)}</h3>
              </div>
              <div className="slide-content-description">
                <p>{slide.description}</p>
                <p>{slide.extraDescription}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalCardSlider;
