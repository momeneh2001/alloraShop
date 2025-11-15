"use client"
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from '@/components/modules/productCard/ProductCard';


function BestSellingSection() {
    return (
        <section className='container mb-36'>
            <SectionHeader miniTitle='This Month' titel='Best Selling Products' btn='btn' />
            <Swiper

                spaceBetween={16}
                breakpoints={{
                    0: { slidesPerView: 1.3 },
                    480: { slidesPerView: 1.6 },
                    640: { slidesPerView: 2.2 },
                    768: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3.4 },
                    1280: { slidesPerView: 4.2 },
                    1440: { slidesPerView: 4.4 },
                }}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
                </SwiperSlide>
             
            </Swiper>
        </section>
    )
}

export default BestSellingSection
