"use client";

import { skills } from "@/utils/data";

const Skill = () => {
  return (
    <div className="my-32">
      <h2 className="text-center font-semibold text-4xl text-black dark:text-white">
        Skills
      </h2>
      <div className="text-black dark:text-white grid grid-cols-2 gap-y-10 mt-10 md:mt-20 md:grid-cols-4 lg:w-[80%] lg:mx-auto">
        {skills.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2">{item.icon}</div>
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
