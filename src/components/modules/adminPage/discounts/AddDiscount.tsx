"use client";
import React, { useState } from "react";

function AddDiscount() {
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [percent, setPercent] = useState("");
  const [maxUse, setMaxUse] = useState("");

  const addDiscount = () => {
    console.log({ code, category, percent, maxUse });
    // API call or logic 
  };

  return (
    <section className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto my-6">
      <p className="text-lg font-semibold mb-4">Add New Discount Code</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Discount Code */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Discount Code</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter discount code"
            type="text"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Discount Percent */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Discount Percent</label>
          <input
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            placeholder="Enter discount percent"
            type="number"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Max Usage */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Max Usage</label>
          <input
            value={maxUse}
            onChange={(e) => setMaxUse(e.target.value)}
            placeholder="Maximum usage for this code"
            type="number"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a category</option>
            <option value="coffee">Coffee</option>
            <option value="tea">Tea</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
      </div>

      <button
        onClick={addDiscount}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
      >
        Add Discount
      </button>
    </section>
  );
}

export default AddDiscount;
