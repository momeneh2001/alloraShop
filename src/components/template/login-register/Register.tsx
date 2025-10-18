import React from 'react'
import { FcGoogle, FcSms } from "react-icons/fc";


interface RegisterProps {
    showLoginForm: () => void;
}



function Register({ showLoginForm }: RegisterProps) {
    return (
        <div className="w-full sm:w-[500px]  flex flex-col items-center justify-center px-4 sm:px-8 py-8">
            <div className="flex flex-col justify-center items-center gap-6 sm:gap-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Create an account</h2>
                <p className="text-sm sm:text-base my-4 sm:my-5 text-start">Enter your details below</p>

                <div className="flex flex-col gap-6 sm:gap-5 w-full">
                    <form className="flex flex-col gap-6 sm:gap-8 w-full child:h-10 child:border-b child:outline-none child:border-gray-400 child:bg-transparent child:focus:border-red-500 transition">
                        <input placeholder="Username" type="text" />
                        <input placeholder="Email or Phone Number" type="text" />
                        <input placeholder="Password" type="password" />
                    </form>

                    <button className="bg-red-600 text-white text-center w-full py-3 sm:py-4 rounded-md hover:bg-red-700 transition">Create Account</button>
                    <button className="flex items-center gap-2 justify-center rounded-md border border-gray-400 py-3 sm:py-4 hover:bg-gray-50 transition">
                        <FcGoogle className="w-6 h-6" /> <span>Sign up with Google</span>
                    </button>
                    {/* Upgrade later*/}
                    {/* <button onClick={() => setIsLoginWithOTP(true)} className="flex items-center gap-2 justify-center rounded-md border border-gray-400 w-full sm:w-auto px-4 py-3 sm:py-4 hover:bg-gray-50 transition">
                        <FcSms className="w-6 h-6" /> <span>Sign up with SMS</span>
                    </button> */}

                </div>

                <span className="text-blue-600 text-sm sm:text-base ">
                    Already have an account?
                    <span onClick={showLoginForm} className="border-b border-blue-600 cursor-pointer"> Log in</span>
                </span>
            </div>
        </div>
    )
}

export default Register
