"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface CartItemProps {
  id: number; // شناسه محصول
  name?: string;
  price?: number;
  image?: string;
  initialQty?: number;
  onQuantityChange?: (id: number, newQty: number) => void; // callback به والد
  onRemove?: (id: number) => void; // حذف محصول
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name = "LCD Monitor",
  price = 650,
  image = "/images/product-img.png",
  initialQty = 1,
  onQuantityChange,
  onRemove,
}) => {
  const [quantity, setQuantity] = useState<number>(initialQty);

  // هر بار که quantity تغییر کرد، callback والد صدا زده شود
  useEffect(() => {
    if (onQuantityChange) onQuantityChange(id, quantity);
  }, [quantity]);

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) setQuantity(val);
  };

  const subtotal = price * quantity;

  return (
    <ul className="flex flex-col xs:flex-row xs:items-center xs:justify-between 
                   gap-6 xs:gap-0 shadow-md border rounded-xl 
                   py-6 px-6 md:px-10 mb-8 transition-all duration-300 hover:shadow-xl">

      {/* Product */}
      <li className="flex items-center gap-4 w-full xs:w-44">
        <img className="w-16 h-16 object-cover rounded-md" src={image} alt={name} />
        <h2 className="font-semibold text-gray-800 text-sm sm:text-base">{name}</h2>
      </li>

      {/* Price */}
      <li className="text-gray-700 font-medium text-sm sm:text-base">${price}</li>

      {/* Quantity */}
      <li>
        <div className="border border-gray-300 rounded-md w-24 flex items-center justify-between overflow-hidden">
          <input
            className="w-12 text-center outline-none py-2 text-sm"
            type="text"
            value={quantity}
            onChange={handleInputChange}
          />
          <div className="flex flex-col border-l border-gray-300">
            <button onClick={increaseQty} className="hover:bg-gray-100 p-1">
              <IoIosArrowUp size={14} />
            </button>
            <button onClick={decreaseQty} className="hover:bg-gray-100 p-1">
              <IoIosArrowDown size={14} />
            </button>
          </div>
        </div>
      </li>

      {/* Subtotal */}
      <li className="text-gray-700 font-semibold text-sm sm:text-base">${subtotal}</li>

      {/* Remove Button */}
      {onRemove && (
        <li>
          <button
            onClick={() => onRemove(id)}
            className="text-red-600 font-medium hover:text-red-800 transition"
          >
            Remove
          </button>
        </li>
      )}
    </ul>
  );
};

export default CartItem;
