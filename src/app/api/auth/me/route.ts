import connectToDB from "../../../../../configs/db";
import { verifyAccessToken } from "@/utiles/auth";
import { cookies } from "next/headers";
import UserModel, { IUser } from "../../../../../models/User";
import { NextRequest, NextResponse } from "next/server";


type SafeUser = Omit<IUser, "password" | "refreshToken" | "__v">;

export async function GET(req: NextRequest) {
  await connectToDB();

  const tokenCookie = cookies().get("token");
  let user: SafeUser | null = null;

  if (tokenCookie) {
    const tokenPayload = verifyAccessToken(tokenCookie.value);
    if (tokenPayload) {
    
      user = (await UserModel.findOne(
        { email: tokenPayload.email },
        "-password -refreshToken -__v"
      ).lean()) as SafeUser | null;
    }

    return NextResponse.json(user);
  } else {
    return NextResponse.json(
      {
        data: null,
        message: "No access!!",
      },
      { status: 401 }
    );
  }
}
