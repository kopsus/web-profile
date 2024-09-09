"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { AnimatedShowTopWhileInView } from "./AllAnimated";
import { experiences } from "@/utils/data";
import LilIcon from "./LilIcon";

interface IProps {
  title: string;
  company: string;
  companyLink: string;
  desc: string;
  date: string;
}

const DetailExperience: React.FC<IProps> = ({
  title,
  desc,
  date,
  company,
  companyLink,
}) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 my-10 text-black dark:text-white"
      variants={AnimatedShowTopWhileInView}
      initial="initial"
      animate="animate"
      whileInView="whileInView"
    >
      <LilIcon references={ref} />
      <motion.div
        variants={AnimatedShowTopWhileInView}
        initial="initial"
        animate="animate"
        whileInView="whileInView"
        className="flex flex-col gap-3"
      >
        <div className="text-xl font-semibold flex gap-2 ">
          <p>{title}</p>
          <Link href={companyLink} target="_blank" className="text-sky-600">
            {company}
          </Link>
        </div>
        <p>{desc}</p>
        <p className="text-sm">{date}</p>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  return (
    <div className="mt-32 mb-48">
      <h2 className="text-center font-semibold text-4xl text-black dark:text-white">
        Experience
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
          {experiences.map((item, index) => (
            <DetailExperience
              key={index}
              title={item.title}
              company={item.company}
              companyLink={item.companyLink}
              desc={item.desc}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
