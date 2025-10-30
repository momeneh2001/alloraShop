import { cookies } from "next/headers";
import UserModel from "../../models/User"
import connectToDB from "../../configs/db";
import { verifyAccessToken } from "./auth";

const authUser =async()=>{
    connectToDB()
    const token=cookies().get("token");
    let user =null;
    
    if(token){
        const tokenPayLoad = verifyAccessToken(token.value)
        if(tokenPayLoad){
            user =await UserModel.findOne({email:tokenPayLoad.email})
        }
    }

    return user
}

export {authUser};