"use client";

import Footer from '@/components/modules/footer/Footer'
import Navbar from '@/components/modules/navbar/Navbar'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";



function ForgotPassword() {
  const [step, setStep] = useState<"enterEmail" | "enterCode">("enterEmail");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [code, setCode] = useState("");

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("enterCode");
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
  
    (swal as any)({
      title: "Code verified!",
      text: "You can now reset your password.",
      icon: "success",
      button: "Close",
    });
  };

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
          <div className="w-full md:w-[400px] lg:w-[500px] flex flex-col items-center justify-center p-6 ">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-start">
              Forgot Password
            </h2>
            <p className="text-sm sm:text-base my-4 sm:my-5 text-center sm:text-start">
              {step === "enterEmail"
                ? "Enter your email or phone number to receive a reset code"
                : "Enter the code sent to your email or phone"}
            </p>

            {step === "enterEmail" ? (
              <form onSubmit={handleSendCode} className="flex flex-col gap-6 w-full">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  className="h-10 border-b border-gray-400 outline-none bg-transparent focus:border-green-500 transition"
                />
                <button className="bg-green-600 text-white w-full py-3 sm:py-4 rounded-md hover:bg-green-700 transition">
                  Send Reset Code
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyCode} className="flex flex-col gap-6 w-full">
                <input
                  type="text"
                  placeholder="Enter Reset Code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="h-10 border-b border-gray-400 outline-none bg-transparent focus:border-green-500 transition"
                />
                <button className="bg-green-600 text-white w-full py-3 sm:py-4 rounded-md hover:bg-green-700 transition">
                  Verify Code
                </button>
                <button
                  type="button"
                  onClick={() => setStep("enterEmail")}
                  className="text-sm sm:text-base text-blue-600 mt-2 hover:underline"
                >
                  Resend Code / Change Email
                </button>
              </form>
            )}

            <Link
            href="/loginRegister"
              className="mt-6 text-red-600 hover:underline text-sm sm:text-base"
            >
              Cancel
            </Link>
          </div>

        </div>
      </section>



      <Footer />
    </>
  );
}

export default ForgotPassword;
