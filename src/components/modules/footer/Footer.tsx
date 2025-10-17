import Link from 'next/link';
import React from 'react'
import { BiSolidRightArrow, BiCopyright } from "react-icons/bi";

function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container py-16 px-6 flex flex-wrap justify-between gap-10 md:gap-8">
                <ul className="flex flex-col gap-6 w-full sm:w-[45%] md:w-[30%] lg:w-auto child:text-gray-300">
                    <li className="text-4xl font-bold">SparkNest</li>
                    <li className="text-lg">Subscribe</li>
                    <li className="text-lg">Get 10% off your first order</li>
                    <li className="border-2 flex items-center justify-between w-full sm:w-[250px] py-3 px-4 rounded-md">
                        <input
                            className="bg-transparent w-[150px] outline-none text-gray-400 text-sm"
                            placeholder="Enter your email"
                            type="text"
                        />
                        <BiSolidRightArrow className="w-6 h-6" />
                    </li>
                </ul>

         
                <ul className="flex flex-col gap-6 w-full sm:w-[45%] md:w-[30%] lg:w-auto child:text-gray-300">
                    <li className="text-3xl font-semibold ">Support</li>
                    <li className="text-lg w-[80%] md:w-[70%]">
                        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </li>
                    <li className="text-lg">exclusive@gmail.com</li>
                    <li className="text-lg">+88015-88888-9999</li>
                </ul>

             
                <ul className="flex flex-col gap-6 w-full sm:w-[45%] md:w-[30%] lg:w-auto child:text-gray-300">
                    <li>
                        <h6 className="text-3xl font-semibold">Account</h6>
                    </li>
                    <li><Link href="" className="text-lg">My Account</Link></li>
                    <li><Link href="" className="text-lg">Login / Register</Link></li>
                    <li><Link href="" className="text-lg">Cart</Link></li>
                    <li><Link href="" className="text-lg">Wishlist</Link></li>
                    <li><Link href="" className="text-lg">Shop</Link></li>
                </ul>

                {/* Quick Link */}
                <ul className="flex flex-col gap-6 w-full sm:w-[45%] md:w-[30%] lg:w-auto child:text-gray-300">
                    <li className="text-3xl font-semibold">Quick Link</li>
                    <li className="text-lg">Privacy Policy</li>
                    <li className="text-lg">Terms Of Use</li>
                    <li className="text-lg">FAQ</li>
                    <li className="text-lg">Contact</li>
                </ul>

                {/* Download App */}
                <ul className="flex flex-col gap-6 w-full sm:w-[45%] md:w-[30%] lg:w-auto child:text-gray-300">
                    <li className="text-3xl font-semibold">Download App</li>
                    <li className="text-sm text-gray-400">
                        Save $3 with App New User Only
                    </li>
                    <li className="flex flex-wrap items-center gap-3">
                        <img src="/Images/AppStore.png" alt="App Store" className="w-28" />
                        <img src="/Images/GooglePlay.png" alt="Google Play" className="w-28" />
                    </li>
                </ul>

            </div>

            {/* Bottom line */}
            <div className="border-t border-gray-700 py-4 flex  flex-row items-center justify-center gap-2 text-gray-400 text-sm">
                <BiCopyright />
                <p>Copyright Rimel 2022. All rights reserved</p>
            </div>
        </footer>

    )
}

export default Footer
