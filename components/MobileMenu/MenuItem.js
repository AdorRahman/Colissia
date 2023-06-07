import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    // transition: {
    //   y: { stiffness: 1000, velocity: -100 },
    // },
  },
  closed: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const MenuItem = ({ name, icon, color, href }) => {
  const style = { background: `${color}` };
  return (
    <motion.li
      className="flex mb-5 items-center cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className="flex items-center justify-center w-10 h-10 rounded-full mr-5"
        style={style}
      >
        <i className="text-white text-2xl">{icon}</i>
      </div>
      <div>
        <Link href={href}>
          <a className="text-body uppercase font-semibold rounded">{name}</a>
        </Link>
      </div>
    </motion.li>
  );
};
