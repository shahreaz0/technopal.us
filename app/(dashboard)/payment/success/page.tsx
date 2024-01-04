import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <section className="h-screen flex justify-center items-center">
      <section className="flex flex-col items-center ">
        <Image src="/tick.gif" alt="tick" height={200} width={200} />

        <h1 className="text-4xl">Payment Successful</h1>

        <Link href="/" className={cn(buttonVariants(), "rounded-full mt-6")}>
          Go to Homepage
        </Link>
      </section>
    </section>
  );
}
