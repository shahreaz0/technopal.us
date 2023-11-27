"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0 rounded-lg">
        <div className=" bg-[url('/flag.gif')] bg-cover rounded-lg">
          <div className="backdrop-blur-sm bg-black/50 p-20 rounded-lg">
            <Image
              width={132}
              height={132}
              src="/images/shape/shape-05.png"
              alt="Doodle"
              className="absolute bottom-0 right-0 -z-1"
            />

            <Image
              fill
              src="/images/shape/shape-dotted-light-02.svg"
              alt="Dotted"
              className="absolute top-0 left-0 -z-1 dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark-02.svg"
              alt="Dotted"
              className="absolute top-0 left-0 -z-1 hidden dark:block"
            />

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
              className="animate_top mx-auto text-center md:w-4/5 lg:w-2/3 xl:w-1/2 mb-12.5 lg:mb-17.5 px-4 md:px-0"
            >
              <h2 className="font-bold text-white text-3xl xl:text-sectiontitle3 mb-4">
                Our Main Program
              </h2>
              <p className="lg:w-11/12 mx-auto text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
                tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top text-center"
              >
                <h3 className="font-bold text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                  500K
                </h3>
                <p className="text-lg lg:text-para2 text-white/70">World Wide Clients</p>
              </motion.div>
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
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
                className="animate_top text-center"
              >
                <h3 className="font-bold text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                  1M+
                </h3>
                <p className="text-lg lg:text-para2 text-white/70">Downloads</p>
              </motion.div>
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
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="animate_top text-center"
              >
                <h3 className="font-bold text-white text-3xl xl:text-sectiontitle3 mb-2.5">
                  865
                </h3>
                <p className="text-lg lg:text-para2 text-white/70">Winning Award</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
