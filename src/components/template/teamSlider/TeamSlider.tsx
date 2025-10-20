'use client';
import React from 'react';
import TeamMemberCard from '@/components/template/teamMemberCard/TeamMemberCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function TeamSlider() {
    return (
        <div className="w-full flex justify-center">
            <Swiper
                spaceBetween={16}
                pagination={{ clickable: true }}
                loop={true}
                modules={[Pagination]}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    480: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 },
                    1440: { slidesPerView: 3 },
                }}
                className="mySwiper"
            >
                <SwiperSlide><TeamMemberCard /></SwiperSlide>
                <SwiperSlide><TeamMemberCard /></SwiperSlide>
                <SwiperSlide><TeamMemberCard /></SwiperSlide>
                <SwiperSlide><TeamMemberCard /></SwiperSlide>
                <SwiperSlide><TeamMemberCard /></SwiperSlide>
            </Swiper>
        </div>
    );
}
