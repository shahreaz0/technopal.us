"use server";

import { stripe } from "@/configs/stripe";
import { clerkClient } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs";
import Stripe from "stripe";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://technopal-us.vercel.app";

export async function getPrice(priceId: string) {
  const { userId } = await auth();

  if (!userId) return new Error("");

  const { emailAddresses, publicMetadata, firstName, lastName } =
    await clerkClient.users.getUser(userId);

  let customer: Stripe.Response<Stripe.Customer> | null = null;

  if (!publicMetadata.stripeCustomerId) {
    customer = await stripe.customers.create({
      email: emailAddresses[0].emailAddress,
      metadata: {
        userId: userId,
      },
      name: `${firstName} ${lastName}`,
    });
  }

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
    customer: customer?.id || (publicMetadata.stripeCustomerId as string),
    invoice_creation: {
      enabled: true,
    },
    phone_number_collection: {
      enabled: true,
    },
    // billing_address_collection: "required",
    metadata: {
      userId,
    },
  });

  return session.url;
}
