"use client";
import React, { useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

const AddDiscount = () => {
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState<number | string>("");
  const [maxUse, setMaxUse] = useState<number | string>("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const addDiscount = async () => {
    if (!code || !percent || !maxUse) {
      swal("Warning", "Please fill in all fields.", "warning");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/discounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          percent: Number(percent),
          maxUse: Number(maxUse),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        swal("Success", "Discount code created successfully!", "success");
        setCode("");
        setPercent("");
        setMaxUse("");
        router.refresh(); 
      } else {
        swal("Error", data.message || "Something went wrong", "error");
      }
    } catch (err) {
      console.error(err);
      swal("Error", "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto my-6">
      <p className="text-lg font-semibold mb-4">Add New Discount Code</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        
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

       
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Discount Percent</label>
          <input
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            placeholder="Enter discount percent"
            type="number"
            min={0}
            max={100}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

  
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Max Usage</label>
          <input
            value={maxUse}
            onChange={(e) => setMaxUse(e.target.value)}
            placeholder="Maximum usage for this code"
            type="number"
            min={1}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <button
        onClick={addDiscount}
        disabled={loading}
        className={`${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500"
        } text-white px-6 py-2 rounded transition`}
      >
        {loading ? "Adding..." : "Add Discount"}
      </button>
    </section>
  );
};

export default AddDiscount;
