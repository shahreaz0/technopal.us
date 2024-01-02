"use client";

import { useDataTable } from "@/components/core/data-table/use-data-table";

import { columns } from "./columns";
import { UserTableToolbar } from "./user-table-toolbar";

const dataS = [];
export function UserTable() {
  const { render, table } = useDataTable({
    data: dataS,
    columns: columns,
  });

  return (
    <section className="space-y-4 m-8">
      <UserTableToolbar table={table} />
      {render}
    </section>
  );
}
