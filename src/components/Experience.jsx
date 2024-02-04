"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import LilIcon from "./LilIcon"

const DetailExperience = ({ title, desc, date, company, companyLink }) => {
  const ref = useRef(null)

  return (
    <div ref={ref} className="flex flex-col gap-2 my-10">
      <LilIcon references={ref} />
      <div className="text-xl font-semibold flex gap-2">
        <p className="">{title}</p>
        <Link href={companyLink} target="_blank" className="text-sky-600">
          {company}
        </Link>
      </div>
      <p>{desc}</p>
      <p className="text-sm">{date}</p>
    </div>
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
      <div className="my-32">
        <h2 className="text-center font-semibold text-4xl">Experience</h2>
        <div
          ref={ref}
          className="relative w-11/12 mx-auto mt-10 md:mt-20 lg:w-1/2"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-1 top-0 origin-top w-[2px] bg-black h-full"
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
