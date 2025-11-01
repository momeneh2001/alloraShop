import React from "react";
import TicketsTable from "@/components/modules/adminPage/tickets/TicketsTable";
import connectToDB from "../../../../configs/db";
import TicketModel from "../../../../models/Ticket";

const page = async () => {
    connectToDB();
    const tickets = await TicketModel.find({}).sort({ _id: -1 }).lean()

    return (
        <main>
            {tickets.length === 0 ? (
                <p className="bg-red-600 text-white text-3xl font-bold text-center mt-12 py-4 rounded-lg shadow-lg">
                    NO Ticket
                </p>
            ) : (
                <TicketsTable
                    tickets={JSON.parse(JSON.stringify(tickets))}
                />
            )}
        </main>
    );
};

export default page;
