"use client"
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import CategoryCard from '../categoryCard/CategoryCard';



function CategorySection() {
    return (
        <section className='container mb-16'>
                <SectionHeader titel='Browse By Category' miniTitle='Categories' />
            <div className='pt-16 pb-20 border-b-2'>
                <Swiper

                    spaceBetween={16}
                    breakpoints={{
                        0: { slidesPerView: 1.3 },
                        480: { slidesPerView: 2.4 },
                        640: { slidesPerView: 3.2 },
                        768: { slidesPerView: 3.5 },
                        1024: { slidesPerView: 5.4 },
                        1280: { slidesPerView: 5.2 },
                        1440: { slidesPerView: 6.2 },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    // modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <CategoryCard categoryIcon='IoIosPhonePortrait' categoryName='Phones' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard categoryIcon='HiOutlineDesktopComputer' categoryName='Computers' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard categoryIcon='BsSmartwatch' categoryName='SmartWatch' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard categoryIcon='CiCamera' categoryName='Camera' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard categoryIcon='CiHeadphones' categoryName='HeadPhones' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard categoryIcon='IoGameControllerOutline' categoryName='Gaming' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard categoryIcon='IoShirtOutline' categoryName='Men’s Fashion' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard categoryIcon='GiMedicines' categoryName='Medicine' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default CategorySection
