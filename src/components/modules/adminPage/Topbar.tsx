"use client";

import { IoIosSearch, IoIosNotifications } from "react-icons/io";

const Topbar = () => {
  return (
    <header className="w-full bg-slate-800 h-20 flex items-center justify-between px-5 text-white border-b border-black">
      {/* بخش اطلاعات کاربر */}
      <div className="flex items-center gap-3">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src="/images/Admin.webp"
          alt="Admin Avatar"
        />
        <div>
          <p className="font-semibold">Mohammad Reza</p>
          <span className="text-sm text-gray-400">Admin</span>
        </div>
      </div>

      {/* بخش جستجو و نوتیفیکیشن */}
      <div className="flex items-center gap-5">
        {/* جعبه جستجو */}
        <div className="relative">
          <input
            className="bg-white text-black p-2 pl-10 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-slate-400"
            type="text"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute left-3 top-2.5 text-slate-600 text-xl cursor-pointer" />
        </div>
    

        {/* آیکن نوتیفیکیشن */}
        <div className="relative cursor-pointer">
          <IoIosNotifications className="text-2xl text-white hover:text-gray-300" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;