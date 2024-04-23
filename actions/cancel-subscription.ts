"use server";

import { clerkClient } from "@clerk/nextjs";

export async function sendCancelSubscriptionRequest(prevState: any, formData: FormData) {
  const userId = formData.get("userId");

  try {
    await clerkClient.users.updateUserMetadata(userId as string, {
      publicMetadata: {
        subscriptionCancelRequest: true,
      },
    });

    return {
      data: "We will review your request shortly.",
      error: null,
    };
  } catch (error) {
    return {
      error: error.message,
      data: null,
    };
  }
}
