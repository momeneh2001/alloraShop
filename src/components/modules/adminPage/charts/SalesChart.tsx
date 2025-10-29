"use client"; 
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip, 
} from "recharts";

function SalesChart() {
  const data = [
    { date: "404/01/01", sale: 1000000 },
    { date: "404/02/02", sale: 5000000 },
    { date: "404/03/03", sale: 2000000 },
    { date: "404/04/04", sale: 10000000 },
    { date: "404/05/05", sale: 4000000 },
    { date: "404/06/06", sale: 2500000 },
  ];

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sale" stroke="#000" fill="#a0a0a0" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
