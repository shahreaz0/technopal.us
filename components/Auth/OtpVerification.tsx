"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { useSignUp, isClerkAPIResponseError } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const OtpVerfication = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState("");

  const router = useRouter();

  async function handleVerify() {
    console.log(code);

    if (!isLoaded) {
      return null;
    }

    setIsLoading(true);

    try {
      // Submit the code that the user provides to attempt verification
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        // The status can also be `abandoned` or `missing_requirements`
        // Please see https://clerk.com/docs/references/react/use-sign-up#result-status for  more information
        console.log(JSON.stringify(completeSignUp, null, 2));
      }

      // Check the status to see if it is complete
      // If complete, the user has been created -- set the session active
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });

        toast.success("Email verification successful", {
          description: "You account has been successfully created.",
        });

        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      }
    } catch (error) {
      setIsLoading(false);

      if (isClerkAPIResponseError(error)) {
        error.errors.map((e) => {
          toast.error("Failed", {
            description: e.longMessage,
          });
        });
      }
    }
  }

  return (
    <section>
      <div className="mx-auto max-w-c-1016 relative z-1 pt-10 lg:pt-15 xl:pt-20 pb-7.5 px-7.5 lg:px-15 xl:px-20">
        <div className="absolute -z-1 left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#F8F9FF] to-[#dee7ff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
        <div className="absolute -z-1 bottom-17.5 left-0 w-full h-1/3">
          <Image
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            fill
          />
          <Image
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
            fill
          />
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark pt-7.5 xl:pt-15 px-7.5 xl:px-15"
        >
          <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-15 text-center">
            Verify your Email
          </h2>

          <div className="flex flex-col gap-4  items-center justify-center pb-10">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              name="code"
              type="code"
              placeholder="Code"
              className="bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
            />

            <button
              disabled={isLoading}
              onClick={handleVerify}
              type="button"
              aria-label="signup with email and password"
              className="bg-black flex items-center justify-center gap-2 dark:bg-btndark hover:bg-blackho ease-in-out duration-300 font-medium text-white rounded-full px-6 py-3"
            >
              Verify Email {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OtpVerfication;
