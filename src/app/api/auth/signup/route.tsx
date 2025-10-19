import connectToDB from "../../../../../configs/db";
import { NextRequest, NextResponse } from "next/server";
import UserModel from '../../../../../models/User'
import { validateUserData } from "@/utiles/validations/userValidation.server"
import { generateAccessToken, hashPassword } from "@/utiles/auth";

export async function POST(req: NextRequest) {

  await connectToDB();
  const body = await req.json();
  const { name, phone, email, password } = body

  const isUserExist = await UserModel.findOne({
    $or: [{ name, email, phone }]
  })

  if (isUserExist) {
    return Response.json({ message: "username or email or phone exist already!!" }, { status: 422 })
  }
  // validation


  const hashedPassword = await hashPassword(password);
  const accessToken = generateAccessToken(email);

  const users = await UserModel.find({});

  await UserModel.create({
    name,
    phone,
    email,
    password: hashPassword,
    role: users.length > 0 ? "USER" : "ADMIN",
  })

  return Response.json({ message: "User signed up successfully" }, { status: 201, headers: { "set-cookie": `token=${accessToken};path=/;httpOnly=true` } })
}