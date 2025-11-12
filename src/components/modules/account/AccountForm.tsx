"use client";
import React, { useState } from "react";

interface UserProps {
  user: {
    name: string;
    email: string;
    phone?: string;
  };
}

const AccountForm: React.FC<UserProps> = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/account/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Update failed");

      alert("Account information updated successfully!");
    } catch (err) {
      alert("Error updating your account.");
    }
  };

  return (
    <main className="min-h-[900px] flex justify-center items-start py-12">
      <div className="bg-white shadow-md border border-gray-200 rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800 border-b pb-3">
          Account Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Full Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email Address
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Mobile Number
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password change */}
          <div className="border-t pt-6 mt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Change Password
            </h3>
            <div className="space-y-4">
              <input
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                type="password"
                placeholder="Current password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500"
              />
              <input
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                type="password"
                placeholder="New password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AccountForm;
