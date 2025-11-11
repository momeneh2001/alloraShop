import connectToDB from "../../../../../configs/db";
import DiscountModel, { IDiscount } from "../../../../../models/Discount"; 
import { NextRequest, NextResponse } from "next/server";


interface DiscountRequestBody {
  code: string;
}

export async function PUT(req: NextRequest) {
  try {
    await connectToDB();

    const body: DiscountRequestBody = await req.json();
    const { code } = body;

    if (!code || typeof code !== "string" || !/^[a-zA-Z0-9]{3,20}$/.test(code)) {
      return NextResponse.json(
        { message: "Invalid discount code format. Only letters and numbers (3-20 characters) are allowed." },
        { status: 400 }
      );
    }

    const discount: IDiscount | null = await DiscountModel.findOne({ code });

    if (!discount) {
      return NextResponse.json({ message: "Code not found !!" }, { status: 404 });
    } else if (discount.uses >= discount.maxUse) {
      return NextResponse.json({ message: "Code usage limit reached" }, { status: 422 });
    }

    discount.uses += 1;
    await discount.save();

    return NextResponse.json(discount);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
