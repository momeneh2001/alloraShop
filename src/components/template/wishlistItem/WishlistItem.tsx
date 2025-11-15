import ProductCard from '@/components/modules/productCard/ProductCard'
import React from 'react'

function WishlistItem() {
  return (
    <main className=" mt-20 px-4">
      <section className='container'>
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-4">
          <h2 className="text-2xl font-semibold">
            Wishlist <span className="text-gray-500">(4)</span>
          </h2>

          <button className="py-3 px-8 border border-gray-400 rounded-md text-sm md:text-base hover:bg-gray-100 transition">
            Move All To Bag
          </button>
        </div>

        <div className="mt-10 grid gap-6 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         
        </div>
      </section>


      <section className="container my-20">
    
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-5 h-10 bg-red-600 block rounded-md"></span>
            <h2 className="text-xl font-semibold text-red-600">Just For You</h2>
          </div>

          <button className="py-3 px-8 border border-gray-400 rounded-md text-sm md:text-base hover:bg-gray-100 transition">
            See All
          </button>
        </div>


        <div className="mt-10 grid gap-6 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        </div>
      </section>
    </main>
  )
}

export default WishlistItem
