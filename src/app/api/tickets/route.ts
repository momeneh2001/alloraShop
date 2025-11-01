import connectToDB from "../../../../configs/db";
import { authUser } from "@/utiles/authUser";
import Ticket from "../../../../models/Ticket";

export async function POST(req: Request) {
  try {
    await connectToDB();

    let user = null;
    try {
      user = await authUser();
    } catch (err) {
      user = null;
    }

    const body = await req.json();
    const { name, message, phone, email } = body;


    if (!name || !message || !phone || !email) {
      return Response.json({ message: "All fields are required." }, { status: 400 });
    }

    await Ticket.create({
      name,
      message,
      phone,
      email,
      user: user ? user._id : null, 
    });

    return Response.json({ message: "Ticket saved successfully." }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return Response.json({ message: err.message || "Server error" }, { status: 500 });
  }
}
