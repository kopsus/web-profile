"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import LilIcon from "./LilIcon";
import { AnimatedShowTopWhileInView } from "@/components/AllAnimated";
import { educations } from "@/utils/data";

interface IProps {
  title: string;
  desc: string;
  date: string;
  companyLink: string;
}

const DetailsEducation = ({ title, desc, date, companyLink }: IProps) => {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 my-10 text-black dark:text-white"
    >
      <LilIcon references={ref} />
      <motion.div
        variants={AnimatedShowTopWhileInView}
        initial="initial"
        animate="animate"
        whileInView="whileInView"
        className="flex flex-col gap-3"
      >
        <Link
          href={companyLink}
          target="_blank"
          className="text-xl font-semibold hover:text-sky-600"
        >
          {title}
        </Link>
        <p>{desc}</p>
        <p className="text-sm">{date}</p>
      </motion.div>
    </div>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  return (
    <>
      <div className="my-32">
        <h2 className="text-center font-semibold text-4xl text-black dark:text-white">
          Educations
        </h2>
        <div
          ref={ref}
          className="relative w-11/12 mx-auto mt-10 md:mt-20 lg:w-1/2"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-1 top-0 origin-top w-[2px] bg-black h-full dark:bg-blue-200 lg:w-1"
          ></motion.div>

          <div className="ps-10">
            {educations.map((item, index) => (
              <DetailsEducation
                key={index}
                title={item.title}
                companyLink={item.companyLink}
                desc={item.desc}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
