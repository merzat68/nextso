// components/ProjectSlider.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/_components/team.css";
import Title from "./Title";

export default function Team({ teams }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const path = usePathname();
  let backgroundColor = "#BDFFC2";

  const slides = teams.length < 6 ? [...teams, ...teams, ...teams, ...teams] : teams;

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

  if (path.includes("solutions")) {
    backgroundColor = "#EDD5FF";
  }

  return (
    <div className="team-container">
      <div className="team-container-header">
        <Title title={"Das Team"} type={path.includes("recruiters") ? "rec" : "sol"} />
        <h1>Menschen dahinter.</h1>
        <p className="team-container-header-description">
          Wir sind jung, aber erfahren, kreativ, aber objektiv und machen das Komplizierte einfach. Zusammengefasst sind wir junge, kreative und hochmotivierte Digital-Freaks mit dem Mensch im Fokus.
        </p>
      </div>
      <div className="team-slider-container">
        <Swiper
          loop={true}
          spaceBetween={8}
          slidesPerView={5.2}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="team-slider-item">
                <div className="team-slider-item-img-wrapper">
                  <Image
                    src={item.image} // Use the correct image path from public folder
                    alt={item.title}
                    width={960}
                    height={720}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <div className="team-slider-item-text-wrap">
                  <h3 className="team-slider-item-title">{item.name}</h3>
                  <p className="team-slider-item-description">{item.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className={`team-button team-slider-next bg-[${backgroundColor}]`} onClick={handlePrevSlide}>
            <Image src="/right-arrow.png" alt="alt" width={40} height={40} />
          </div>
          <div className={`team-button team-slider-prev bg-[${backgroundColor}]`} onClick={handleNextSlide}>
            <Image src="/right-arrow.png" alt="alt" width={40} height={40} />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
