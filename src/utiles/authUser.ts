import { cookies } from "next/headers";
import UserModel from "../../models/User";
import connectToDB from "../../configs/db";
import { verifyAccessToken } from "./auth";

const authUser = async () => {
  connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayLoad = verifyAccessToken(token.value);
    if (tokenPayLoad) {
      user = await UserModel.findOne({ email: tokenPayLoad.email });
    }
  }

  return user;
};

const authAdmin = async () => {
    connectToDB();
    const token = cookies().get("token");
  
    if (!token) return null;
  
    const tokenPayload = verifyAccessToken(token.value);
  
    if (!tokenPayload || typeof tokenPayload === "boolean" || !tokenPayload.email) {
      return null;
    }
  
    const user = await UserModel.findOne({ email: tokenPayload.email });
    return user?.role === "ADMIN" ? user : null;
  };

export { authUser , authAdmin};
