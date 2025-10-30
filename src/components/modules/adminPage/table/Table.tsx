"use client"
import { useRouter } from "next/navigation";
import React from "react";
import swal from "sweetalert";

interface User {
    _id: string;
    name: string;
    email?: string;
    phone?: string;
    role: string;
}

interface TableProps {
    users: User[];
}

const Table: React.FC<TableProps> = ({ users }) => {

    const router = useRouter();

    const ChangeRole = async (userID: string) => {
        try {
            if (!userID) {
                swal("Warning", "User ID is required", "warning");
                return;
            }
            const res = await fetch("/api/user/role", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: userID }),
            });
            const data = await res.json();
            if (!res.ok) {
                swal("Error", data.message || "Failed to update role", "error");
                return;
            }
            swal("Success", "User role changed successfully!", "success");
            router.refresh();
            // return data;
        } catch (err: any) {
            swal("Error", err.message || "Something went wrong", "error");
        }
    };
    const banUser = async (email: string, phone: string) => {
        console.log('phone', phone)
        console.log('email', email)
        // Validation 
        if (!email || !phone) {
            swal("Warning", "Email and phone are required", "warning");
            return;
        }

        const confirm = await swal({
            title: "Are you sure?",
            text: `Do you want to ban the user with email: ${email}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });

        if (!confirm) return; // اگر کاربر Cancel کرد، ادامه نمی‌دهیم

        try {
            const res = await fetch("/api/user/ban", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, phone }),
            });

            const data = await res.json();

            if (res.ok) {
                await swal("Success", "User has been banned", "success");
               
            } else {
                swal("Error", data.message || "Failed to ban user", "error");
            }
        } catch (err: any) {
            swal("Error", err.message || "Something went wrong", "error");
        }
    };

    return (
        <main className="p-6">
            {/* Table Title */}
            <h2 className="relative text-[30px] font-medium text-left mt-8 uppercase">
                <span className="bg-white pl-6 relative z-10">User List</span>
                <span className="absolute top-1/2 left-0 right-0 border-b border-gray-800 shadow-[0_1px_0_0_#711d1c] z-0 w-[95%] mx-auto"></span>
            </h2>

            {/* Table */}
            <div className="mt-10 overflow-x-auto rounded-lg border border-gray-300 shadow-md bg-[#f2f7fd] p-5">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-black">
                            <th className="py-3 px-6 text-center">ID</th>
                            <th className="py-3 px-6 text-center">Name</th>
                            <th className="py-3 px-6 text-center">Email</th>
                            <th className="py-3 px-6 text-center">phone</th>
                            <th className="py-3 px-6 text-center">Role</th>
                            <th className="py-3 px-6 text-center">Edit</th>
                            <th className="py-3 px-6 text-center">Change Role</th>
                            <th className="py-3 px-6 text-center">Ban</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={user._id}
                                className="bg-white hover:bg-gray-50 transition-colors"
                            >
                                <td className="py-2 px-4 text-center">{index + 1}</td>
                                <td className="py-2 px-4 text-center">{user.name}</td>
                                <td className="py-2 px-4 text-center">{user.email || "No email"}</td>
                                <td className="py-2 px-4 text-center">{user.phone || "No phone"}</td>
                                <td className="py-2 px-4 text-center">
                                    {user.role === "USER" ? "Regular User" : "Admin"}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    <button className="bg-black text-white text-sm px-3 py-1 rounded hover:bg-gray-800 transition w-full">
                                        Edit
                                    </button>
                                </td>
                                <td className="py-2 px-4 text-center">
                                    <button onClick={() => ChangeRole(user._id)} className="bg-black text-white text-sm px-3 py-1 rounded hover:bg-gray-800 transition w-full">
                                        Change Role
                                    </button>
                                </td>
                                <td className="py-2 px-4 text-center">
                                    <button onClick={() => banUser(user.email, user.phone)} className="bg-red-700 text-white text-sm px-3 py-1 rounded hover:bg-red-800 transition w-full">
                                        Ban
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </main>
    );
};

export default Table;
