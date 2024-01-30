"use client";

import { useDataTable } from "@/components/core/data-table/use-data-table";

import Stripe from "stripe";

import { columns } from "./columns";
import { UserTableToolbar } from "./payment-table-toolbar";

type Props = {
  data: Stripe.PaymentIntent[];
};

export function PaymentTable(props: Props) {
  const { render, table } = useDataTable({
    data: props.data,
    columns: columns,
  });

  return (
    <section className="space-y-4 m-8">
      <UserTableToolbar table={table} />
      {render}
    </section>
  );
}
