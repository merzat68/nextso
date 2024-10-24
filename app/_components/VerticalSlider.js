"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

import "@/app/_components/vertical-slider.css";

export default function VerticalSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressBarRefs = useRef([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startProgressBar(currentIndex);
  }, [currentIndex]);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
  };

  const startProgressBar = (index) => {
    slides.forEach((_, i) => {
      const progressBar = progressBarRefs.current[i];
      if (progressBar) {
        progressBar.style.transition = "none";
        progressBar.style.height = i === index ? "0" : "100%";
        if (i === index) {
          setTimeout(() => {
            progressBar.style.transition = "height 5s linear";
            progressBar.style.height = "100%";
          }, 100);
        }
      }
    });
  };

  const handleSlideClick = (index) => {
    setCurrentIndex(index);
    startAutoSlide();
  };

  return (
    <div className="slider-container">
      <div className="slides">
        {slides.map((slide, index) => (
          <div key={index} className={`slide slide-${index} ${index === currentIndex ? "active" : ""}`} onClick={() => handleSlideClick(index)}>
            <p className="slide-title">{slide.title}</p>
            {index === currentIndex && <p className="slide-content">{slide.content}</p>}
            <div className="progress">
              <span className="progress-bar" ref={(el) => (progressBarRefs.current[index] = el)}></span>
            </div>
          </div>
        ))}
      </div>
      <div className="slide-image">
        <Image key={currentIndex} src="/projects.png" alt={`Slide ${currentIndex + 1}`} width={672} height={448} />
      </div>
    </div>
  );
}
