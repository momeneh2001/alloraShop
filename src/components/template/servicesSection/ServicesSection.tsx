import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";

function ServicesSection() {
    return (
        <section className="container mb-40 px-4">
            <div className="flex flex-wrap justify-center xxl:justify-evenly items-center mx-auto gap-6">
                <div className="flex flex-col justify-center items-center w-full xs:w-1/2 md:w-1/3 xxl:w-1/4 mb-6">
                    <div className="bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center mb-3">
                        <div className="bg-black text-white w-14 h-14 rounded-full flex justify-center items-center">
                            <TbTruckDelivery className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-lg">FREE AND FAST DELIVERY</h3>
                        <p className="text-sm">Free delivery for all orders over $140</p>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-center w-full xs:w-1/2 md:w-1/3 xxl:w-1/4 mb-6">
                    <div className="bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center mb-3">
                        <div className="bg-black text-white w-14 h-14 rounded-full flex justify-center items-center">
                            <RiCustomerServiceLine className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-lg">24/7 CUSTOMER SERVICE</h3>
                        <p className="text-sm">Friendly 24/7 customer support</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full xs:w-1/2 md:w-1/3 xxl:w-1/4 mb-6">
                    <div className="bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center mb-3">
                        <div className="bg-black text-white w-14 h-14 rounded-full flex justify-center items-center">
                            <GoShieldCheck className="w-10 h-10" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold text-lg">MONEY BACK GUARANTEE</h3>
                        <p className="text-sm">We return money within 30 days</p>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default ServicesSection
