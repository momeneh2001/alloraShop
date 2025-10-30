import { Schema, model, models, Document } from "mongoose";
require("./User");

export interface ITicket extends Document {
  name: string;
  message: string;
  phone: string;
  email: string;
  user?: string;
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
  },
  { timestamps: true }
);

// ✅ جلوگیری از OverwriteModelError
const Ticket = models.Ticket || model<ITicket>("Ticket", TicketSchema);

export default Ticket;
