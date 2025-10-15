import Image from 'next/image'
import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { FaStar,FaStarHalf,FaRegStar,FaStarHalfAlt } from "react-icons/fa";
import Link from 'next/link';

interface ProductCardProps{
    img: string,
    title:string,
    off?:number,
    Price:number,
    originalPrice?:number,
    rating:number,
    ratingCount:number,
    color?:{}
}


function ProductCard({img,title,off,Price,originalPrice,rating,ratingCount,color}:(ProductCardProps)) {
    return (
        <div className='flex flex-col gap-3'>
            <div className='w-[270px] h-[250px] bg-neutral-100 rounded-md relative flex justify-center items-center'>
                <img className='w-[190px] h-[180px]' src={img} alt="" />
                {/* icons */}
                <div className='absolute top-3 right-3 flex flex-col gap-2'>
                    <button className='bg-white hover:bg-red-600 hover:text-white w-8 h-8 rounded-full flex items-center justify-center'>
                        <HiOutlineHeart className='' />
                    </button>
                    <Link className='bg-white hover:bg-blue-600 hover:text-white w-8 h-8 rounded-full flex items-center justify-center' href=''>
                        <IoEyeOutline className='' />
                    </Link>
                </div>
                {/* tag */}
                <div className='absolute top-4 left-6'>
                    {
                        off &&(<span className='bg-red-500 text-white py-1 px-3 rounded-lg font-thin text-sm'>- {off}%</span>)
                    }
                    {/* <span className='bg-green-500 text-white py-1 px-3 rounded-lg font-thin text-sm'>NEW</span> */}
                </div>

                <button className='absolute bottom-0 w-full h-10 bg-black text-white flex items-center justify-center rounded-b-md text-base'>
                    Add To Cart
                </button>
            </div>

            <div>
                <h6>{title} </h6>
                <div className='flex gap-3'>
                    <span className='text-red-500'>${Price}</span>
                    {
                        originalPrice &&(<span className='text-gray-400 line-through'>${originalPrice}</span>)
                    }
                </div>
                <div className='flex items-center'>
                    <div className='flex child:text-yellow-500'>
                    <FaStar />
                    <FaStarHalfAlt  />
                    <FaRegStar/> 
                    <FaRegStar/> 
                    <FaRegStar/> 
                    </div>
                    <span className='text-gray-400'>(99)</span>
                </div>
                {/* color cho */}
                {/* <div></div> */}
            </div>
        </div>
    )
}

export default ProductCard
