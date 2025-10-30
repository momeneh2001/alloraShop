import { Schema, model, models, Document } from "mongoose";


export interface IBan extends Document {
  phone: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}


const BanSchema = new Schema<IBan>(
  {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Ban = models.Ban || model<IBan>("Ban", BanSchema);

export default Ban;
