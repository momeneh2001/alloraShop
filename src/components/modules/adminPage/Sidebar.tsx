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
import { useRouter } from "next/navigation";


const Sidebar = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    swal({
      title: "Are you sure you want to logout?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then(async (confirmed) => {
      if (confirmed) {
        try {
          const res = await fetch("/api/auth/signout", { method: "POST" });
          if (res.ok) {
            (swal as any)({
              title: "You have been logged out successfully!",
              icon: "success",
              button: "Close",
            }).then(() => {
              router.push("/");
            });
          } else {
            (swal as any)({
              title: "Logout failed. Please try again.",
              icon: "error",
              button: "Close",
            });
          }
        } catch (err) {
          console.error(err);
          (swal as any)({
            title: "Something went wrong",
            icon: "error",
            button: "Close",
          });
        }
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
          <Link href="/adminPage" className="flex items-center gap-3 hover:text-slate-300">
            <ImReply />
            Dashboard
          </Link>
          <Link href="/adminPage/products" className="flex items-center gap-3 hover:text-slate-300">
            <FaShoppingBag />
            Products
          </Link>
          <Link href="/adminPage/users" className="flex items-center gap-3 hover:text-slate-300">
            <FaUsers />
            Users
          </Link>
          <Link href="/adminPage/comments" className="flex items-center gap-3 hover:text-slate-300">
            <FaComments />
            Comments
          </Link>
          <Link href="/adminPage/tickets" className="flex items-center gap-3 hover:text-slate-300">
            <MdSms />
            Tickets
          </Link>
          <Link href="/adminPage/discounts" className="flex items-center gap-3 hover:text-slate-300">
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