import connectToDB from "../../../../../configs/db";
import { authUser } from "@/utiles/authUser";
import WishlistModel from "../../../../../models/Wishlisr";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Params }
) {
  try {
    await connectToDB();

    const user = await authUser();
    if (!user) {
      return NextResponse.json(
        { message: "Please login first !!" },
        { status: 401 }
      );
    }

    const productID = params.id;
    await WishlistModel.findOneAndDelete({
      user: user._id,
      product: productID,
    });

    return NextResponse.json({ message: "Product removed successfully :))" });
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
