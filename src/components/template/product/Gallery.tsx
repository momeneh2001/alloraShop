"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

type GalleryProps = {
  images: string[]; 
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Swiper min */}
      <div className="hidden md:block w-[200px] h-[720px]">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction="vertical"
          spaceBetween={16}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="">
              <img
                src={img}
                alt={`thumb-${index}`}
                className="w-[200px] h-[170px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Swiper big */}
      <div className="w-[600px] ">
        <Swiper
          spaceBetween={10}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
