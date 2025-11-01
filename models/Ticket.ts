import { Schema, model, models, Document } from "mongoose";
require("./User");

export interface ITicket extends Document {
  name: string;
  message: string;
  phone: string;
  email: string;
  user?: string;
  hasAnswer?: boolean;
  isAnswer?: boolean;
  mainTicket?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const TicketSchema = new Schema<ITicket>(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: false },
    hasAnswer: {
      type: Boolean,
      default: false,
    },
    isAnswer: {
      type: Boolean,
      default: false,
    },
    mainTicket: {
      type: Schema.Types.ObjectId,
      ref: "Ticket",
      required: false,
    },
  },
  { timestamps: true }
);

const Ticket = models.Ticket || model<ITicket>("Ticket", TicketSchema);

export default Ticket;
