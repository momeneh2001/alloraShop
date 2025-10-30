import React from "react";
import Table from "../../../components/modules/adminPage/table/Table";
import connectToDB from "../../../../configs/db";
import UserModel from "../../../../models/User";

interface User {
  _id: string;
  name: string;
  email?: string;
  role: string;
}

const Page = async () => {
  await connectToDB();

  const usersFromDB = await UserModel.find({}).lean();
  const users: User[] = usersFromDB.map(user => ({
    _id: user._id.toString(),
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
  }));

  return (
    <main className="p-6">
      {users.length === 0 ? (
        <p className="bg-[#711d1c] text-white text-center text-xl px-8 py-3 rounded-md w-max mx-auto mt-60">
          No users found
        </p>
      ) : (
        <Table users={users} />
      )}
    </main>
  );
};

export default Page;
