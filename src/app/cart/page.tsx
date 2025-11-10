"use client";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import CartItem from "@/components/template/cartItem/CartItem";
import React, { useState } from "react";

interface CartProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [products, setProducts] = useState<CartProduct[]>([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/images/product-img.png" },
    { id: 3, name: "Keyboard", price: 200, quantity: 1, image: "/images/product-img.png" },
  ]);

  const [coupon, setCoupon] = useState("");

  const handleQuantityChange = (id: number, newQty: number) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, quantity: newQty } : p))
    );
  };


  const handleRemove = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const subtotal = products.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const discountAmount = (subtotal * 1) / 100;
  const total = subtotal - discountAmount;

  return (
    <>
      <Navbar />
      <main className="container mt-24 mb-36 px-4">

        <section className="container mx-auto mt-10">
          {/* Cart Header */}
          <div className="hidden md:grid grid-cols-4 shadow-lg mb-4 rounded-lg bg-white py-4 px-6 text-gray-700 font-semibold border-b border-gray-200">
            <h2>Product</h2>
            <h2 className="text-center">Price</h2>
            <h2 className="text-center">Quantity</h2>
            <h2 className="text-right">Subtotal</h2>
          </div>

         
          <div className="flex flex-col gap-4">
            {products.map(product => (
              <CartItem
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                initialQty={product.quantity}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </div>

         
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <button className="w-full sm:w-auto py-3 px-8 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200 font-medium">
              Return To Shop
            </button>
            <button className="w-full sm:w-auto py-3 px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-200 font-medium">
              Update Cart
            </button>
          </div>
        </section>

        <section className="mt-20 flex flex-col lg:flex-row justify-between items-start gap-10 container mx-auto">

          {/* Coupon Section */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="flex-1 border border-gray-300 rounded-md overflow-hidden">
              <input
                type="text"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                placeholder="Apply Coupon Code"
                className="w-full py-3 px-4 outline-none placeholder-gray-400 focus:ring-2 focus:ring-red-500 rounded-md"
              />
            </div>
            <button
              className="bg-red-600 text-white py-3 px-6 sm:px-10 rounded-md hover:bg-red-700 transition duration-200 font-medium"
            >
              Apply Coupon
            </button>
          </div>

          {/* Cart Total */}
          <div className="border border-gray-300 rounded-md w-full lg:w-[470px] px-6 py-8 bg-white shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Cart Total</h2>

            <div className="flex items-center justify-between py-2">
              <h4 className="text-gray-600">Subtotal:</h4>
              <span className="font-medium">${subtotal}</span>
            </div>

            <div className="flex items-center justify-between py-3 border-t border-b border-gray-300">
              <h4 className="text-gray-600">Shipping:</h4>
              <span className="font-medium">Free</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-300">
              <h4 className="text-gray-600">Coupon:</h4>
              <span className="font-medium text-green-600">{coupon}%</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <h4 className="font-semibold text-lg">Total:</h4>
              <span className="font-semibold text-lg text-red-600">${total}</span>
            </div>

            <div className="mt-6">
              <button className="w-full py-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 font-medium">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Cart;
