"use client";
import React from "react";
import { useRouter } from "next/navigation";
import swal from "sweetalert";

interface DataTableProps {
    comments: any[];
}

export default function DataTable({ comments }: DataTableProps) {
    const router = useRouter();

    const showCommentBody = (body: string) => {
        (swal as any)({
            text: body,
            buttons: "Read",
        });
    };

    const acceptComment = async (commentID: string) => {
        const res = await fetch("/api/comments/accept", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: commentID }),
        });

        if (res.status === 200) {
            (swal as any)({
                title: "Comment approved successfully",
                icon: "success",
                button: "Close",
            }).then(() => router.refresh());
        }
    };

    const rejectComment = async (commentID: string) => {
        const res = await fetch("/api/comments/reject", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: commentID }),
        });

        if (res.status === 200) {
            (swal as any)({
                title: "Comment rejected successfully",
                icon: "success",
                button: "Close",
            }).then(() => router.refresh());
        }
    };

    return (
        <div className="px-6">
            <h2 className="relative text-2xl font-medium text-left mt-8 uppercase">
                <span className="absolute top-1/2 left-0 right-0 border-b border-gray-800 shadow-[0_1px_0_0_#711d1c] z-0 w-[95%] mx-auto"></span>
                <span className="bg-white pl-6 relative z-10">Comments List</span>
            </h2>

            <div className="mt-10 overflow-x-auto bg-gray-100  rounded-lg">
                <table className="min-w-full border-collapse text-center">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="p-2">ID</th>
                            <th className="p-2">User</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Score</th>
                            <th className="p-2">Product</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">View</th>
                            <th className="p-2">Delete</th>
                            <th className="p-2">Approve / Reject</th>
                            <th className="p-2">Reply</th>
                            <th className="p-2">Ban</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((comment, index) => {
                            const rowColor = comment.isAccept
                                ? "bg-green-100 hover:bg-green-200"
                                : "bg-red-100 hover:bg-red-200";

                            return (
                                <tr
                                    key={comment._id}
                                    className={`transition ${rowColor} border-b border-gray-200`}
                                >
                                    <td className="p-2 font-semibold text-gray-700">{index + 1}</td>
                                    <td className="p-2">{comment.username}</td>
                                    <td className="p-2 text-gray-600">{comment.email}</td>
                                    <td className="p-2">{comment.score}</td>
                                    <td className="p-2">{comment.product.name}</td>
                                    <td className="p-2">{new Date(comment.date).toLocaleDateString()}</td>

                                    <td className="p-2">
                                        <button
                                            onClick={() => showCommentBody(comment.body)}
                                            className="bg-black text-white text-sm px-3 py-1 rounded w-full hover:bg-gray-800 transition"
                                        >
                                            View
                                        </button>
                                    </td>

                                    <td className="p-2">
                                        <button className="bg-red-700 text-white text-sm px-3 py-1 rounded w-full hover:bg-red-600 transition">
                                            Delete
                                        </button>
                                    </td>

                                    <td className="p-2">
                                        {comment.isAccept ? (
                                            <button
                                                onClick={() => rejectComment(comment._id)}
                                                className="bg-red-500 text-white text-sm px-3 py-1 rounded w-full hover:bg-red-400 transition"
                                            >
                                                Reject
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => acceptComment(comment._id)}
                                                className="bg-green-500 text-white text-sm px-3 py-1 rounded w-full hover:bg-green-400 transition"
                                            >
                                                Approve
                                            </button>
                                        )}
                                    </td>

                                    <td className="p-2">
                                        <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded w-full hover:bg-blue-400 transition">
                                            Reply
                                        </button>
                                    </td>

                                    <td className="p-2">
                                        <button className="bg-red-800 text-white text-sm px-3 py-1 rounded w-full hover:bg-red-700 transition">
                                            Ban
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        </div>
    );
}
