import { Metadata } from "next";

import { UserTable } from "./user-table";

export const metadata: Metadata = {
  title: "Users",
  description: "Manage all users",
};

export default async function UsersPage() {
  return (
    <>
      <div className="relative   flex-1 flex-col space-y-8 md:flex">
  


        <UserTable />
      </div>
    </>
  );
}
