import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import React from 'react'

function CheckOut() {
    return (
        <>
            <Navbar />


            <main className=" my-36 px-4">
               
                <div className="container flex child:text-4xl">
                    <h2>Billing Details</h2>
                </div>

       
                <section className="container mt-12 flex flex-col lg:flex-row gap-10 lg:items-start lg:justify-between">

          
                    <form className="w-full lg:w-[470px] flex flex-col gap-7">
                        {/* First Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400">First Name <span className="text-red-600">*</span></label>
                            <input className="bg-slate-200 w-full h-14 rounded px-3" type="text" />
                        </div>

                        {/* Company Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400">Company Name</label>
                            <input className="bg-slate-200 w-full h-14 rounded px-3" type="text" />
                        </div>

                        {/* Street Address */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400">Street Address <span className="text-red-600">*</span></label>
                            <input className="bg-slate-200 w-full h-14 rounded px-3" type="text" />
                        </div>

                        {/* Apartment, Floor */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400">Apartment, floor, etc. (optional)</label>
                            <input className="bg-slate-200 w-full h-14 rounded px-3" type="text" />
                        </div>

                        {/* Town/City */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400">Town/City <span className="text-red-600">*</span></label>
                            <input className="bg-slate-200 w-full h-14 rounded px-3" type="text" />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400">Phone Number <span className="text-red-600">*</span></label>
                            <input className="bg-slate-200 w-full h-14 rounded px-3" type="text" />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400">Email Address <span className="text-red-600">*</span></label>
                            <input className="bg-slate-200 w-full h-14 rounded px-3" type="text" />
                        </div>

                        {/* ذخیره اطلاعات */}
                        <label className="flex items-center gap-2 text-sm">
                            <input type="checkbox" id="myCheckbox" />
                            Save this information for faster check-out next time
                        </label>
                    </form>

                   
                    <div className="flex flex-col w-full lg:w-[470px] px-6 py-8 rounded-md shadow-2xl gap-6">
                      
                        <div className="flex flex-col gap-5">
                           
                                <div  className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 w-full xs:w-44">
                                        <img className="w-14 h-14 object-cover rounded-md" src="/images/product-img.png" alt="Product" />
                                        <h2 className="font-semibold text-gray-800 text-sm sm:text-base">LCD Monitor</h2>
                                    </div>
                                    <span>$650</span>
                                </div>

                                <div  className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 w-full xs:w-44">
                                        <img className="w-14 h-14 object-cover rounded-md" src="/images/product-img.png" alt="Product" />
                                        <h2 className="font-semibold text-gray-800 text-sm sm:text-base">LCD Monitor</h2>
                                    </div>
                                    <span>$650</span>
                                </div>
                          
                        </div>

                      
                        <div className="flex flex-col mt-8 border-t-2 border-black gap-3">
                            <div className="flex items-center justify-between py-2">
                                <h4 className="text-gray-700">Subtotal:</h4>
                                <span className="font-medium">$1750</span>
                            </div>
                            <div className="border-t border-b border-black flex items-center justify-between py-3">
                                <h4 className="text-gray-700">Shipping:</h4>
                                <span className="font-medium">Free</span>
                            </div>
                            <div className="border-b border-black flex items-center justify-between py-3">
                                <h4 className="text-gray-700">Coupon:</h4>
                                <span className="font-medium">10%</span>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <h4 className="font-semibold text-lg">Total:</h4>
                                <span className="font-semibold text-lg">$1575</span>
                            </div>

                         
                            <div className="flex items-center justify-center mt-6">
                                <button className="w-full py-4 text-white bg-red-600 rounded-md hover:bg-red-700 transition">
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


            <Footer />
        </>
    )
}

export default CheckOut
