import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

interface sectionHeaderProps {
    miniTitle: string,
    titel: string,
    btn ?: string
}

function SectionHeader({ miniTitle, titel, btn }: (sectionHeaderProps)) {
    const [expiryTimestamp] = useState<Date>(() => {
        const time = new Date();
        time.setHours(time.getHours() + 72); 
        return time;
    });
    const { seconds, minutes, hours, days } = useTimer({
        expiryTimestamp,
        // onExpire: () => console.log("Timer expired!"), function
    });
    const format = (num: number) => num.toString().padStart(2, "0");


    const timeParts = [
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Hours", value: minutes },
        { label: "Seconds", value: seconds },
    ];


    return (
        <div className='flex flex-col gap-6 mb-10'>
            {/* mini titel */}
            <div className='flex items-center gap-3'>
                <span className='w-5 h-10 bg-red-600 block rounded-md'></span>
                <h6 className='text-red-600'>{miniTitle}</h6>
            </div>

            {/* titel Section */}
            <div className="flex justify-between">
                <div className="flex items-end gap-20">
                    <h2 className="text-3xl font-bold">{titel}</h2>
                    <div className="flex items-center font-mono text-center">
                        {timeParts.map((item, index) => (
                            <div key={item.label} className="flex items-center">

                                <div className="flex flex-col items-center justify-center  rounded-xl min-w-[40px]">
                                    <div className="text-sm text-gray-400  uppercase">
                                        {item.label}
                                    </div>

                                    <div className=" font-bold text-3xl">
                                        {format(item.value)}
                                    </div>

                                </div>

                                {/* جداکننده ":" به جز مورد آخر */}
                                {index < timeParts.length - 1 && (
                                    <span className="mx-2 text-lg font-bold text-red-600 self-end">:</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="self-end">
                    {
                        btn ? (
                            <button className="py-4 px-12 bg-red-600 rounded-md text-white">View All</button>
                        ) : (
                            <div className="flex gap-2">
                                <div className="w-8 h-8 bg-neutral-100 flex items-center justify-center rounded-full">
                                    <FaArrowLeftLong className=" " />
                                </div>
                                <div className="w-8 h-8 bg-neutral-100 flex items-center justify-center rounded-full">
                                    <FaArrowRightLong />
                                </div>

                            </div>
                        )

                    }


                </div>
            </div>
        </div >
    )
}

export default SectionHeader
