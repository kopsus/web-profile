"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// assets
import { AnimatedShowTopWhileInView } from "./AllAnimated";
import { projects } from "@/utils/data";
import { ReactNode } from "react";

interface IProps {
  image: string;
  title: string;
  desc: string;
  demoLink: string;
  linkVisit: string;
  scLink: string;
  iconGit: ReactNode;
}

const DetailProject = ({
  image,
  title,
  desc,
  demoLink,
  linkVisit,
  scLink,
  iconGit,
}: IProps) => {
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
          sizes="100vw"
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
  );
};

const Project = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center font-semibold text-3xl dark:text-white">
        Projects
      </h2>
      <div className="mt-10 grid gap-10 h-max md:grid-cols-2 lg:gap-20">
        {projects.map((item, index) => (
          <DetailProject
            key={index}
            image={item.image}
            title={item.title}
            desc={item.desc}
            scLink={item.link_repo}
            iconGit={item.git}
            linkVisit={item.link_demo}
            demoLink={item.link_demo ? "Visit" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
