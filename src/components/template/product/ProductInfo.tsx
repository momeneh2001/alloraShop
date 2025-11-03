import React from 'react'
import { FaStar, FaStarHalf, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { Model } from "mongoose";
import productModel from '../../../../models/Product'

type ProductType = typeof productModel extends Model<infer T> ? T : never;
interface ProductInfoProps {
    product: ProductType;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    return (
        <div className='w-[450px]'>
            <div className='border-b border-gray-400 flex-col flex gap-3 '>
                <h2 className='text-2xl'>{product.name}</h2>
                <div className='flex items-center gap-2'>
                    <div className='flex child:text-yellow-500'>
                        {
                            new Array(Math.floor(product.score)).fill(0).map((_, index) => (
                                <FaStar key={`full-${index}`} />
                            ))
                        }

                        {
                            product.score % 1 !== 0 && <FaStarHalfAlt key="half" />
                        }

                        {
                            new Array(5 - Math.ceil(product.score)).fill(0).map((_, index) => (
                                <FaRegStar key={`empty-${index}`} />
                            ))
                        }
                        {/* <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                        <FaRegStar /> */}
                    </div>
                    <div className='child:text-gray-400'>
                        <span>({product.comments.length} Reviews)</span>
                    </div>
                </div>
                <span className='text-black text-2xl'>${product.price}</span>
                <p className='mb-6'>{product.description}</p>
            </div>
            {
                product.variants.length > 0 && (
                    <>
                        <div className='flex gap-2 items-center mt-5'>
                            <span>Colours:</span>
                            <div className='flex gap-2'>
                                <span className='bg-blue-600 w-5 h-5 rounded-full  inline-block border-black border-2'></span>
                                <span className='bg-pink-600 w-5 h-5 rounded-full inline-block'></span>
                            </div>
                        </div>
                        <div className='flex items-center gap-4  mt-3'>
                            <span>Size:</span>
                            <div className='flex gap-4 child-hover:bg-red-600 child-hover:text-white child-hover:border-white child:transition-all'>
                                <div className='w-8 h-8 border border-black inline-flex p-1 rounded-md  items-cente justify-center'>
                                    <span>XS</span>
                                </div>
                                <div className='w-8 h-8 border border-black inline-flex p-1 rounded-md  items-cente justify-center'>
                                    <span>S</span>
                                </div>
                                <div className='w-8 h-8 border border-black inline-flex p-1 rounded-md  items-cente justify-center'>
                                    <span>M</span>
                                </div>
                                <div className='w-8 h-8 border border-black inline-flex p-1 rounded-md  items-cente justify-center'>
                                    <span>L</span>
                                </div>
                                <div className='w-8 h-8 border border-black inline-flex p-1 rounded-md  items-cente justify-center'>
                                    <span>XL</span>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }


            {/* up date later */}
            {/* <div>
                <div className='flex items-center'>
                    <span className='flex items-center justify-center p-1 border border-black h-11'>-</span>
                    <input className='w-20 outline h-11 p-2' type="text" placeholder='1' />
                    <span className='flex items-center justify-center p-1 border border-black h-11'>+</span>
                </div>

                <div>
                    <button>Buy Now</button>
                </div>

                <div className='border border-black inline-block p-1 rounded-md'>
                    <HiOutlineHeart className='' />
                </div>
            </div> */}

            <div className='mt-8'>
                <button className='py-3 px-8 bg-red-600 text-white rounded-md'>Add to Cart</button>
            </div>

            <div className='border-black border-2 flex flex-col justify-between mt-10'>
                <div className='flex items-center gap-4 p-3 h-20 border-b-2 border-black'>
                    <TbTruckDelivery className='w-10 h-10' />
                    <div>
                        <h5>Free Delivery</h5>
                        <span>Enter your postal code for Delivery Availability</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 p-3 h-20'>
                    <PiArrowsCounterClockwise className='w-10 h-10' />
                    <div>
                        <h5>Return Delivery</h5>
                        <span>Free 30 Days Delivery Returns. Details</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductInfo
