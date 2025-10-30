import { NextResponse } from "next/server";
import connectToDB from "../../../../../configs/db";
import BanModel from "../../../../../models/Ban";

interface RequestBody {
  email: string;
  phone: string;
}

export async function POST(req: Request) {
  try {
    await connectToDB();

    const body: RequestBody = await req.json();
    const { email, phone } = body;

    // Validation 
    if (!email || !phone) {
      return NextResponse.json(
        { message: "Email and phone are required" },
        { status: 400 }
      );
    }

    await BanModel.create({ email, phone });

    return NextResponse.json({ message: "User banned successfully" }, { status: 200 });
  } catch (err: any) {
    console.error("Error banning user:", err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
