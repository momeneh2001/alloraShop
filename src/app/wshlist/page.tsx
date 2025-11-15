import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import ProductCard from "@/components/modules/productCard/ProductCard";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import connectToDB from "../../../configs/db";
import { authUser } from "@/utiles/authUser";
import WishlistModel from "../../../models/Wishlisr";
import { IUser } from "../../../models/User";

interface ProductForWishlist {
  _id: string;
  name: string;
  price: number;
  score: number;
  images: string[];
}

interface WishlistItem {
  _id: string;
  product: ProductForWishlist;
}

const Wishlist = async () => {
  await connectToDB();

  
  const user = (await authUser()) as IUser | null;

  let wishes: WishlistItem[] = [];

  if (user) {
    const rawWishes = await WishlistModel.find({ user: user._id })
      .populate("product", "name price score images")
      .lean();
  
    wishes = rawWishes.map((wish) => {
      const product = wish.product as any;
  
      return {
        _id: wish._id.toString(),
        product: {
          _id: product._id.toString(),
          name: product.name,
          price: product.price,
          score: product.score,
          images: product.images,
        },
      };
    });
  }
  

  return (
    <>
      <Navbar />

      <main className="my-20 px-4">
        <section className="container">
          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-4">
            <h2 className="text-2xl font-semibold">
              Wishlist <span className="text-gray-500">({wishes.length})</span>
            </h2>
          </div>

          {wishes.length > 0 ? (
            <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishes.map((wish) => (
                <ProductCard
                  key={wish._id}
                  id={wish.product._id}
                  name={wish.product.name}
                  images={wish.product.images[0]}
                  price={wish.product.price}
                  discount={0} 
                  score={wish.product.score}

                />
              ))}
            </div>
          ) : (
            <div
              className="flex flex-col items-center text-center p-6 mt-14 bg-white"
              data-aos="fade-up"
            >
              <FaRegHeart className="text-5xl text-gray-400 mb-4" />
              <p className="text-xl font-semibold">No Items Found</p>
              <span className="text-gray-500 mt-2">
                You don’t have any items in your wishlist yet.
              </span>
              <span className="text-gray-500">
                Browse the shop to discover interesting products.
              </span>
              <div className="mt-6">
                <Link
                  href="/"
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Back to Shop
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Wishlist;
