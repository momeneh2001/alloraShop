import connectToDB from "../../../../configs/db";
import UserModel, { IUser } from "../../../../models/User";
import { authUser } from "@/utiles/authUser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {

    await connectToDB();

    
    const user: IUser | null = await authUser();
    if (!user) {
      return NextResponse.json(
        { message: "Unauthorized: user not found" },
        { status: 401 }
      );
    }

   
    const body = await req.json();
    const { name, email, phone } = body as {
      name: string;
      email: string;
      phone: string;
    };

    
    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

 
    await UserModel.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          name,
          email,
          phone,
        },
      }
    );

    return NextResponse.json(
      { message: "User updated successfully :))" },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json(
      { message: (err as Error).message || "Internal server error" },
      { status: 500 }
    );
  }
}
