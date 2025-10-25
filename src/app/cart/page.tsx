import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import CartItem from '@/components/template/cartItem/CartItem'
import React from 'react'

function Cart() {
  return (
    <>
      <Navbar />
      <main className="container mt-24 mb-36 px-4">
     
        <section className="hidden md:block shadow-md mb-10 rounded-lg container">
          <div className="py-6 px-10 flex items-center justify-between text-gray-700 font-medium">
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
          </div>
        </section>
        <section>
          <CartItem />
          <CartItem />
          <CartItem />

          <div className="flex flex-col xs:flex-row items-center justify-between gap-4 mt-8 container">
            <button className="w-full xs:w-auto py-3 px-10 border border-gray-400 rounded-md hover:bg-gray-100 transition">
              Return To Shop
            </button>
            <button className="w-full xs:w-auto py-3 px-10 border border-gray-400 rounded-md hover:bg-gray-100 transition">
              Update Cart
            </button>
          </div>
        </section>

        
        <section className="mt-20 flex flex-col lg:flex-row justify-between items-start gap-10 container">
         
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="border border-black flex-1 py-3 px-4 rounded-md">
              <input
                className="w-full outline-none placeholder:text-gray-400"
                type="text"
                placeholder="Apply Coupon"
              />
            </div>
            <button className="bg-red-600 text-white py-3 px-10 rounded-md hover:bg-red-700 transition">
              Apply Coupon
            </button>
          </div>

       
          <div className="border-2 border-black w-full lg:w-[470px] px-6 py-8 rounded-md">
            <h2 className="text-2xl font-semibold mb-6">Cart Total</h2>

            <div className="flex items-center justify-between py-2">
              <h4 className="text-gray-700">Subtotal:</h4>
              <span className="font-medium">$1750</span>
            </div>

            <div className="border-t border-b border-black flex items-center justify-between py-3">
              <h4 className="text-gray-700">Shipping:</h4>
              <span className="font-medium">Free</span>
            </div>

            <div className="border-b border-black flex items-center justify-between py-3">
              <h4 className="text-gray-700">Coupon:</h4>
              <span className="font-medium">10%</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <h4 className="font-semibold text-lg">Total:</h4>
              <span className="font-semibold text-lg">$1575</span>
            </div>

            <div className="flex items-center justify-center mt-6">
              <button className="w-full py-4 text-white bg-red-600 rounded-md hover:bg-red-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Cart
