"use client";
import Link from "next/link";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import AddToWishlist from "@/components/template/product/AddToWishlist"; 

interface ProductCardProps {
  name: string;
  images?: string;
  price?: number;
  discount?: number;
  score?: number;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  images,
  price = 0,
  discount = 0,
  score = 0,
  id,
}) => {
  const safePrice = typeof price === "number" ? price : 0;
  const safeDiscount = typeof discount === "number" ? discount : 0;
  const discountedPrice = safeDiscount > 0 ? safePrice - (safePrice * safeDiscount) / 100 : safePrice;

  const safeScore = Math.min(Math.max(score, 0), 5);
  const fullStars = Math.floor(safeScore);
  const halfStar = safeScore - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const imgSrc = images ? (images.startsWith("http") ? images : `/${images}`) : "/images/placeholder.png";

  return (
    <div className="flex flex-col gap-3 w-[270px]">
      <div className="w-full h-[250px] bg-neutral-100 rounded-md relative flex justify-center items-center">
        <img
          src={imgSrc}
          alt={name}
          className="object-contain w-[190px] h-[180px]"
        />

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <AddToWishlist productID={id} />

          <Link
            href={`/product/${id}`}
            className="bg-white hover:bg-blue-600 hover:text-white w-8 h-8 rounded-full flex items-center justify-center"
          >
            <IoEyeOutline />
          </Link>
        </div>

        {safeDiscount > 0 && (
          <div className="absolute top-4 left-6">
            <span className="bg-red-500 text-white py-1 px-3 rounded-lg font-thin text-sm">
              -{safeDiscount}%
            </span>
          </div>
        )}

        <button className="absolute bottom-0 w-full h-10 bg-black text-white flex items-center justify-center rounded-b-md text-base">
          Add To Cart
        </button>
      </div>

      <div>
        <h6 className="font-medium">{name}</h6>
        <div className="flex gap-3 items-center">
          <span className="text-red-500">${discountedPrice.toFixed(2)}</span>
          {safeDiscount > 0 && (
            <span className="text-gray-400 line-through">${safePrice.toFixed(2)}</span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {Array(fullStars).fill(0).map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
          {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
          {Array(emptyStars).fill(0).map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
