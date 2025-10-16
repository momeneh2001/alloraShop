"use client"
import ProductCard from '@/components/modules/productCard/ProductCard'
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';

function FlashSaleSection() {
    return (
        <section className='container mt-40 '>
            <SectionHeader titel='Flash Sales' miniTitle='Today’s' btn='btn' time={true} />

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
                    <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                </SwiperSlide>
                <SwiperSlide>
                <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                </SwiperSlide>
            </Swiper>

            <div className='w-full flex justify-center items-center border-b-2 mb-20'>
                <button className='bg-red-600 text-white my-16 text-sm px-4 py-2 md:text-base lg:text-lg xl:text-xl md:px-5 md:py-2 lg:px-9 lg:py-3 xl:px-12 xl:py-4  rounded-md'>View All Products</button>
            </div>
        </section>
    )
}

export default FlashSaleSection
