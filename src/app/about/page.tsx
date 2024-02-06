import React from "react"

import Skill from "@/components/Skill"
import Biography from "@/components/Biography"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import TransitionEffect from "@/components/TransitionEffect"

const About = () => {
  return (
    <>
      <TransitionEffect />

      <div className="mt-10 lg:mt-20">
        {/* biograpy */}
        <Biography />
        {/* skill */}
        <Skill />
        {/* Education */}
        <Education />
        {/* experience */}
        <Experience />
      </div>
    </>
  )
}

export default About
