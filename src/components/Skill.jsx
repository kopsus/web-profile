"use client"

import {
  DeviconCss3,
  DeviconHtml5,
  DeviconJavascript,
  DeviconTailwindcss,
  LogosBootstrap,
  SimpleIconsExpress,
  FileIconsNextjs,
  LogosPostgresql,
  LogosReact,
  LogosSass,
} from "./Icon"
import { AnimatedShowTop } from "@/components/AllAnimated"

const Skill = () => {
  return (
    <>
      <div className="my-32">
        <h2 className="text-center font-semibold text-4xl text-black dark:text-white">
          Skills
        </h2>
        <div className="text-black dark:text-white grid grid-cols-2 gap-y-10 mt-10 md:mt-20 md:grid-cols-4 lg:w-[80%] lg:mx-auto">
          <div className="flex flex-col items-center">
            <DeviconHtml5 />
            <p className="text-sm">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <DeviconCss3 />
            <p className="text-sm">Css</p>
          </div>
          <div className="flex flex-col items-center">
            <DeviconJavascript />
            <p className="text-sm">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <DeviconTailwindcss />
            <p className="text-sm">Tailwind Css</p>
          </div>
          <div className="flex flex-col items-center">
            <LogosBootstrap />
            <p className="text-sm">Bootstrap</p>
          </div>
          <div className="flex flex-col items-center">
            <LogosSass />
            <p className="text-sm">Sass</p>
          </div>
          <div className="flex flex-col items-center">
            <LogosReact />
            <p className="text-sm">React Js</p>
          </div>
          <div className="flex flex-col items-center">
            <FileIconsNextjs />
            <p className="text-sm">Next Js</p>
          </div>
          <div className="flex flex-col items-center">
            <SimpleIconsExpress />
            <p className="text-sm">Express Js</p>
          </div>
          <div className="flex flex-col items-center">
            <LogosPostgresql />
            <p className="text-sm">Postgresql</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill
