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

            <div className="mt-10 overflow-x-auto bg-gray-100 p-6 rounded-lg">
                <table className="min-w-full border-collapse text-center">
                    <thead>
                        <tr className="bg-gray-200">
                            {[
                                "ID",
                                "User",
                                "Email",
                                "Score",
                                "Product",
                                "Date",
                                "View",
                                "Delete",
                                "Approve / Reject",
                                "Reply",
                                "Ban",
                            ].map((th) => (
                                <th key={th} className="p-2">{th}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((comment, index) => (
                            <tr
                                key={comment._id}
                                className="bg-white even:bg-gray-50 hover:bg-gray-200"
                            >
                                <td className={`p-2 ${comment.isAccept ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                                    {index + 1}
                                </td>
                                <td className="p-2">{comment.username}</td>
                                <td className="p-2">{comment.email}</td>
                                <td className="p-2">{comment.score}</td>
                                <td className="p-2">{comment.productID?.name}</td>
                                <td className="p-2">{new Date(comment.date).toLocaleDateString()}</td>
                                <td className="p-2">
                                    <button
                                        onClick={() => showCommentBody(comment.body)}
                                        className="bg-black text-white px-3 py-1 rounded w-full"
                                    >
                                        View
                                    </button>
                                </td>
                                <td className="p-2">
                                    <button className="bg-red-900 text-white px-3 py-1 rounded w-full">Delete</button>
                                </td>
                                <td className="p-2">
                                    {comment.isAccept ? (
                                        <button
                                            onClick={() => rejectComment(comment._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded w-full"
                                        >
                                            Reject
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => acceptComment(comment._id)}
                                            className="bg-green-500 text-white px-3 py-1 rounded w-full"
                                        >
                                            Approve
                                        </button>
                                    )}
                                </td>
                                <td className="p-2">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded w-full">Reply</button>
                                </td>
                                <td className="p-2">
                                    <button className="bg-red-900 text-white px-3 py-1 rounded w-full">Ban</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
