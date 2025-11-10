"use client";
import React from "react";
import { IDiscount } from "../../../../../models/Discount";

interface DiscountTableProps {
  discounts: IDiscount[];
}


const DiscountTable: React.FC<DiscountTableProps> = ({ discounts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-center shadow-md rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm">
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Code</th>
            <th className="py-3 px-4">Percent</th>
            <th className="py-3 px-4">Max Usage</th>
            <th className="py-3 px-4">Used</th>
            <th className="py-3 px-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {discounts.map((discount, index) => {
            const isFull = discount.uses >= discount.maxUse;
            const rowColor = isFull
              ? "bg-red-50 hover:bg-red-100"
              : "bg-green-50 hover:bg-green-100";

            return (
              <tr
                key={String(discount._id)}
                className={`transition ${rowColor} border-b border-gray-200`}
              >
                <td className="py-2 px-4 font-semibold text-gray-700">
                  {index + 1}
                </td>
                <td className="py-2 px-4">{discount.code}</td>
                <td className="py-2 px-4">{discount.percent}%</td>
                <td className="py-2 px-4">{discount.maxUse}</td>
                <td className="py-2 px-4">{discount.uses}</td>
                <td className="py-2 px-4">
                  <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-500 transition">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DiscountTable;