import { NextResponse } from "next/server";
import connectToDB from "../../../../configs/db";
import ProductModel from "../../../../models/Product";


export async function POST(req: Request) {
  try {
    await connectToDB();

    const body = await req.json();
    const {
      name,
      price,
      description,
      score,
      category,
      stock,
      discount,
      variants,
    } = body;

    const product = await ProductModel.create({
      name,
      price,
      description,
      score,
      category,
      stock,
      discount,
      variants,
    });

    return NextResponse.json(
      { message: "Product created successfully", data: product },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Error creating product:", err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    await connectToDB();

    const products = await ProductModel.find({}, "-__v").populate("comments");

    return NextResponse.json(products, { status: 200 });
  } catch (err: any) {
    console.error("Error fetching products:", err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
