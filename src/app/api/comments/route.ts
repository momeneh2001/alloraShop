import { NextResponse } from "next/server";
import connectToDB from "../../../../configs/db";
import CommentModel from "../../../../models/Comment";
import ProductModel from "../../../../models/Product";

interface CommentRequestBody {
  username: string;
  email: string;
  body: string;
  score: number;
  productID: string;
}

export async function POST(req: Request) {
  try {
    await connectToDB();

    const { username, email, body, score, productID } =
      (await req.json()) as CommentRequestBody;

    // Validation
    if (!username || !email || !body || !score || !productID) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (score < 1 || score > 5) {
      return NextResponse.json(
        { message: "Score must be between 1 and 5" },
        { status: 400 }
      );
    }

    // Create Comment
    const comment = await CommentModel.create({
      username,
      email,
      body,
      score,
      product: productID,
    });

    // Push comment into Product
    await ProductModel.findByIdAndUpdate(productID, {
      $push: { comments: comment._id },
    });

    // Update product average score
    const product = await ProductModel.findById(productID).populate("comments");
    if (product) {
      const allScores = product.comments.map((c: any) => c.score);
      const avgScore =
        allScores.reduce((acc: number, curr: number) => acc + curr, 0) /
        allScores.length;

      product.score = parseFloat(avgScore.toFixed(2)); 
      await product.save();
    }

    return NextResponse.json(
      { message: "Comment created successfully", data: comment },
      { status: 201 }
    );
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();

    const comments = await CommentModel.find({ isAccept: true }).select("-__v");

    return NextResponse.json(comments, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
