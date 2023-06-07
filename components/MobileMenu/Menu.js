import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../lib/useDimensions";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      top: "50px",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="  relative  inset-0 top-[-32px] w-80 "
    >
      <motion.div
        className={`absolute inset-0 h-screen w-80 -top-2 ${
          isOpen && "bg-lightDark"
        }`}
        variants={sidebar}
      />
      <Navigation pointerEvents={isOpen ? "auto" : "none"} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};

export default Menu;
