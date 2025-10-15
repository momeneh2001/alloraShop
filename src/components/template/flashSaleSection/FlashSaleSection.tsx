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
// import { Pagination,Navigation } from 'swiper/modules';

function FlashSaleSection() {
    return (
        <section className='container mt-40 '>
            <SectionHeader titel='Flash Sales' miniTitle='Today’s' btn='btn' />

            <Swiper
                slidesPerView={4.5}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination, Navigation]}
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
                <button className='bg-red-600 text-white my-16 py-4 px-12 rounded-md'>View All Products</button>
            </div>
        </section>
    )
}

export default FlashSaleSection
