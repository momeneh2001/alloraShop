import mongoose, { Schema, Document, models, model } from "mongoose";
require("./Product");

export interface IComment extends Document {
  username: string;
  body: string;
  email: string;
  score: number;
  isAccept:boolean;
  date: Date;
  product: mongoose.Types.ObjectId;
}

const CommentSchema = new Schema<IComment>({
  username: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  isAccept: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const Comment = models.Comment || model<IComment>("Comment", CommentSchema);
export default Comment;