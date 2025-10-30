"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import {
    HiOutlineArrowLeftEndOnRectangle,
    HiOutlineUser,
    HiOutlineHeart,
    HiOutlineShoppingCart,
    HiOutlineBars3BottomLeft,
    HiOutlineStar,
    HiOutlineArrowLeftStartOnRectangle
}
    from "react-icons/hi2";
import { FiShoppingBag } from "react-icons/fi";
import MobileMenu from '../mobileMenu/MobileMenu';
import { FaRegCircleXmark } from "react-icons/fa6";

interface NavbarProps {
    isLogin?: boolean
}

function Navbar({ isLogin }: NavbarProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <header className='border-b-2'>
            <div className='container flex mt-10 mb-4 justify-between xl:justify-evenly xl:gap-20 xxl:gap-48'>
                {/* Logo & Nav */}
                <div className='flex items-center gap-4 md:gap-10 lg:gap-14  xl:gap-20 xxl:gap-48'>
                    {/* Logo */}
                    <div className='flex items-center gap-1'>
                        <Image
                            alt='logo'
                            width={50}
                            height={50}
                            src='/images/SparkNest.jpg' />
                        <h1 className='text-3xl border-l-2 border-black pl-1 '>SparkNest</h1>
                    </div>

                    {/* set onclick for mobile nav */}
                    <HiOutlineBars3BottomLeft onClick={() => { setIsSideBarOpen((prev) => (!prev)) }} className=' w-6 h-6 md:hidden' />
                    {/* Navigation */}
                    <nav className='hidden md:block'>
                        <ul className='flex gap-12 child:font-light text-gray-700 child:text-base'>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/'>Discounts</Link>
                            </li>
                            <li>
                                <Link href='/contact'>Contact</Link>
                            </li>
                            <li>
                                <Link href='/about'>About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Search & Icons */}
                <div className='flex items-center child:m-2 gap-8'>
                    {/* Search */}
                    <div className='hidden lg:flex w-60 h-9 justify-between items-center bg-neutral-100 py-1 px-3'>
                        <input className='w-full h-full text-xs xl:text-base bg-neutral-100 outline-none' type="text" placeholder='What are you looking for?' />
                        <CiSearch className='hidden lg:block w-5 h-5 text-black' />
                    </div>
                    {/* Icons */}
                    <div className='flex gap-5'>
                        <Link className='relative' href='/cart'>
                            <HiOutlineShoppingCart className='w-6 h-6 cursor-pointer' />
                            <div className='absolute w-4 h-4 top-0 -right-[4px] bg-red-600 rounded-full text-xs flex justify-center items-center text-white'>
                                <span >4</span>
                            </div>
                        </Link>
                        <Link className='relative' href="/wshlist">
                            <HiOutlineHeart className='w-6 h-6 cursor-pointer' />
                            <div className='absolute w-4 h-4 top-0 -right-[4px] bg-red-600 rounded-full text-xs flex justify-center items-center text-white'>
                                <span >4</span>
                            </div>
                        </Link>

                        {
                            isLogin ? (
                                <div className='relative z-20'>
                                    <HiOutlineUser onClick={() => { setIsDropdownOpen((prev) => (!prev)) }} className='hover:bg-red-600  hover:text-white  w-8 h-8  p-1 rounded-full cursor-pointer group ' />
                                    {
                                        isDropdownOpen && (
                                            <div className=" absolute glass-card right-0 w-64 child:items-center   flex-col space-y-4 text-zinc-700 transition-all  p-6 rounded-md   ">
                                                <Link href="#" className='flex  gap-2'>
                                                    <HiOutlineUser className='w-6 h-6' />
                                                    <span>Manage My Account</span>
                                                </Link>
                                                <Link href="#" className='flex  gap-2'>
                                                    <FiShoppingBag className='w-6 h-6' />
                                                    <span>My Order</span>
                                                </Link>
                                                <Link href="#" className='flex gap-2'>
                                                    <FaRegCircleXmark className='w-6 h-6' />
                                                    <span>My Cancellations</span>
                                                </Link>
                                                <Link href="#" className='flex gap-2'>
                                                    <HiOutlineStar className='w-6 h-6' />
                                                    <span>My Reviews</span>
                                                </Link>
                                                <Link href="#" className='flex gap-2'>
                                                    <HiOutlineArrowLeftStartOnRectangle className='w-6 h-6' />
                                                    <span>Logout</span>
                                                </Link>
                                            </div>
                                        )
                                    }
                                </div>
                            ) : (
                                <Link href="/loginRegister">
                                    <HiOutlineArrowLeftEndOnRectangle className='w-6 h-6 ' />
                                </Link>
                            )
                        }
                        {/* user icon  */}



                    </div>
                </div>
            </div>

            {
                isSideBarOpen && (
                    <MobileMenu

                        isSideBarOpen={isSideBarOpen}
                        setIsSideBarOpen={setIsSideBarOpen} />
                )
            }
        </header>
    )
}

export default Navbar
