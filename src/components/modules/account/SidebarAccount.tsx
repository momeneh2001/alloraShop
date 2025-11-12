"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import swal from "sweetalert";
import {
  FaUserCircle,
  FaMapMarkedAlt,
  FaBoxOpen,
  FaUndo,
  FaTimesCircle,
  FaHeart,
} from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const SidebarAccount = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/signout", { method: "POST" });
      if (res.ok) {
        (swal as any)({
          title: "Logout successful",
          icon: "success",
          button: "Close",
        }).then(() => {
          router.push("/"); 
        });
      } else {
        (swal as any)({
          title: "Logout failed",
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
  };

  return (
    <aside className="w-[280px] lg:w-[320px] h-screen bg-white shadow-md border-r border-gray-200 p-6 sticky top-0 flex flex-col justify-between">
      <div>
        <div className="text-center border-b border-gray-200 my-8 pb-5">
          <p className="text-lg font-semibold text-gray-800">Welcome</p>
        </div>
        <div className="mt-6 flex flex-col gap-8">
          <div>
            <h2 className="text-sm font-bold uppercase text-gray-500 mb-3">
              Manage My Account
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/profile"
                  className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <FaUserCircle className="text-gray-500" />
                  My Profile
                </Link>
              </li>
              <li className="flex items-center gap-3 text-gray-400 cursor-not-allowed select-none">
                <FaMapMarkedAlt className="text-gray-400" />
                Address Book <span className="text-xs">(coming soon)</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase text-gray-500 mb-3">
              Manage My Orders
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 cursor-not-allowed select-none">
                <FaBoxOpen className="text-gray-400" />
                My Orders <span className="text-xs">(coming soon)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 cursor-not-allowed select-none">
                <FaUndo className="text-gray-400" />
                My Returns <span className="text-xs">(coming soon)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 cursor-not-allowed select-none">
                <FaTimesCircle className="text-gray-400" />
                My Cancellations <span className="text-xs">(coming soon)</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase text-gray-500 mb-3">
              My Wishlist
            </h2>
            <Link
              href="/wishlist"
              className="flex items-center gap-3 text-gray-700 hover:text-red-600 transition-colors"
            >
              <FaHeart className="text-gray-500" />
              View Wishlist
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-5">
        <button
          onClick={handleLogout}
          className="flex items-center justify-between w-full text-gray-700 hover:text-red-600 transition-colors"
        >
          <span>Logout</span>
          <MdLogout size={20} />
        </button>
      </div>
    </aside>
  );
};

export default SidebarAccount;
