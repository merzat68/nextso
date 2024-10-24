"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import leftArrow from "@/public/left-arrow.svg";
import logo from "@/public/logo-mobile.png";
import person from "@/public/person.png";
import like from "@/public/like.png";
import comment from "@/public/comment.png";
import send from "@/public/send.png";
import bookmark from "@/public/bookmark.png";
import "./CircularCarousel.css";

const CircularCarousel = () => {
  gsap.registerPlugin(Draggable, InertiaPlugin);

  const [slides, setSlides] = useState(["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"]); // Initial set of slides
  const [rotation, setRotation] = useState(0); // State to track current rotation
  const [currentIndex, setCurrentIndex] = useState(0); // State to track current index
  const carouselRef = useRef(null); // Reference for the carousel element
  const draggableInstance = useRef(null); // Reference to store Draggable instance

  useGSAP(() => {
    draggableInstance.current = Draggable.create(carouselRef.current, {
      type: "rotation",
      bounds: {
        maxRotation: 0,
        minRotation: -(12 * (slides.length - 1)),
      },
      inertia: true,
      snap: (end) => gsap.utils.snap(12, end),
      onDragEnd: function () {
        const newRotation = this.rotation;
        setRotation(newRotation);
        const index = Math.round(-newRotation / 12);
        setCurrentIndex(index);
      },
      onThrowComplete: function () {
        const newRotation = this.endRotation;
        setRotation(newRotation);
        const index = Math.round(-newRotation / 12);
        setCurrentIndex(index);
      },
    })[0];

    return () => {
      draggableInstance.current.kill();
      draggableInstance.current = null;
    };
  }, [slides.length]);

  const handleNext = () => {
    let newRotation = rotation - 12;
    if (newRotation < -(12 * (slides.length - 1))) {
      newRotation = -(12 * (slides.length - 1));
    }
    gsap.to(carouselRef.current, {
      rotation: newRotation,
      duration: 0.5,
      onUpdate: function () {
        draggableInstance.current.update();
      },
      onComplete: function () {
        draggableInstance.current.rotation = newRotation;
        draggableInstance.current.update();
        setRotation(newRotation);
        const index = Math.round(-newRotation / 12);
        setCurrentIndex(index);
      },
    });
  };

  const handlePrevious = () => {
    let newRotation = rotation + 12;
    if (newRotation > 0) {
      newRotation = 0;
    }
    gsap.to(carouselRef.current, {
      rotation: newRotation,
      duration: 0.5,
      onUpdate: function () {
        draggableInstance.current.update();
      },
      onComplete: function () {
        draggableInstance.current.rotation = newRotation;
        draggableInstance.current.update();
        setRotation(newRotation);
        const index = Math.round(-newRotation / 12);
        setCurrentIndex(index);
      },
    });
  };

  return (
    <div className="relative w-[100%] h-[490px] overflow-hidden">
      {currentIndex > 0 && (
        <button onClick={handlePrevious} className="bg-[#BDFFC2] p-7 rounded-full absolute top-[10%] left-[20%] z-50">
          <Image src={leftArrow} alt="alt" width={40} height={40} />
        </button>
      )}
      {currentIndex < slides.length - 1 && (
        <button onClick={handleNext} className="bg-[#BDFFC2] p-7 rounded-full absolute top-[10%] right-[20%] z-50">
          <Image className="rotate-180" src={leftArrow} alt="alt" width={40} height={40} />
        </button>
      )}
      <div className="curved-carousel" ref={carouselRef}>
        {slides.map((item, index) => (
          <div className="curved-carousel-item" style={{ transform: `rotate(${index * 12}deg)` }} key={index}>
            <div className="curved-carousel-item-wrap">
              <div className="social-box">
                <div className="social-box-header">
                  <div className="social-box-header-wrap">
                    <span className="social-box-header-icon">
                      <Image src={logo} quality={100} alt="alt" width={8} height={11} />
                    </span>
                    <span className="social-box-header-title">
                      <p>Sodigital Recruiting</p>
                    </span>
                  </div>
                  <div className="social-box-header-more">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="social-box-content">
                  <Image src={person} alt="alt" width={288} height={288} />
                </div>
                <div className="social-box-footer">
                  <div className="social-box-footer-action">
                    <Image src={like} quality={100} alt="alt" />
                    <Image src={comment} quality={100} alt="alt" />
                    <Image src={send} quality={100} alt="alt" />
                  </div>
                  <div className="social-box-footer-bookmark">
                    <Image src={bookmark} quality={100} alt="alt" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularCarousel;
