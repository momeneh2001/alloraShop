import React from "react";
import { authUser } from "@/utiles/authUser";
import { redirect } from "next/navigation";
import SidebarAccount from "@/components/modules/account/SidebarAccount";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";

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
        <>
            <Navbar />
            <div className="bg-white w-full text-black min-h-screen">
                <section className="flex">
                    <SidebarAccount />
                    <div className="flex-1">
                        <main className="p-4">{children}</main>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
