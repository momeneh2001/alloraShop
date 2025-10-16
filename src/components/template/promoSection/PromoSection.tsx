"use client";
import { useState } from "react";
import { useTimer } from "react-timer-hook";

function PromoSection() {

    const [expiryTimestamp] = useState<Date>(() => {
        const time = new Date();
        time.setHours(time.getHours() + 72);
        return time;
    });
    const { seconds, minutes, hours } = useTimer({
        expiryTimestamp,
        // onExpire: () => console.log("Timer expired!"), function
    });
    const format = (num: number) => num.toString().padStart(2, "0");


    const timeParts = [
        { label: "Hours", value: hours },
        { label: "Hours", value: minutes },
        { label: "Seconds", value: seconds },
    ];


    return (
        <section className="container mb-20">
        <div className="bg-black  min-h-[500px] p-4 xs:p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 rounded-lg">
          
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <p className="text-green-400 text-sm xs:text-base md:text-lg">Categories</p>
      
            <h2 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl max-w-[430px] leading-tight">
              Enhance Your Music Experience
            </h2>
      
            
            <div className="flex justify-center lg:justify-start mt-2 md:mt-4">
              {timeParts.map((item, index) => (
                <div key={item.label} className="flex items-center">
                  <div className="flex flex-col items-center justify-center p-2 min-w-[36px] xs:min-w-[40px] bg-white rounded-full">
                    <div className="text-xs xs:text-sm sm:text-base md:text-xl xl:text-2xl font-bold">
                      {format(item.value)}
                    </div>
                  </div>
      
                  {index < timeParts.length - 1 && (
                    <span className="mx-[2px] sm:mx-1 md:mx-2 text-xs xs:text-sm sm:text-lg md:text-xl font-bold text-red-600 relative top-[-4px]">
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
      
            <div className="mt-4">
              <button className="px-6 py-3 xs:px-8 xs:py-4 bg-green-500 text-white rounded-lg font-semibold ">
                Buy Now!
              </button>
            </div>
          </div>
    
          <div className="w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[500px] md:max-w-[540px] lg:w-[570px] relative flex items-center justify-center">
            <div className="absolute w-[340px] xs:w-[420px] sm:w-[480px] md:w-[520px] h-[340px] xs:h-[420px] sm:h-[480px] md:h-[520px] rounded-full bg-[radial-gradient(white_0%,transparent_70%)] blur-2xl z-0"></div>
            <img
              className="relative z-10 w-full h-auto object-contain"
              src="/images/Frame 694.png"
              alt="Music"
            />
          </div>
        </div>
      </section>
    )
}

export default PromoSection
