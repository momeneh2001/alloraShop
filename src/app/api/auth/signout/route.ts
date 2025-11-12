import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
  try {
    cookies().delete("token");
    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
  } catch (err) {
    console.error("Logout failed:", err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
