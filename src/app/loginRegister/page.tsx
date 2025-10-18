"use client"
import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Login from '@/components/template/login-register/Login'
import Register from '@/components/template/login-register/Register'
import Image from 'next/image'
import React, { useState } from 'react'

// edit
function loginRegister() {

    const [authType, setAuthType] = useState("login")

    const showRegisterForm = () => setAuthType("register")
    const showLoginForm = () => setAuthType("login")

    return (
        <>
            <Navbar />
            <section className="mt-16 mb-36 flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-10 px-4 sm:px-8">
    
                <div className="w-full  flex justify-center">
                    <Image
                        width={850}
                        height={781}
                        src="/images/dl.beatsnoop.png"
                        alt="login illustration"
                        className=" w-full max-w-[850px] h-auto"
                        priority
                    />
                </div>

               
                <div className="w-full md:w-[500px]  flex flex-col items-center justify-center p-6 ">
                     {authType === "login" ? (
                        <Login showRegisterForm={showRegisterForm} />
                    ) : (
                        <Register showLoginForm={showLoginForm} />
                    )} 
                    
                </div>
            </section>
            <Footer />
        </>
    )
}

export default loginRegister
