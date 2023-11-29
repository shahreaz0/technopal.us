"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Home, Scale } from "lucide-react";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="py-20 lg:py-22.5 px-4 md:px-8 2xl:px-0 rounded-lg">
        <div className="mx-auto max-w-c-1390  bg-[url('/flag.gif')] bg-cover rounded-lg">
          <div className="py-22.5 xl:py-27.5 backdrop-blur-sm bg-black/50 rounded-lg h-full">
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

            <div className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3 justify-center gap-2 lg:gap-42.5">
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
                <div className="flex justify-center items-center h-20 w-20 bg-white rounded-full mx-auto my-4">
                  <Home className="h-10 w-10 text-red-600" strokeWidth={2} />
                </div>

                <h3 className="font-bold text-white text-xl xl:text-sectiontitle4 mb-2.5">
                  Lorem, ipsum
                </h3>
                <p className="mx-auto text-white/70">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex similique
                  maxime dolorum quibusdam.
                </p>
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top text-center"
              >
                <div className="flex justify-center items-center h-20 w-20 bg-white rounded-full mx-auto my-4">
                  <Briefcase className="h-10 w-10 text-red-600" strokeWidth={2} />
                </div>

                <h3 className="font-bold text-white text-xl xl:text-sectiontitle4 mb-2.5">
                  Lorem, ipsum
                </h3>
                <p className="mx-auto text-white/70">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex similique
                  maxime dolorum quibusdam.
                </p>
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top text-center"
              >
                <div className="flex justify-center items-center h-20 w-20 bg-white rounded-full mx-auto my-4">
                  <Scale className="h-10 w-10 text-red-600" strokeWidth={2} />
                </div>

                <h3 className="font-bold text-white text-xl xl:text-sectiontitle4 mb-2.5">
                  Lorem, ipsum
                </h3>
                <p className="mx-auto text-white/70">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex similique
                  maxime dolorum quibusdam.
                </p>
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
