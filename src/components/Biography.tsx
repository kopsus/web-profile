/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// assets
import imagePerson from "@/../public/about-person.svg";
import { AnimatedShowLeft, AnimatedShowRight } from "./AllAnimated";

const Biography = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row lg:gap-20">
        <div className="lg:order-2 lg:flex-[0.7] flex justify-center items-center">
          <motion.div
            className="overflow-hidden w-[80%] mx-auto border-2 border-black dark:border-white md:w-1/2 lg:w-[80%] rounded-xl shadow-xl dark:shadow-white"
            variants={AnimatedShowRight}
            initial="initial"
            animate="animate"
          >
            <div>
              <Image
                src={imagePerson}
                alt="iamge"
                className="block w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col gap-3 my-10 text-black dark:text-white lg:order-1 lg:flex-[1.2]"
          variants={AnimatedShowLeft}
          initial="initial"
          animate="animate"
        >
          <h3 className="text-2xl font-semibold">Biography</h3>
          <p>
            Hi, I'm Tegar Setio, I am a Software Engineer specializing in Web
            Development. I have contributed to a wide range of projects, from
            large-scale initiatives to small business ventures. Currently, I
            work part-time as a Front-End Engineer at PT. Kreatif Indonesia, and
            I am also a freelancer on the fastwork platform.
          </p>
          <p>
            When I work on a website or other digital product, I committed to
            website excellence and centered thinking on users on every project I
            work on. I'm looking forward the opportunity to bring my skills and
            passion to the project You're next.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Biography;
