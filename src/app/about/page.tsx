import Navbar from '@/components/modules/navbar/Navbar'
import { verifyAccessToken } from '@/utiles/auth'
import { cookies } from 'next/headers'
import UserModel from "../../../models/User"
import React from 'react'
import Footer from '@/components/modules/footer/Footer'
import Image from 'next/image'
import ServicesSection from '@/components/template/servicesSection/ServicesSection'
import KeyMetrics from '@/components/template/keyMetrics/KeyMetrics'
import TeamSlider from '@/components/template/teamSlider/TeamSlider'


export default async function About() {
    const token = cookies().get("token")
    let user = null

    if (token) {
        const tokenPayload = verifyAccessToken(token.value)
        if (tokenPayload) {
            user = await UserModel.findOne({ email: tokenPayload.email })
        }

    }
    return (

        <>
            <Navbar isLogin={!!user} />
            <main className=' my-40'>
                <section>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full">
                        {/* بخش متن */}
                        <div className="w-full lg:max-w-[525px] px-4 md:px-8 lg:px-0 mx-auto lg:mx-auto">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 lg:mb-10 font-semibold">
                                Our Story
                            </h2>
                            <p className="text-gray-600 my-4 leading-relaxed">
                                Launched in 2015, Exclusive is South Asia’s premier online shopping
                                marketplace with an active presence in Bangladesh. Supported by a wide
                                range of tailored marketing, data and service solutions, Exclusive has
                                10,500 sellers and 300 brands and serves 3 million customers across the
                                region.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Exclusive has more than 1 Million products to offer, growing very fast.
                                Exclusive offers a diverse assortment in categories ranging from consumer...
                            </p>
                        </div>

                        {/* بخش تصویر */}
                        <div className="w-full md:w-full lg:w-auto mt-10 lg:mt-0 lg:ml-auto">
                            <Image
                                src="/images/Side Image.png"
                                width={705}
                                height={609}
                                alt="imgAbout"
                                className="w-full h-auto object-cover lg:w-[705px]"
                            />
                        </div>
                    </div>
                </section>
                <section className='mt-48'>
                    <div className='container flex items-center justify-center flex-wrap gap-8 '>
                        <KeyMetrics />
                        <KeyMetrics />
                        <KeyMetrics />
                        <KeyMetrics />
                    </div>
                </section>

                <section className='container my-16'>
                    {/* teamCard */}
                    <TeamSlider />
                </section>




                <ServicesSection />

            </main>
            <Footer />
        </>
    )
}



