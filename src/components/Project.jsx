"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// assets
import webProfile from "@/../public/project_webProfile.png"
import Shoestock from "@/../public/project_shoestock.png"
import ladampa from "@/../public/project_ladampa.png"
import psikocare from "@/../public/project_psikocare.png"
import { DeviconGithub } from "./Icon"
import { AnimatedShowTopWhileInView } from "./AllAnimated"

const DetailProject = ({
  image,
  title,
  desc,
  demoLink,
  linkVisit,
  scLink,
  iconGit,
}) => {
  return (
    <motion.div
      className="shadow-xl shadow-black dark:shadow-white rounded-xl p-5 border-black border dark:border-white"
      variants={AnimatedShowTopWhileInView}
      initial="initial"
      animate="animate"
      whileInView="whileInView"
    >
      <div className="overflow-hidden w-full border rounded-xl">
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          className="cursor-pointer hover:scale-105 transition-all"
        />
      </div>
      <div className="mt-3 text-black dark:text-white">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{desc}</p>
        <div className="flex items-center gap-3 mt-3">
          <Link
            href={scLink}
            target="_blank"
            className="hover:scale-110 transition-all"
          >
            {iconGit}
          </Link>
          {demoLink && (
            <Link
              href={linkVisit}
              target="_blank"
              className="bg-black rounded-md px-5 py-1 text-white dark:bg-white dark:text-black hover:scale-110 transition-all"
            >
              {demoLink}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Project = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center font-semibold text-3xl">Projects</h2>
      <div className="mt-10 grid gap-10 h-max md:grid-cols-2 lg:gap-20">
        <DetailProject
          image={psikocare}
          title={"Psikocare"}
          desc={
            "Psikocare merupakan platform konsultasi psikologi daring yang menyediakan layanan konsultasi langsung kepada dokter psikolog melalui fitur chat, yang di bangun menggunakan teknologi Next js, Tailwind css, Express js, Postgresql"
          }
          demoLink={"Visit"}
          linkVisit={"https://profiletegar.netlify.app/"}
          scLink={"https://github.com/kopsus/ladampa"}
          iconGit={<DeviconGithub />}
        />
        <DetailProject
          image={Shoestock}
          title={"Web Inventori"}
          desc={
            "Merancang dan Mengembangkan Aplikasi Inventori Online yang Elegan dengan Menggabungkan Teknologi Next.js, Tailwind CSS, Express.js, dan PostgreSQL untuk Optimalisasi Pencatatan dan Manajemen Keluar-Masuk Barang."
          }
          linkVisit={"https://ladampa.netlify.app/"}
          scLink={"https://github.com/kopsus/web-profile"}
          iconGit={<DeviconGithub />}
        />
        <DetailProject
          image={webProfile}
          title={"Web profile"}
          desc={
            "My personal web profile, di bangun menggunakan teknologi Next Js dan tailwind css"
          }
          demoLink={"Visit"}
          linkVisit={"https://profiletegar.netlify.app/"}
          scLink={"https://github.com/kopsus/web-profile"}
          iconGit={<DeviconGithub />}
        />
      </div>
    </div>
  )
}

export default Project
