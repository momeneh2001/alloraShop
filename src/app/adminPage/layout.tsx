import React from "react";
import Sidebar from "@/components/modules/adminPage/Sidebar";
import Topbar from "@/components/modules/adminPage/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
