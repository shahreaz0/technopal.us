"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const points = [
  {
    id: "01",
    title: "Cost-effective",
    description: "We provide affordable, high-value services.",
  },
  {
    id: "02",
    title: "Customer engagement.",
    description: "Unlock customer loyalty through meaningful engagement strategies.",
  },
  {
    id: "03",
    title: "Higher conversion",
    description: "Boost your conversion rates effortlessly with our tailored solutions.",
  },
  {
    id: "04",
    title: "Global reach",
    description: "Expand your horizons with our global reach solutions.",
  },
  {
    id: "05",
    title: "Brand awareness",
    description: "Elevate your brand with meaningful engagement.",
  },
];

const AboutUs = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden ">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 ">
          <div className="flex gap-8 lg:gap-24 items-center">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/american-flag.jpg"
                alt="About"
                className="dark:hidden rounded-xl"
                fill
              />
              <Image
                src="/american-flag.jpg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <section className="space-y-8">
                {points.map((point) => (
                  <div className="flex gap-5">
                    <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                      <p className="text-black dark:text-white font-semibold text-metatitle2">
                        {point.id}
                      </p>
                    </div>
                    <div className="w-3/4">
                      <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                        {point.title}
                      </h5>
                      <p>{point.description}</p>
                    </div>
                  </div>
                ))}
              </section>

              {/* <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Fully Customizable
                  </h5>
                  <p>consectetur adipiscing elit fermentum ultricies.</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
