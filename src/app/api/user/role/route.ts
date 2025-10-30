import { NextResponse } from "next/server";
import connectToDB from "../../../../../configs/db";
import UserModel from "../../../../../models/User";

interface RequestBody {
  id: string;
}

export async function PUT(req: Request) {
  try {
    await connectToDB();

    const body: RequestBody = await req.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const user = await UserModel.findById(id).lean();

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const newRole = user.role === "USER" ? "ADMIN" : "USER";

    await UserModel.findByIdAndUpdate(id, { $set: { role: newRole } });

    return NextResponse.json({
      message: `User role updated to ${newRole}`,
      newRole,
    });
  } catch (err: any) {
    console.error("Error updating user role:", err);
    return NextResponse.json(
      { message: "Internal Server Error", error: err.message },
      { status: 500 }
    );
  }
}
