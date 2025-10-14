import Image from 'next/image'
import Link from 'next/link'
import { FaXmark } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
interface MobileMenuProp {
    isSideBarOpen: boolean,
    setIsSideBarOpen: (value: boolean) => void;
}

function MobileMenu({ isSideBarOpen, setIsSideBarOpen }: MobileMenuProp) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
        <>
            <div className="fixed p-1 top-0 bottom-0   w-72 min-h-screen bg-white shadow-2xl shadow-black z-20 transition-all">
                {/* navbar header  */}
                <div className="flex items-center justify-between border-b-2 border-grymlo-100">
                    <div className="flex p-2 text-grymlo-100 items-center">
                        <div className=" w-14 h-14 ">
                            <Image
                                alt='logo'
                                width={50}
                                height={50}
                                src='/images/SparkNest.jpg' />
                        </div>
                        <span className="w-32  text-grymlo-100  text-2xl font-bold border-l pl-1 ">SparkNest</span>
                    </div>

                    <FaXmark
                        onClick={() => setIsSideBarOpen(false)}
                        className='w-6 h-6 text-red-600 mr-1' />
                </div>
                {/* Search */}
                <div className="flex flex-col border-b-2  mt-3 p-4 ">
                    <div className=' flex w-60 h-9 justify-between items-center bg-neutral-100 py-1 px-3'>
                        <input className='w-full h-full text-xs  bg-neutral-100 outline-none' type="text" placeholder='What are you looking for?' />
                        <CiSearch className='w-5 h-5 text-black' />
                    </div>
                </div>
                {/* navbar menu bodey */}
                <nav className='overflow-auto py-8 pr-3 h-[460px]'>
                    <ul className='pl-5 flex flex-col  gap-5'>
                        <li>
                            <Link href="">Home</Link>
                        </li>
                        <li>
                            <Link href="">Discounts</Link>
                        </li>
                        <li onClick={() => { setIsDropdownOpen((prev) => (!prev)) }} className='cursor-pointer '>
                            <div className='flex items-center gap-4'>
                                <span>Category </span>
                                <IoIosArrowDown />
                            </div>
                            {/* dropdown */}
                            {
                                isDropdownOpen && (
                                    <ul className='gap-3 bg-neutral-100 rounded-xl pl-8 py-3 ml-2 child:py-2 child:list-item list-disc'>
                                        <li><Link href="">Woman’s Fashion</Link></li>
                                        <li><Link href="">Men’s Fashion</Link></li>
                                        <li><Link href="">Electronics</Link></li>
                                        <li><Link href="">Home & Lifestyle</Link></li>
                                        <li><Link href="">Medicine</Link></li>
                                        <li><Link href="">Sports & Outdoor</Link></li>
                                        <li><Link href="">Baby’s & Toys</Link></li>
                                        <li><Link href="">Groceries & Pets</Link></li>
                                        <li><Link href="">Health & Beauty</Link></li>
                                    </ul>
                                )
                            }
                        </li>
                        <li>
                            <Link href="">Contact</Link>
                        </li>
                        <li>
                            <Link href="">About</Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex flex-col border-t-2 child:text-grymlo-100 border-grymlo-100 mt-3 p-4 child-hover:text-yell-100">
                    {/* update later */}

                </div>

            </div>

            <div onClick={() => setIsSideBarOpen(false)} className='overlayEdit overlayEdit--visible'></div>
        </>
    )
}

export default MobileMenu
