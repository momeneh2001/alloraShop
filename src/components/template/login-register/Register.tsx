import React, { cache, useState } from 'react'
import { FcGoogle, FcSms } from "react-icons/fc";
import swal from 'sweetalert';
import { validateUserData } from "../../../utiles/validations/userValidation.client";


interface RegisterProps {
    showLoginForm: () => void;
}



function Register({ showLoginForm }: RegisterProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const signUp = async () => {
        // validation
        const validationError = validateUserData({ name, email, phone, password });
        if (validationError) {
            return swal({
                title: validationError,
                icon: "error",
                buttons: {
                    confirm: {
                        text: "OK",
                        value: true,
                        visible: true,
                        className: "",
                        closeModal: true
                    }
                }
            });
        }

        const user = { name, phone, email, password }

        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });
            if (res.status === 201) {
                swal({
                    title: "Account created successfully!",
                    icon: "success",
                    buttons: {
                        confirm: {
                            text: "OK",
                            value: true,
                            visible: true,
                            className: "",
                            closeModal: true
                        }
                    }
                });
            }
        } catch (err) {
            // console.error("Signup error:", err);
            swal({
                title: "Something went wrong!",
                icon: "error",
                buttons: {
                    confirm: {
                        text: "OK",
                        value: true,
                        visible: true,
                        className: "",
                        closeModal: true
                    }
                }
            });

        }

    }

    return (
        <div className="w-full sm:w-[500px]  flex flex-col items-center justify-center px-4 sm:px-8 py-8">
            <div className="flex flex-col justify-center items-center gap-6 sm:gap-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Create an account</h2>
                <p className="text-sm sm:text-base my-4 sm:my-5 text-start">Enter your details below</p>

                <div className="flex flex-col gap-6 sm:gap-5 w-full">
                    <form className="flex flex-col gap-6 sm:gap-8 w-full child:h-10 child:border-b child:outline-none child:border-gray-400 child:bg-transparent child:focus:border-red-500 transition">
                        <input value={name} onChange={event => setName(event.target.value)} placeholder="Username" type="text" />
                        <input value={email} onChange={event => setEmail(event.target.value)} placeholder="Email " type="text" />
                        <input value={phone} onChange={event => setPhone(event.target.value)} placeholder="Phone Number" type="text" />
                        <input value={password} onChange={event => setPassword(event.target.value)} placeholder="Password" type="password" />
                    </form>

                    <button onClick={signUp} className="bg-red-600 text-white text-center w-full py-3 sm:py-4 rounded-md hover:bg-red-700 transition">Create Account</button>
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
