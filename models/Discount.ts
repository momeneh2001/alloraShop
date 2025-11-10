import mongoose, { Schema, Document, models, model } from "mongoose";

export interface IDiscount extends Document {
  code: string;
  percent: number;
  maxUse: number;
  uses: number;
  createdAt: Date;
  updatedAt: Date;
  // user?: mongoose.Types.ObjectId;
}

const DiscountSchema = new Schema<IDiscount>(
  {
    code: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    percent: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    maxUse: {
      type: Number,
      required: true,
      min: 1,
    },
    uses: {
      type: Number,
      default: 0,
      min: 0,
    },
    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Discount =
  models.Discount || model<IDiscount>("Discount", DiscountSchema);

export default Discount;
