import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import ProductCard from '@/components/modules/productCard/ProductCard'
import Gallery from '@/components/template/product/Gallery'
import MoreProducts from '@/components/template/product/MoreProducts'
import ProductInfo from '@/components/template/product/ProductInfo'
import React from 'react'

function Product() {
  return (
    <>
      <Navbar />
      <section className='container mb-48'>
        <div className=' mt-24 flex gap-16'>
          <Gallery/>
          <ProductInfo/>
        </div>
      </section>
      <section className='container mb-24'>
        <MoreProducts/>
        <div className='flex justify-between'>
        <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
        <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
        <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
        <ProductCard img='/images/product-img.png' title='S-Series Comfort Chair' Price={100} originalPrice={200} off={50} rating={3} ratingCount={55} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Product
