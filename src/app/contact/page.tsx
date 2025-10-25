import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import SendMessage from '@/components/template/sendMessage/SendMessage';
import React from 'react'

import { FiPhone, FiMail } from "react-icons/fi";

function Contact() {
    return (
        <>
            <Navbar />
            <main className="my-20 sm:my-28 lg:my-36">
                <section className="container flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                    <div className="w-full sm:w-[400px] lg:w-[340px] shadow-2xl px-6 sm:px-8 py-8 sm:py-10 rounded-md">

                    
                        <div className="flex flex-col border-b border-black pb-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                                    <FiPhone className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-semibold">Call To Us</h2>
                            </div>
                            <p className="mt-6 mb-4 text-sm sm:text-base">
                                We are available 24/7, 7 days a week.
                            </p>
                            <p className="mb-6 text-sm sm:text-base">
                                Phone: <span className="font-medium">+8801611112222</span>
                            </p>
                        </div>
                        <div className="flex flex-col mt-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                                    <FiMail className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-semibold">Write To Us</h2>
                            </div>
                            <p className="mt-6 mb-4 text-sm sm:text-base">
                                Fill out our form and we will contact you within 24 hours.
                            </p>
                            <p className="mb-2 text-sm sm:text-base">
                                Emails: <span className="font-medium">customer@exclusive.com</span>
                            </p>
                            <p className="text-sm sm:text-base">
                                Emails: <span className="font-medium">support@exclusive.com</span>
                            </p>
                        </div>
                    </div>

                    <SendMessage />
                </section>
            </main>


            <Footer />
        </>
    )
}

export default Contact
