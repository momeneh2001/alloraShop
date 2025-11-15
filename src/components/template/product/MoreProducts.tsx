"use client"
import ProductCard from '@/components/modules/productCard/ProductCard'
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'
import React from 'react'

function MoreProducts() {
  return (
    <section className='container mb-24'>
      <SectionHeader titel='' miniTitle='Related Item' btn='' />
      <div className='flex justify-between'>
      <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
      <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
      <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
      <ProductCard images='http://localhost:3000/images/product-img.png' name='S-Series Comfort Chair' price={100} discount={3} id='19191' score={2.5}  />
      </div>
    </section>
  )
}

export default MoreProducts
