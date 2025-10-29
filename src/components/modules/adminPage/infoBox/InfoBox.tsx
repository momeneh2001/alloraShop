import React from "react";
import { IoStatsChart } from "react-icons/io5";

interface BoxProps {
    title: string;
    value: string | number;
}

const Box: React.FC<BoxProps> = ({ title, value }) => {
    return (
        <div className="w-[200px] mx-auto border-2 border-gray-800 rounded-md p-4 text-black flex flex-col justify-between">
         
            <span className="text-xl font-semibold mb-3">{value}</span>


            <div className="flex justify-between items-center">
                <p className="text-base font-medium">{title}</p>
                <IoStatsChart className="w-7 h-7 text-gray-800" />
            </div>
        </div>
    );
};

export default Box;
