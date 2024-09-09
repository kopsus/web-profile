import { motion, useScroll } from "framer-motion";
import { RefObject } from "react";

interface IProps {
  references: RefObject<HTMLElement>;
}

const LilIcon = ({ references }: IProps) => {
  const { scrollYProgress } = useScroll({
    target: references,
    offset: ["start end", "center center"],
  });
  return (
    <figure className="absolute -left-5 stroke-black dark:stroke-white lg:-left-6">
      <svg
        className="-rotate-90 w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
        viewBox="0 0 100 100"
      >
        <circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-sky-600 stroke-1 fill-none"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          className="stroke-[5px] fill-white dark:fill-black"
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx={75} cy={50} r={10} className="stroke-1 fill-sky-600" />
      </svg>
    </figure>
  );
};

export default LilIcon;
