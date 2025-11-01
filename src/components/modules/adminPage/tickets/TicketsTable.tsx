"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ITicket } from "../../../../../models/Ticket";

interface TicketsTableProps {
  tickets: ITicket[];
}

const TicketsTable: React.FC<TicketsTableProps> = ({ tickets }) => {
  const router = useRouter();

  const showTicketMessage = (message: string) => {
    (swal as any)({
      title: "Ticket Message",
      text: message,
      button: "Close",
    });
  }
  const ReplyToTicket = async (ticket: ITicket) => {
    (swal as any)({
      title: "Type your answer",
      content: "input",
      button: "Send",
    }).then(async (answer: String | null) => {
      if (!answer || answer.trim() === "") {
        swal("Error", "Answer cannot be empty", "error");
        return;
      }
      const answerReq = {
        message: answer.trim(),
        ticketID: ticket._id,
      };
      try {
        const res = await fetch("/api/tickets/answer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(answerReq),
        });

        const data = await res.json();

        if (!res.ok) {
          swal("Error", data.message || "Something went wrong", "error");
          return;
        }

        swal("Success", "Your answer was sent successfully!", "success");
        router.refresh();
      } catch (err) {
        console.error(err);
        swal("Error", "Server error, please try again later", "error");
      }

    })
  }

  return (
    <div className="px-6 py-10">
      <h2 className="relative text-2xl font-medium text-left mt-8 uppercase">
        <span className="absolute top-1/2 left-0 right-0 border-b border-gray-800 shadow-[0_1px_0_0_#711d1c] z-0 w-[95%] mx-auto"></span>
        <span className="bg-white pl-6 relative z-10">Tickets List</span>
      </h2>

      <div className="flex items-center gap-6 mt-3 pl-6 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-200 border border-blue-400 rounded"></span>
          <span>Admin replies</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-200 border border-green-400 rounded"></span>
          <span>Answered tickets</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-white border border-gray-400 rounded"></span>
          <span>Regular tickets</span>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Message</th>
              <th className="py-2 px-4">Delete</th>
              <th className="py-2 px-4">Reply</th>
              <th className="py-2 px-4">Ban</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => {
              const rowColor = ticket.isAnswer
                ? "bg-blue-100 hover:bg-blue-200"
                : ticket.hasAnswer
                  ? "bg-green-100 hover:bg-green-200"
                  : "bg-white hover:bg-gray-100";
              return (
                <tr
                  key={String(ticket._id)}
                  className={`transition ${rowColor}`}
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{ticket.name}</td>
                  <td
                    className={`py-2 px-4 font-medium ${ticket.user ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {ticket.user ? "YES" : "NO"}
                  </td>
                  <td className="py-2 px-4">{ticket.phone}</td>
                  <td className="py-2 px-4">{ticket.email}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => showTicketMessage(ticket.message)}
                      className="bg-black text-white text-sm px-3 py-1 rounded w-full hover:bg-gray-800 transition"
                    >
                      View
                    </button>
                  </td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-black text-white text-sm px-3 py-1 rounded w-full hover:bg-gray-800 transition"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => ReplyToTicket(ticket)}
                      disabled={!ticket.user}
                      className={`text-white text-sm px-3 py-1 rounded w-full transition 
            ${ticket.user
                          ? "bg-red-600 hover:bg-red-500 cursor-pointer"
                          : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                      Reply
                    </button>
                  </td>
                  <td className="py-2 px-4">
                    <button className="bg-red-600 text-white text-sm px-3 py-1 rounded w-full hover:bg-red-500 transition">
                      Ban
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsTable;
