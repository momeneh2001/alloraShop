import React, { useState } from 'react'
import { FcSms } from "react-icons/fc";
import Sms from './Sms';
import Link from 'next/link';

interface LoginProps {
    showRegisterForm: () => void;
}

function Login({ showRegisterForm }: (LoginProps)) {

    const [isLoginWithOTP, setIsLoginWithOTP] = useState(false)
    

    return (
        <>
            {
                !isLoginWithOTP ? (
                    <>
                        <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 w-full sm:w-[400px] md:w-[450px] lg:w-[500px] px-4 sm:px-0 py-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-start">
                                Log in to SparkNest
                            </h2>
                            <p className="text-sm sm:text-base my-4 sm:my-5 text-center sm:text-start">
                                Enter your details below
                            </p>

                            <div className="flex flex-col gap-6 sm:gap-8 w-full">      

                                <form className="flex flex-col gap-6 sm:gap-8 w-full child:h-10 child:border-b child:outline-none child:border-gray-400 child:bg-transparent child:focus:border-green-500 transition">
                                    <input placeholder="Email or Phone Number" type="text" />
                                    <input placeholder="Password" type="password" />
                                </form>

                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 w-full mt-2">
                                    <button className="bg-green-600 text-white text-center w-full sm:w-[143px] py-3 sm:py-4 rounded-md hover:bg-green-700 transition">
                                        Log In
                                    </button>
                                    <button onClick={()=>setIsLoginWithOTP(true)} className="flex items-center gap-2 justify-center rounded-md border border-gray-400 w-full sm:w-auto px-4 py-3 sm:py-4 hover:bg-gray-50 transition">
                                        <FcSms className="w-6 h-6" /> <span>Log in with SMS</span>
                                    </button>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 w-full mt-2">
                                    <span onClick={showRegisterForm} className="text-red-500 cursor-pointer hover:underline text-sm sm:text-base">
                                        Create Account 
                                    </span>
                                    <Link href='/forgotPassword' className="text-blue-600 cursor-pointer hover:underline text-sm sm:text-base">
                                        Forget Password?
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <Sms onCancel={() => setIsLoginWithOTP(false)} />
                )
            }




        </>


    )
}

export default Login
