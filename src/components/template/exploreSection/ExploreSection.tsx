import ProductCard from '@/components/modules/productCard/ProductCard'
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'
import React from 'react'

interface Product {
  _id: string
  name: string
  images: string[]
  price: number
  discount: number
  rating: number
}

interface ExploreSectionProps {
  products: Product[]
}

const ExploreSection: React.FC<ExploreSectionProps> = ({ products }) => {
  return (
    <section className='container'>
      <SectionHeader miniTitle='Our Products' titel='Explore Our Products' btn='BTN' />

      <div className="flex flex-wrap justify-center gap-4 xs:gap-6 md:gap-8 lg:gap-10 pt-8">
        {products.map((product) => (
          <ProductCard
          key={product._id}
          id={product._id}
          name={product.name}
          images={product.images[0]}
          price={product.price}
          discount={product.discount}
          score={product.rating}
        />        
        ))}
      </div>

      <div className='w-full flex justify-center items-center border-b-2 mb-20'>
        <button className='bg-red-600 text-white my-16 text-sm px-4 py-2 md:text-base lg:text-lg xl:text-xl md:px-5 md:py-2 lg:px-9 lg:py-3 xl:px-12 xl:py-4 rounded-md'>
          View All Products
        </button>
      </div>
    </section>
  )
}

export default ExploreSection
