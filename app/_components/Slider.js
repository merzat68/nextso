"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Image from "next/image";
import slider1 from "@/public/slider1.png";
import slider2 from "@/public/slider2.png";
import play from "@/public/play.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css"; // Custom styles for play button overlay and Swiper styling

const SliderComponent = () => {
  return (
    <Swiper spaceBetween={8} slidesPerView={"auto"} freeMode={true} modules={[FreeMode]} className="mySwiper">
      <SwiperSlide>
        <div className="flex relative rounded-lg overflow-hidden w-full h-full">
          <Image className="w-full h-max" src={slider1} alt="alt" width={1336} height={720} />
          <span className="w-24 h-24 rounded-full bg-soDigital-green-100 p-7 absolute top-0 bottom-0 left-0 right-0 m-auto">
            <Image src={play} alt="alt" width={40} height={40} />
          </span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex relative rounded-lg overflow-hidden w-full h-full">
          <Image className="w-full h-max" src={slider2} alt="alt" width={1336} height={720} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;
