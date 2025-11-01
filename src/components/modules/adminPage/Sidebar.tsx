"use client";

import Link from "next/link";

import swal from "sweetalert";
import {
  ImReply,
} from "react-icons/im";
import {
  FaComments,
  FaShoppingBag,
  FaUsers,
} from "react-icons/fa";
import {
  MdOutlineAttachMoney,
  MdSms,
  MdLogout,
} from "react-icons/md";


const Sidebar = () => {


  const logoutHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
    }).then((result) => {
      if (result) {
        // TODO: اضافه کردن لاگ‌اوت واقعی (پاک کردن توکن، ریدایرکت به صفحه لاگین)
        console.log("User logged out");
      }
    });
  };


  return (
    <aside className="w-[280px] lg:w-[350px] h-screen bg-gray-800 text-white p-4 sticky top-0 flex flex-col justify-between">
   
      <div>
        <div className="text-center mt-3 pb-6 border-b border-gray-600">
          <p className="text-lg font-semibold">Welcome Mohammad</p>
        </div>

        <ul className="flex flex-col gap-6 py-8 px-3 text-base">
          <Link href="/p-admin" className="flex items-center gap-3 hover:text-slate-300">
            <ImReply />
            Dashboard
          </Link>
          <Link href="/adminPage/users" className="flex items-center gap-3 hover:text-slate-300">
            <FaShoppingBag />
            Products
          </Link>
          <Link href="/adminPage/users" className="flex items-center gap-3 hover:text-slate-300">
            <FaUsers />
            Users
          </Link>
          <Link href="/p-admin/comments" className="flex items-center gap-3 hover:text-slate-300">
            <FaComments />
            Comments
          </Link>
          <Link href="/adminPage/tickets" className="flex items-center gap-3 hover:text-slate-300">
            <MdSms />
            Tickets
          </Link>
          <Link href="/p-admin/discount" className="flex items-center gap-3 hover:text-slate-300">
            <MdOutlineAttachMoney />
            Discounts
          </Link>
        </ul>
      </div>

      <div
        onClick={logoutHandler}
        className="flex justify-between items-center cursor-pointer border-t border-gray-600 pt-4 hover:text-red-400 transition-colors"
      >
        <span>Logout</span>
        <MdLogout size={20} />
      </div>

    </aside>
  );
};

export default Sidebar;