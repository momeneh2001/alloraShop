import { NextResponse } from "next/server";
import connectToDB from "../../../../configs/db";
import DiscountModel from "../../../../models/Discount";

export async function POST(req: Request) {
  try {
    await connectToDB();

    const { code, percent, maxUse} = await req.json();

    // Validation
    if (!code || percent == null || !maxUse) {
      return NextResponse.json(
        { message: "code, percent, and maxUse are required" },
        { status: 400 }
      );
    }

    if (percent < 0 || percent > 100) {
      return NextResponse.json(
        { message: "Percent must be between 0 and 100" },
        { status: 400 }
      );
    }

    // Check if code already exists
    const existing = await DiscountModel.findOne({ code });
    if (existing) {
      return NextResponse.json(
        { message: "This discount code already exists" },
        { status: 400 }
      );
    }

    // Create new discount
    const discount = await DiscountModel.create({
      code,
      percent,
      maxUse, 
    });

    return NextResponse.json(
      { message: "Discount code created successfully", data: discount },
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
