import { motion, useScroll } from "framer-motion"

const LilIcon = ({ references }) => {
  const { scrollYProgress } = useScroll({
    target: references,
    offset: ["start end", "center center"],
  })
  return (
    <figure className="absolute -left-5 stroke-black">
      <svg className="-rotate-90" width={50} height={50} viewBox="0 0 100 100">
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
          className="stroke-[5px] fill-white"
          style={{ pathLength: scrollYProgress }}
        />
        <circle cx={75} cy={50} r={10} className="stroke-1 fill-sky-600" />
      </svg>
    </figure>
  )
}

export default LilIcon
