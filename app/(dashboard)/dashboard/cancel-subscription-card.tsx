"use client";

import { sendCancelSubscriptionRequest } from "@/actions/cancel-subscription";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "sonner";

function SendRequestButton() {
  const { pending } = useFormStatus();

  const { user } = useUser();

  const isDisabled = !user?.publicMetadata?.stripeCustomerId;

  return (
    <Button disabled={pending || isDisabled} type="submit">
      Send Request
    </Button>
  );
}

export function CancelSubscriptionCard() {
  const [state, formAction] = useFormState(sendCancelSubscriptionRequest, {
    error: null,
    success: null,
  });

  const { userId } = useAuth();

  useEffect(() => {
    if (state.data) {
      toast.success("Request Sent", {
        description: state.data,
      });
    }
  }, [state.data]);

  return (
    <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
      <CardHeader className="pb-3">
        <CardTitle>Cancel Subcription</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          You can send cancel subscription request. We will review your reasons. After
          that we take action.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <form action={formAction}>
          <input value={userId!} name="userId" className="hidden" />
          <SendRequestButton />
        </form>
      </CardFooter>
    </Card>
  );
}
