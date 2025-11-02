import mongoose, { Schema, Document, models, model } from "mongoose";
import { IComment } from "./Comment";

export interface IVariant {
  color: {
    name: "black" | "white" | "blue" | "red" | "green" | "yellow";
    hex: string;
  };
  size: "XS" | "S" | "M" | "L" | "XL" | "XXL";
  stock: number;
  price?: number;
}

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  score: number;
  category: string;
  stock: number;
  images: string[];
  comments: IComment["_id"][];
  discount: number;
  variants?: IVariant[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 2,
      min: 0,
      max: 5,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    images: {
      type: [String],
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    variants: [
      {
        color: {
          name: {
            type: String,
            enum: ["black", "white", "blue", "red", "green", "yellow"],
            required: false,
          },
          hex: {
            type: String,
            required: false,
            match: [/^#([0-9A-F]{3}){1,2}$/i, "Invalid color code"],
          },
        },
        size: {
          type: String,
          enum: ["XS", "S", "M", "L", "XL", "XXL"],
          required: false,
        },
        stock: { type: Number, required: false, min: 0 },
        price: { type: Number, min: 0, required: false },
      },
    ],
  },
  { timestamps: true }
);

const Product = models.Product || model<IProduct>("Product", ProductSchema);
export default Product;