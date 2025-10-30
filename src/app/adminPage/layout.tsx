import React from "react";
import Sidebar from "@/components/modules/adminPage/Sidebar";
import Topbar from "@/components/modules/adminPage/Topbar";
import { authUser } from "@/utiles/authUser";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children, }: { children: React.ReactNode; }) {

  // const user = await authUser();
  // if (user) {
  //   if (user.role !== "ADMIN") {
  //     return redirect('/loginRegister')
  //   }
  // }else{
  //   return redirect('/loginRegister')
  // }

  return (
    <div className="bg-white w-full text-black min-h-screen">
      <section className="flex">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <main className="p-4">{children}</main>
        </div>
      </section>
    </div>
  );
}
