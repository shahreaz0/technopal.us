"use server";

import { stripe } from "@/configs/stripe";

console.log(process.env.NODE_ENV);

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://ctrd-admin.vercel.app";

export async function getPrice(priceId: string) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${BASE_URL}/payment/success`,
    cancel_url: `${BASE_URL}`,
    invoice_creation: {
      enabled: true,
    },
    customer_creation: "always",
    phone_number_collection: {
      enabled: true,
    },
    billing_address_collection: "required",
  });

  return session.url;
}
