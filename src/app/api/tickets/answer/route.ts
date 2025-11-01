import { authUser } from "@/utiles/authUser";
import connectToDB from "../../../../../configs/db";
import TicketModel from "../../../../../models/Ticket";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    const { message, ticketID } = body;

    if (!message) {
      return new Response(
        JSON.stringify({ message: "Message field is required" }),
        { status: 400 }
      );
    }

    const admin = await authUser();

    if (!message) {
      return new Response(
        JSON.stringify({ message: "Message field is required" }),
        {
          status: 400, // Bad Request
        }
      );
    }
    if (!admin || admin.role !== "ADMIN") {
      return new Response(JSON.stringify({ message: "Not authorized" }), {
        status: 403,
      });
    }

    const updatedTicket = await TicketModel.findByIdAndUpdate(
      ticketID,
      { $set: { hasAnswer: true } },
      { new: true }
    );

    if (!updatedTicket) {
      return new Response(JSON.stringify({ message: "Ticket not found" }), {
        status: 404,
      });
    }

    const { name, phone, email, _id } = admin;

    await TicketModel.create({
      name,
      message,
      phone,
      email,
      user: _id,
      hasAnswer: false,
      isAnswer: true,
      mainTicket: ticketID,
    });

    return Response.json(
      { message: "Answer saved successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
