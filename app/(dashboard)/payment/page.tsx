import { Metadata } from "next";

import { PaymentTable } from "./payment-table";
import { stripe } from "@/configs/stripe";

export const metadata: Metadata = {
  title: "Payment",
  description: "Manage all payments",
};

export default async function UsersPage() {
  const { data } = await stripe.paymentIntents.list({
    expand: ["data.customer", "data.invoice.subscription"],
  });

  return (
    <div className="relative flex-1 flex-col space-y-8 md:flex">
      <PaymentTable data={data} />
    </div>
  );
}
