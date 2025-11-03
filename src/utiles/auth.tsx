import { hash, compare } from "bcryptjs"
import { promises } from "dns";
import { sign, verify } from "jsonwebtoken"

interface JwtPayload {
    [key: string]: any;
}

const hashPassword = async (password: string): Promise<string> => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
};

const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const isValid = await compare(password, hashedPassword);
    return isValid;
};

const generateAccessToken = (data: object): string => {
    if (!process.env.AccessTokenSecretKey) {
        throw new Error("ACCESS_TOKEN_SECRET is not defined in .env");
    }
    const token = sign({ ...data }, process.env.AccessTokenSecretKey, { expiresIn: "15d" });
    return token
};


const verifyAccessToken = (token: string): JwtPayload | false => {
    if (!process.env.AccessTokenSecretKey) {
        throw new Error("ACCESS_TOKEN_SECRET is not defined in .env");
    }
    try {
        const tokenPayLoad = verify(token, process.env.AccessTokenSecretKey) as JwtPayload;
        return tokenPayLoad
    } catch (err) {
        console.log("Verify Access Token Error:", err);
        return false;
    }
};
const generateRefreshToken = (data: object): string => {
    if (!process.env.RefreshTokenSecretKey) {
        throw new Error("REFRESH_TOKEN_SECRET is not defined in .env");
    }
    const token = sign({ ...data }, process.env.RefreshTokenSecretKey, { expiresIn: "15d" });
    return token
};


export { hashPassword, verifyPassword, generateAccessToken, verifyAccessToken, generateRefreshToken }