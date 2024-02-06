"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

// assets
import webProfile from "@/../public/project_webProfile.png"
import Shoestock from "@/../public/project_shoestock.png"
import ladampa from "@/../public/project_ladampa.png"
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
      className="card_shadow rounded-xl p-5 border-black border"
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
      <div className="mt-3">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{desc}</p>
        <div className="flex items-center gap-3 mt-3">
          <Link href={scLink} target="_blank">
            {iconGit}
          </Link>
          {demoLink && (
            <Link
              href={linkVisit}
              target="_blank"
              className="bg-black rounded-md px-5 py-1 text-white"
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
          image={ladampa}
          title={"Ladampa"}
          desc={
            "Website untuk melaporkan sampah yang tidak terkelola oleh pemerintah khususnya di daerah Banyumas, di bangung menggunakan teknologi next js, tailwind css"
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
