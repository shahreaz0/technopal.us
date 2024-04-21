import { stripe } from "@/configs/stripe";
import { clerkClient } from "@clerk/nextjs";
import { NextResponse, NextRequest } from "next/server";

import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") as string;
  const webhookSecret = process.env.STRIPE_WH_SK;

  let event: Stripe.Event;

  if (!sig || !webhookSecret)
    return new Response("Webhook secret not found.", { status: 400 });
  event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    console.log({ event: event.type });

    switch (event.type) {
      case "checkout.session.completed":
        const payment = event.data.object;

        console.log({ payment_mode: payment });

        if (payment.mode === "payment") {
          console.log({
            userId: payment.metadata!.userId,
            customerId: payment.customer,
            status: "ACTIVE",
          });

          await clerkClient.users.updateUserMetadata(payment.metadata!.userId, {
            publicMetadata: {
              stripeCustomerId: payment.customer || "",
              status: "ACTIVE",
            },
          });
        }

        break;

      case "payment_intent.succeeded":
        const s = event.data.object;

        console.log({ payment_mode: s.customer });
        break;

      default:
        break;
    }

    return NextResponse.json({ status: "sucess", event: body });
  } catch (error) {
    console.log(error);

    return NextResponse.json({ status: "Failed", error });
  }
}
