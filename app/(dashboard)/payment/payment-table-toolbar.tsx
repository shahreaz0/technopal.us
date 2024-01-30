"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/core/data-table/data-table-view-options";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function UserTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const { signOut } = useClerk();

  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter by email..."
          value={(table.getColumn("receipt_email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("receipt_email")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <section className="flex gap-2" onClick={() => signOut(() => router.push("/"))}>
        <Button size="sm">Logout</Button>
        <DataTableViewOptions table={table} />
      </section>
    </div>
  );
}
