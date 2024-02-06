"use client"

import { motion, useScroll } from "framer-motion"
import Link from "next/link"
import React, { useRef } from "react"
import LilIcon from "./LilIcon"
import { AnimatedShowTopWhileInView } from "@/components/AllAnimated"

const DetailsEducation = ({ title, desc, date, companyLink }) => {
  const ref = useRef(null)
  return (
    <motion.div
      variants={AnimatedShowTopWhileInView}
      initial="initial"
      animate="animate"
      whileInView="whileInView"
      ref={ref}
      className="flex flex-col gap-2 my-10 text-black dark:text-white"
    >
      <LilIcon references={ref} />
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
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

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
            <DetailsEducation
              title="Rakamain Academy"
              companyLink={"https://www.rakamin.com/"}
              desc="mengikuti program MSIB Studi Independent Full Stack Web Development Intensive Bootcamp di Rakamin Academy"
              date="14 Agu 2023 - 31 Des 2023"
            />
            <DetailsEducation
              title="IT Telkom Purwokerto"
              companyLink={"https://ittelkom-pwt.ac.id/"}
              desc="Mahasiswa aktif di Institut Teknologi Telkom Purwokerto, prodi Teknik Informatika"
              date="2021 - Now"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Education
