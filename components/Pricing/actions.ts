"use server";

import { stripe } from "@/configs/stripe";
import { clerkClient } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://technopal-us.vercel.app";

export async function getPrice(priceId: string) {
  const { userId } = await auth();

  let email = "";
  if (userId) {
    const { emailAddresses } = await clerkClient.users.getUser(userId);

    email = emailAddresses[0].emailAddress;
  }

  console.log({ userId });

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
    customer_email: email,
    phone_number_collection: {
      enabled: true,
    },
    billing_address_collection: "required",
  });

  return session.url;
}
