"use client"
import SectionHeader from '@/components/modules/sectionHeader/SectionHeader'
import Link from 'next/link'
import React from 'react'

function LatestProductsSection() {
    return (
        <section className='container mb-36'>
            <SectionHeader miniTitle='Featured' titel='New Arrival' />

            <div className='mx-auto w-[85%] max-w-[1440px] pt-11'>
                <div className='flex flex-col lg:flex-row lg:justify-between gap-6'>
                    {/* left */}
                    <div className='relative bg-black w-full lg:w-[570px] h-[620px] flex p-6 lg:p-12 rounded-md'>
                        <div className='self-end z-10 text-white h-32 mb-4 lg:mb-8'>
                            <h3 className='text-xl sm:text-2xl mb-2 sm:mb-4'>PlayStation 5</h3>
                            <p className='w-full sm:w-64 mb-3 sm:mb-5 text-sm sm:text-base'>
                                Black and White version of the PS5 coming out on sale.
                            </p>
                            <Link href="" className='border-b'>Shop Now</Link>
                        </div>
                        <img className='absolute bottom-0 right-2 sm:right-4 w-[180px] sm:w-auto' src="/images/ps5.png" alt="" />
                    </div>

                    {/* right */}
                    <div className='flex flex-col md:gap-8 xs:gap-6 lg:gap-0 justify-between w-full lg:w-auto'>
                        {/* top */}
                        <div className='relative w-full lg:w-[570px] h-[284px] flex justify-start items-center bg-black rounded-md'>
                            <div className='z-10 text-white flex w-full h-full p-4 sm:p-6'>
                                <div className='self-end'>
                                    <h3 className='text-xl sm:text-2xl mb-2 sm:mb-4'>Women’s Collections</h3>
                                    <p className='w-full sm:w-64 mb-2 sm:mb-4 text-sm sm:text-base'>
                                        Featured woman collections that give you another vibe.
                                    </p>
                                    <Link href="" className='border-b'>Shop Now</Link>
                                </div>
                            </div>
                            <img className='absolute right-0 w-full h-full rounded-md object-cover' src="/images/woman.png" alt="" />
                        </div>

                        {/* bottom */}
                        <div className='flex flex-col xs:gap-6 md:gap-0 sm:flex-row justify-between'>
                            <div className='relative w-full sm:w-[270px] h-[284px] bg-black rounded-md overflow-hidden flex justify-center items-center'>
                                {/* تصویر زیر متن */}
                                <img className='w-[150px] sm:w-[190px]  rounded-md' src="/images/transparent.png" alt="" />

                                {/* متن روی تصویر */}
                                <div className='absolute inset-0 z-10 text-white p-4 sm:p-6 mt-28'>
                                    <h3 className='text-xl sm:text-2xl mb-2 sm:mb-4'>Speakers</h3>
                                    <p className='w-full sm:w-64 mb-2 sm:mb-4 text-sm sm:text-base'>Amazon wireless speakers</p>
                                    <Link href="" className='border-b inline-block w-auto'>Shop Now</Link>
                                </div>
                            </div>

                            <div className='relative w-full sm:w-[270px] h-[284px] bg-black rounded-md overflow-hidden flex justify-center items-center'>
                                {/* تصویر زیر متن */}
                                <img className='w-[150px] sm:w-[190px] rounded-md ' src="/images/crem.png" alt="" />

                                {/* متن روی تصویر */}
                                <div className='absolute inset-0 z-10 text-white p-4 sm:p-6 mt-28'>
                                    <h3 className='text-xl sm:text-2xl mb-2 sm:mb-4'>Perfume</h3>
                                    <p className='w-full sm:w-56 mb-2 sm:mb-4 text-sm sm:text-base'>GUCCI INTENSE OUD EDP</p>
                                    <Link href="" className='border-b inline-block w-auto'>Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default LatestProductsSection

// <div className='mx-auto w-[85%]'>
//                 <div className='flex mx-auto justify-between'>
//                     {/* left */}
//                     <div className='relative bg-black w-[570px] h-[620px] flex p-12 rounded-md'>
//                         <div className='self-end  z-10 text-white h-32 mb-8'>
//                             <h3 className='text-2xl mb-4'>PlayStation 5</h3>
//                             <p className='w-64 mb-5'>Black and White version of the PS5 coming out on sale.</p>
//                             <Link href="" className='border-b'>Shop Now</Link>
//                         </div>
//                         <img className='absolute bottom-0 right-4' src="/images/ps5.png" alt="" />
//                     </div>

//                     {/* right */}
//                     <div className='flex flex-col justify-between'>
//                         {/* top */}
//                         <div className='relative w-[570px] h-[284px] flex justify-start items-center bg-black  rounded-md'>
//                             <div className='z-10 text-white flex w-full h-full p-6'>
//                                 <div className='self-end'>
//                                     <h3 className='text-2xl mb-4'>Women’s Collections</h3>
//                                     <p className='w-64 mb-4'>Featured woman collections that give you another vibe.</p>
//                                     <Link href="" className='border-b'>Shop Now</Link>
//                                 </div>
//                             </div>
//                             <img className='absolute right-0 w-full h-full rounded-md' src="/images/woman.png" alt="" />
//                         </div>
//                         {/* bottom */}
//                         <div className='w-[570px] h-[284px] flex  items-center justify-between '>
//                             <div className='relative w-[270px] h-[284px] bg-black rounded-md'>

//                                 <div className='z-10 text-white flex w-full h-full p-6'>
//                                     <div className='self-end'>
//                                         <h3 className='text-2xl mb-4'>Speakers</h3>
//                                         <p className='w-64 mb-4'>Amazon wireless speakers</p>
//                                         <Link href="" className='border-b'>Shop Now</Link>
//                                     </div>
//                                 </div>
//                                 <img className='absolute bottom-2 left-10 w-[190px]  rounded-md' src="/images/transparent.png" alt="" />
//                             </div>
//                             <div className='relative w-[270px] h-[284px] bg-black rounded-md'>

//                             <div className='z-10 text-white flex w-full h-full p-6'>
//                                     <div className='self-end'>
//                                         <h3 className='text-2xl mb-4'>Perfume</h3>
//                                         <p className='w-64 mb-4'>GUCCI INTENSE OUD EDP</p>
//                                         <Link href="" className='border-b'>Shop Now</Link>
//                                     </div>
//                                 </div>
//                                 <img className='absolute bottom-2 left-10 w-[190px]  rounded-md' src="/images/crem.png" alt="" />
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>