import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function CartItem() {
    return (
        <ul className="flex flex-col xs:flex-row xs:items-center xs:justify-between 
                   gap-6 xs:gap-0 shadow-md border rounded-xl 
                   py-6 px-6 md:px-10 mb-8 transition-all duration-300 hover:shadow-xl">

            <li className="flex items-center gap-4 w-full xs:w-44">
                <img className="w-16 h-16 object-cover rounded-md" src="/images/product-img.png" alt="LCD Monitor" />
                <h2 className="font-semibold text-gray-800 text-sm sm:text-base">LCD Monitor</h2>
            </li>


            <li className="text-gray-700 font-medium text-sm sm:text-base">$650</li>


            <li>
                <div className="border border-gray-300 rounded-md w-24 flex items-center justify-between overflow-hidden">
                    <input
                        className="w-12 text-center outline-none py-2 text-sm"
                        type="text"
                        placeholder="01"
                    />
                    <div className="flex flex-col border-l border-gray-300">
                        <button className="hover:bg-gray-100 p-1">
                            <IoIosArrowUp size={14} />
                        </button>
                        <button className="hover:bg-gray-100 p-1">
                            <IoIosArrowDown size={14} />
                        </button>
                    </div>
                </div>
            </li>

            {/* Total */}
            <li className="text-gray-700 font-semibold text-sm sm:text-base">$650</li>
        </ul>
    );
}

export default CartItem;
