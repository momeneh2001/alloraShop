"use client"
import ProductCard from '@/components/modules/productCard/ProductCard'
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'
import React from 'react'

function ExploreSection() {
    return (
        <section className='container'>
            <SectionHeader miniTitle='Our Products' titel='Explore Our Products' btn='BTN' />

            <div className=" flex flex-wrap justify-center gap-4 xs:gap-6 md:gap-8 lg:gap-10 pt-8">
                <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
                <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
            </div>

            <div className='w-full flex justify-center items-center border-b-2 mb-20'>
                <button className='bg-red-600 text-white my-16 text-sm px-4 py-2 md:text-base lg:text-lg xl:text-xl md:px-5 md:py-2 lg:px-9 lg:py-3 xl:px-12 xl:py-4  rounded-md'>View All Products</button>
            </div>
        </section>
    )
}

export default ExploreSection
