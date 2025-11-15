import connectToDB from "../../../../configs/db";
import WishlistModel from "../../../../models/Wishlisr";
import { NextRequest, NextResponse } from "next/server";

interface WishlistBody {
  user: string;
  product: string;
}

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body: WishlistBody = await req.json();
    const { user, product } = body;


    if (!user || !product) {
      return NextResponse.json(
        { message: "User and product are required" },
        { status: 400 }
      );
    }

    const wish = await WishlistModel.findOne({ user, product });

    if (!wish) {
      await WishlistModel.create({ user, product });
    }

    return NextResponse.json(
      { message: "Product added to wishlist successfully :))" },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Internal Server Error" }, { status: 500 });
  }
}
