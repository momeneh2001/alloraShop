import { validateEmail, validatePassword } from "@/utiles/validations/userValidation.server";
import UserModel from '../../../../../models/User'
import { NextRequest, NextResponse } from "next/server";
import { generateAccessToken, generateRefreshToken, verifyPassword } from "@/utiles/auth";
import connectToDB from "../../../../../configs/db";

export async function POST(req: NextRequest) {

    try {
        await connectToDB();
        const body = await req.json()
        const { email, password } = body

        // validation
        const emailError = validateEmail(email)
        const passwordError = validatePassword(password);

        if (emailError || passwordError) {
            return NextResponse.json({ message: "emailError or passwordError" }, { status: 400 });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "User Not found" }, { status: 404 });
        }

        const isCorrectPasswordHash = await verifyPassword(password, user.password)
        if (!isCorrectPasswordHash) {
            return NextResponse.json({ message: "Invalid password" }, { status: 401 });
        }
        const accessToken = generateAccessToken({ email })
        const refreshToken = generateRefreshToken({ email })
        await UserModel.findOneAndUpdate({email},{
            $set:{
                refreshToken
            }
        })

        return NextResponse.json({ message: "User logged in successfully" }, {
            status: 200,
            headers: {
                "Set-cookie": `token=${accessToken};path=/;httpOnly=true;`
            }
        })
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}