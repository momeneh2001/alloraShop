"use client";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import CartItem from "@/components/template/cartItem/CartItem";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

interface CartItemType {
  id: string;
  name: string;
  price: number;
  image: string;
  count: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [discount, setDiscount] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(localCart);
  }, []);

  // Recalculate subtotal and totalPrice whenever cart or discountPercent changes
  useEffect(() => {
    const newSubtotal = cart.reduce((acc, item) => acc + item.price * item.count, 0);
    setSubtotal(newSubtotal);

    const newTotal = newSubtotal - (newSubtotal * discountPercent) / 100;
    setTotalPrice(newTotal);
  }, [cart, discountPercent]);

  const handleQuantityChange = (id: string, newQty: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, count: newQty } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const checkDiscount = async () => {
    // Client-side validation
    if (!discount.trim() || !/^[a-zA-Z0-9]{3,20}$/.test(discount)) {
      return swal(
        "Invalid discount code format. Only letters and numbers (3-20 characters) are allowed.",
        "error",
        "Try Again"
      );
    }

    try {
      const res = await fetch("/api/discounts/use", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: discount }),
      });

      if (res.status === 404) {
        return swal("The entered discount code is invalid.", "error", "Try Again");
      } else if (res.status === 422) {
        return swal("The entered discount code has expired.", "error", "Try Again");
      } else if (res.status === 200) {
        const discountCode = await res.json();
        setDiscountPercent(discountCode.percent);
        swal("The discount code was successfully applied.", "success", "Got it");
      } else {
        return swal("Something went wrong. Please try again.", "error", "Try Again");
      }
    } catch (error) {
      console.error(error);
      return swal("Network error. Please try again later.", "error", "Try Again");
    }
  };

  return (
    <>
      <Navbar />
      <main className="container mt-24 mb-36 px-4">
        <section className="container mx-auto mt-10">
          <div className="hidden md:grid grid-cols-4 shadow-lg mb-4 rounded-lg bg-white py-4 px-6 text-gray-700 font-semibold border-b border-gray-200">
            <h2>Product</h2>
            <h2 className="text-center">Price</h2>
            <h2 className="text-center">Quantity</h2>
            <h2 className="text-right">Subtotal</h2>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col gap-4">
            {cart.map((product) => (
              <CartItem
                key={product.id}
                id={String(product.id)}
                name={product.name}
                price={product.price}
                image={product.image}
                initialQty={product.count}
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
                value={discount}
                onChange={(event) => setDiscount(event.target.value)}
                placeholder="Apply Coupon Code"
                className="w-full py-3 px-4 outline-none placeholder-gray-400 focus:ring-2 focus:ring-red-500 rounded-md"
              />
            </div>
            <button
              onClick={checkDiscount}
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
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between py-3 border-t border-b border-gray-300">
              <h4 className="text-gray-600">Shipping:</h4>
              <span className="font-medium">Free</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-300">
              <h4 className="text-gray-600">Coupon:</h4>
              <span className="font-medium text-green-600">{discountPercent}%</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <h4 className="font-semibold text-lg">Total:</h4>
              <span className="font-semibold text-lg text-red-600">${totalPrice.toFixed(2)}</span>
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
