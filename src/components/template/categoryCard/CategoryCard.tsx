import React from 'react'
import Link from 'next/link';

// icons
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline,IoShirtOutline,IoHomeOutline  } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";
import { MdSportsTennis } from "react-icons/md";
import { PiBabyCarriageLight } from "react-icons/pi";

interface CategoryCardProps {
    categoryName: string,
    categoryIcon: string,
}

const iconsMap: Record<string, React.ReactNode> = {
    IoIosPhonePortrait: <IoIosPhonePortrait className="w-14 h-14" />,
    HiOutlineDesktopComputer: <HiOutlineDesktopComputer className="w-14 h-14" />,
    BsSmartwatch: <BsSmartwatch className="w-14 h-14" />,
    CiCamera: <CiCamera className="w-14 h-14" />,
    CiHeadphones: <CiHeadphones className="w-14 h-14" />,
    IoGameControllerOutline: <IoGameControllerOutline className="w-14 h-14" />,

    IoShirtOutline: <IoShirtOutline  className="w-14 h-14" />,
    GiMedicines : <GiMedicines   className="w-14 h-14" />,
    MdSportsTennis  : <MdSportsTennis    className="w-14 h-14" />,
    PiBabyCarriageLight   : <PiBabyCarriageLight    className="w-14 h-14" />,
    IoHomeOutline    : <IoHomeOutline     className="w-14 h-14" />,
};


function CategoryCard({ categoryName, categoryIcon }: CategoryCardProps) {

    const IconComponent = iconsMap[categoryIcon] || <IoIosPhonePortrait className="w-14 h-14" />;


    return (
        <Link href='' className='flex flex-col justify-center gap-1 items-center w-44 h-36 border-2 hover:border-white hover:bg-red-600 hover:text-white transition-all'>
            <div>
                {
                    IconComponent
                }
            </div>
            <span>
                {categoryName}
            </span>
        </Link>
    )
}

export default CategoryCard
