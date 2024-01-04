"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

import { Checkbox } from "@/components/ui/checkbox";

import { DataTableColumnHeader } from "./table-column-header";

import Stripe from "stripe";
import { Download } from "lucide-react";

export const columns: ColumnDef<Stripe.PaymentIntent>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "receipt_email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
  },
  {
    accessorKey: "status",
    cell: ({ row }) => <p className="capitalize">{row.original.status}</p>,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
  },
  {
    accessorKey: "amount",
    cell: ({ row }) => <p>{row.original.amount / 100}</p>,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount (USD)" />
    ),
  },

  {
    accessorKey: "customer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Address" />
    ),
    cell: ({ row }) => {
      const customer = row.original.customer as Stripe.Customer;

      return (
        <section>
          <p>
            {customer?.address?.line1}
            {customer?.address?.line2 && `, ${customer?.address?.line2}`}
          </p>
          <p>
            {customer?.address?.city}
            {customer?.address?.postal_code && `, ${customer?.address?.postal_code}`}
          </p>
          <p>
            {customer?.address?.state}
            {customer?.address?.country && `, ${customer?.address?.country}`}
          </p>
        </section>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "created",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
    cell: (info) => <>{format(new Date(info.getValue() as string), "PPP")}</>,
    enableSorting: false,
  },

  {
    accessorKey: "invoice",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Invoice" />,
    cell: ({ row }) => {
      const invoice = row.original.invoice as Stripe.Invoice;

      return (
        <section>
          <Download
            className="h-4 w-4 cursor-pointer"
            onClick={() => {
              window.location.href = invoice.invoice_pdf || "";
            }}
          />
        </section>
      );
    },
    enableSorting: false,
  },

  // {
  //   id: "actions",
  //   cell: DataTableRowActions,
  // },
];
