"use client";

import { useAuth } from "@clerk/nextjs";
import { getPrice } from "./actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  priceId: string;
};

export default function GetPlanButton(props: Props) {
  const { userId } = useAuth();

  const router = useRouter();

  async function buttonHandler() {
    if (userId) {
      const url = await getPrice(props.priceId);
      window.location.href = url as string;
    } else {
      router.push("/login");

      toast.success("Please Login", {
        description: "For payment you have to login first",
      });
    }
  }

  return (
    <button
      onClick={buttonHandler}
      aria-label="purchase this plan"
      className="group-hover:text-white inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
    >
      <span className="hover:pr-2 duration-500">Get the Plan</span>
      <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
