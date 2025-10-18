"use client";

import React, { useState } from "react";

interface SmsProps {
  onCancel: () => void; 
}

function Sms({ onCancel }: SmsProps) {

  const [step, setStep] = useState<"enterPhone" | "enterOtp">("enterPhone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // اینجا می‌تونی API ارسال SMS رو صدا بزنی
    setStep("enterOtp");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // اینجا می‌تونی OTP را بررسی کنی
    alert("Logged in successfully!");
  };

  return (
    <div className="w-full md:w-[400px] lg:w-[500px] flex flex-col items-center justify-center p-6">
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center sm:text-start">
        Log in with SMS
      </h2>
      <p className="text-sm sm:text-base my-4 sm:my-5 text-center sm:text-start">
        Enter your phone number to receive a login code
      </p>

      {step === "enterPhone" ? (
        <form onSubmit={handleSendOtp} className="flex flex-col gap-6 w-full">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-10 border-b border-gray-400 outline-none bg-transparent focus:border-green-500 transition"
          />
          <button className="bg-green-600 text-white w-full py-3 sm:py-4 rounded-md hover:bg-green-700 transition">
            Send OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="flex flex-col gap-6 w-full">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="h-10 border-b border-gray-400 outline-none bg-transparent focus:border-green-500 transition"
          />
          <button className="bg-green-600 text-white w-full py-3 sm:py-4 rounded-md hover:bg-green-700 transition">
            Verify OTP
          </button>
          <button
            type="button"
            onClick={() => setStep("enterPhone")}
            className="text-sm sm:text-base text-blue-600 mt-2 hover:underline"
          >
            Resend OTP / Change Number
          </button>
        </form>
      )}

      <button
        onClick={onCancel}
        className="mt-6 text-red-600 hover:underline text-sm sm:text-base"
      >
        Cancel
      </button>
    </div>
  )
}

export default Sms;
