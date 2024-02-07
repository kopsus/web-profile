"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"

// assets
import imgPerson from "@/../public/person-poto.svg"
import {
  DeviconGithub,
  DeviconGitlab,
  DeviconLinkedin,
  SkillIconsInstagram,
} from "@/components/Icon"
import { AnimatedOut, AnimatedShowTop } from "@/components/AllAnimated"
import TransitionEffect from "@/components/TransitionEffect"

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <div className="mt-10 md:h-[90vh] md:mt-0 md:flex md:flex-col md:justify-center lg:flex-row lg:items-center lg:h-[80vh]">
        <div className="lg:order-2 lg:flex-[0.9]">
          <motion.div
            variants={AnimatedOut}
            initial="initial"
            animate="animate"
            className="overflow-hidden w-56 h-56 mx-auto rounded-full shadow-sm lg:w-[80%] lg:h-full lg:float-right"
          >
            <Image
              src={imgPerson}
              alt="person"
              className="w-full h-full object-cover block"
            />
          </motion.div>
        </div>
        <motion.div
          className="text-center flex flex-col gap-5 pt-5 text-black dark:text-white lg:order-1 lg:flex-[1.1] lg:text-start"
          variants={AnimatedShowTop}
          initial="initial"
          animate="animate"
        >
          <div className="text-2xl font-bold lg:text-5xl lg:leading-normal">
            <h1>Hello I’am Tegar Setio</h1>
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "From Indonesia"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="">
            Sebagai pengembang website, saya berdedikasi untuk mengubah ide
            menjadi aplikasi web yang inovatif. Jelajahi proyek terbaru saya,
            yang menunjukkan keahlian saya dalam pengembangan web.
          </p>
          <div className="flex items-center justify-center gap-10 lg:justify-start my-3">
            <motion.div className="cursor-pointer" whileHover={{ y: -5 }}>
              <Link href={"https://www.instagram.com/tegaar_s/"}>
                <SkillIconsInstagram />
              </Link>
            </motion.div>
            <motion.div className="cursor-pointer" whileHover={{ y: -5 }}>
              <Link href={"https://www.linkedin.com/in/tegar-setio-b00b73234/"}>
                <DeviconLinkedin />
              </Link>
            </motion.div>
            <motion.div className="cursor-pointer" whileHover={{ y: -5 }}>
              <Link href={"https://github.com/kopsus"}>
                <DeviconGithub />
              </Link>
            </motion.div>
            <motion.div className="cursor-pointer" whileHover={{ y: -5 }}>
              <Link href={"https://gitlab.com/kopsuss"}>
                <DeviconGitlab />
              </Link>
            </motion.div>
          </div>
          <div className="flex items-center justify-center gap-10 font-semibold lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white dark:bg-white dark:text-black"
            >
              Resume
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }}>
              <Link href={"https://wa.me/62882005090497"} target="_blank">
                Contact
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  )
}
