import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { HiOutlineArrowLeftEndOnRectangle, HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineBars3BottomLeft } from "react-icons/hi2";
import MobileMenu from '../mobileMenu/MobileMenu';

function Navbar() {
    return (
        <header className='border-b-2'>
            <div className='container flex mt-10 mb-4 justify-between xl:justify-evenly xl:gap-20 xxl:gap-48'>
                {/* Logo & Nav */}
                <div className='flex items-center gap-4 md:gap-10 lg:gap-14  xl:gap-20 xxl:gap-48'>
                    {/* Logo */}
                    <div>
                        <h1 className='text-3xl '>SparkNest</h1>
                    </div>

                    {/* set onclick for mobile nav */}
                    <HiOutlineBars3BottomLeft className=' w-6 h-6 md:hidden' />
                    {/* Navigation */}
                    <nav className='hidden md:block'>
                        <ul className='flex gap-12 child:font-light text-gray-700 child:text-base'>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/'>product</Link>
                            </li>
                            <li>
                                <Link href='/'>Contact</Link>
                            </li>
                            <li>
                                <Link href='/'>About</Link>
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
                        <HiOutlineShoppingCart className='w-6 h-6 cursor-pointer' />
                        <HiOutlineHeart className='w-6 h-6 cursor-pointer' />
                        {/* user icon  
                                <HiOutlineUser className='w-6 h-6 cursor-pointer' /> 
                            */}
                        <HiOutlineArrowLeftEndOnRectangle className='w-6 h-6 cursor-pointer' />
                    </div>
                </div>
            </div>
            <MobileMenu/>
        </header>
    )
}

export default Navbar
