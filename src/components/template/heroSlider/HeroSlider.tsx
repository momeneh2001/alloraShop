"use client";
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function HeroSlider() {
  return (

    <Swiper className='xs:w-[450px] sm:w-[600px] md:w-[700px] lg:w-[700px] xl:w-[800px] xxl:w-[1000px] h-[344px] xs:mt-11 sm:mt-10 md:mt-9 lg:mt-6 xl:mt-9 xxl:mt-8 ' rewind={true} pagination={true} loop={true} autoplay={{delay:4000}} modules={[Pagination,Autoplay]}>
      <SwiperSlide><img className='w-full h-full' src="/images/Frame 560.png" alt="Slide1" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-full' src="/images/banner1.jpg" alt="Slide2" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-full' src="/images/banner2.jpg" alt="Slide3" /></SwiperSlide>
    </Swiper>

  )
}

export default HeroSlider
