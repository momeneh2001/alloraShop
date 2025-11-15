"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import swal from "sweetalert";

interface AddToWishlistProps {
  productID: string;
}

function AddToWishlist({ productID }: AddToWishlistProps) {
  const [user, setUser] = useState<{ _id?: string }>({});
  const [added, setAdded] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const res = await fetch("/api/auth/me");
//       if (res.status === 200) {
//         const data = await res.json();
//         setUser({ ...data.user }); 
//       }
//     };
//     fetchUser();
//   }, []);

  const addToWishlist = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!user?._id) {
      return (swal as any)({
        title: "Please login first to add products to your wishlist.",
        icon: "warning",
        button: "Close",
      });
    }

    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user._id, product: productID }),
      });

      if (res.status === 201) {
        setAdded(true);
        (swal as any)({
          title: "Product added to your wishlist successfully!",
          icon: "success",
          button: "Close",
        });
      } else {
        (swal as any)({
          title: "Failed to add product to wishlist.",
          icon: "error",
          button: "Close",
        });
      }
    } catch (err) {
      (swal as any)({
        title: "Server error. Please try again later.",
        icon: "error",
        button: "Close",
      });
    }
  };

  return (
    <button
      onClick={addToWishlist}
      className="bg-white hover:bg-red-600 hover:text-white w-8 h-8 rounded-full flex items-center justify-center"
    >
      {added ? <HiHeart className="text-red-500" /> : <HiOutlineHeart />}
    </button>
  );
}

export default AddToWishlist;
