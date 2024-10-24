// components/ProjectSlider.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/_components/project-slider.css";

const ProjectSlider = ({ items }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = items.length < 4 ? [...items, ...items] : items;

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="projects-slider-container">
      <Swiper
        loop={true}
        spaceBetween={8}
        slidesPerView={1.6}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content w-full">
              <div className="image-wrapper">
                <Image
                  src={item.image} // Use the correct image path from public folder
                  alt={item.title}
                  width={960}
                  height={720}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                <div className="dark-overlay"></div>
                <Link href={item.link} className="slide-content-link">
                  <Image src={"/projects-icon.png"} quality={100} alt="alt" width={40} height={40} />
                </Link>
              </div>
              <div className="text-wrap">
                <h3 className="slide-title">{item.title}</h3>
                <p className="slide-description">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="button-prev" onClick={handlePrevSlide}>
          <p>→</p>
        </div>
        <div className="button-next" onClick={handleNextSlide}>
          <p>→</p>
        </div>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
