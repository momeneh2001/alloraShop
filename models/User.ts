import mongoose, { Schema, Document, Model } from "mongoose";


export interface IUser extends Document {
    name: string;
    email: string;
    phone: string;
    password: string;
    role: string;
    refreshToken?: string;
}

const UserSchema: Schema<IUser> = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "USER",
            required: true
        },
        refreshToken: {
            type: String,
        },
    },

);


const User: Model<IUser> =
    mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;