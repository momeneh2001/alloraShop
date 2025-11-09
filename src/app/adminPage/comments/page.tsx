import React from "react";
import CommentTable from "@/components/modules/adminPage/comment/CommentTable";
import connectToDB from "../../../../configs/db";
import CommentModel from "../../../../models/Comment";
import "../../../../models/Product";

const page = async () => {
    connectToDB();
    const comments = await CommentModel.find({})
        .sort({ _id: -1 })
        .populate("product")
        .lean();

    return (

        <main>
            {comments.length === 0 ? (
                <p className="bg-red-600 text-white text-3xl font-bold text-center mt-12 py-4 rounded-lg shadow-lg">
                NO Comment
              </p>
            ) : (
                <CommentTable
                    comments={JSON.parse(JSON.stringify(comments))}
                />
            )}
        </main>

    );
};

export default page;
