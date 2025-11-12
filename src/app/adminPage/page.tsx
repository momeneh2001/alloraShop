import React from "react";
import connectToDB from "../../../configs/db";
import Box from "../../components/modules/adminPage/infoBox/InfoBox";
import SalesChart from "@/components/modules/adminPage/charts/SalesChart";

// import TicketModel from "@/models/Ticket";
// import CommentModel from "@/models/Comment";
// import UserModel from "@/models/User";
// import ProductModel from "@/models/Product";

async function AdminHomePage() {
  // connectToDB();
  //   const tickets = await TicketModel.find({}).lean();
  //   const users = await UserModel.find({}).lean();
  //   const products = await ProductModel.find({}).lean();

  return (

    <main>
      <section className="flex gap-5 mt-12 px-11 flex-wrap">
        <Box title="tikets" value={0} />
        <Box title="products" value={0} />
        <Box title="Orders" value={0} />
        <Box title="Users" value={1} />
      </section>{" "}
      <div className="flex flex-col md:flex-row gap-4 mt-8 py-8">
        {/* Sales Stats */}
        <section className="flex-1 bg-slate-300 p-2 rounded-lg shadow-sm">
          <p className="text-lg font-semibold mb-3">Sales Statistics</p>
          <p className="text-sm text-gray-700">
            Monthly sales summary and performance overview.
          </p>

          <SalesChart />
        </section>
        {/* Growth Rate */}
        <section className="flex-1 bg-slate-100 p-2 rounded-lg shadow-sm">
          <p className="text-lg font-semibold mb-3">Growth Rate</p>
          <p className="text-sm text-gray-700">
            Comparison of this month’s growth versus last month.
          </p>
          <SalesChart />
        </section>
      </div>

    </main>

  );
}

export default AdminHomePage;
