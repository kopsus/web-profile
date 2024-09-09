import React from "react";

import Skills from "@/components/Skills";
import Biography from "@/components/Biography";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
  return (
    <>
      <TransitionEffect />

      <div className="mt-10 lg:mt-20">
        {/* biograpy */}
        <Biography />
        {/* skills */}
        <Skills />
        {/* Education */}
        <Education />
        {/* experience */}
        <Experience />
      </div>
    </>
  );
};

export default About;
