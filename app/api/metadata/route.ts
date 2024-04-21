import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";

export async function POST(req: Request) {
  const { data, userId } = await req.json();

  await clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: {
      data,
    },
  });

  return NextResponse.json({ success: true });
}
