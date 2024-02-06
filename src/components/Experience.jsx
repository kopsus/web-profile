"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import LilIcon from "./LilIcon"
import { AnimatedShowTopWhileInView } from "./AllAnimated"

const DetailExperience = ({ title, desc, date, company, companyLink }) => {
  const ref = useRef(null)

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
      <div className="text-xl font-semibold flex gap-2 ">
        <p className="">{title}</p>
        <Link href={companyLink} target="_blank" className="text-sky-600">
          {company}
        </Link>
      </div>
      <p>{desc}</p>
      <p className="text-sm">{date}</p>
    </motion.div>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  return (
    <>
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
            <DetailExperience
              title="Freelance"
              company="Fastwork"
              companyLink="https://fastwork.id/user/kopsus"
              desc="Menjalankan kegiatan pekerjaan mandiri dengan menjadi freelancer di platform Fastwork."
              date="19 Agustus 2023 - Now"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Experience
