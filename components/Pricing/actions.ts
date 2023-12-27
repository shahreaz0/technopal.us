"use server";

import { stripe } from "@/configs/stripe";

export async function getPrice(priceId: string) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/payment/success",
    cancel_url: "http://localhost:3000",
  });

  return session.url;
}
