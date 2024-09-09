/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// hooks
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

// icons
import { Divide as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";
import { LineMdMoonRisingFilledLoop, LineMdSunRisingLoop } from "@/utils/icon";

interface IPropsCustomLink {
  href: string;
  title: string;
}

const CustomLink = ({ href, title }: IPropsCustomLink) => {
  const currentRoute = usePathname();
  return (
    <Link
      href={href}
      className="relative group text-white dark:text-black lg:text-black lg:dark:text-white"
    >
      {title}

      <span
        className={`h-[2px] absolute bottom-0 left-0 bg-white dark:bg-black lg:bg-black lg:dark:bg-white group-hover:w-full transition-full duration-300 ${
          currentRoute === href ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
      <div className="relative flex items-center justify-between py-5">
        <div className="flex z-50 lg:hidden dark:text-white">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div
          className={`fixed left-0 top-0 w-full h-full px-5 md:px-20 lg:px-0 flex justify-center items-center lg:static lg:w-auto transition-all ${
            isOpen ? "scale-100" : "scale-0 lg:scale-100 lg:opacity-100"
          }`}
        >
          <nav className="w-full bg-black dark:bg-white bg-opacity-80 flex flex-col gap-10 items-center py-10 rounded-lg font-medium lg:bg-transparent lg:dark:bg-black lg:flex-row lg:p-0 lg:gap-16">
            <div onClick={() => setOpen(false)}>
              <CustomLink href="/" title="Home" />
            </div>
            <div onClick={() => setOpen(false)}>
              <CustomLink href="/about" title="About" />
            </div>
            <div onClick={() => setOpen(false)}>
              <CustomLink href="/projects" title="Projects" />
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-5 lg:gap-10">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
          >
            <button className="font-semibold">
              <Link href="mailto:tegarsetio02@gmail.com" target="_blank">
                Hire Me
              </Link>
            </button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            className="border shadow-md rounded-full p-1 cursor-pointer dark:border-black dark:bg-white"
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            {mode === "dark" ? (
              <LineMdSunRisingLoop />
            ) : (
              <LineMdMoonRisingFilledLoop />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
