import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi";

const Accordion = ({
  icon,
  title,
  color,
  children,
  noBorder,
  textSize = "text-base",
  titlePadding = "py-3 px-4",
  contentBg = "bg-transparent",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`border rounded-lg overflow-hidden ${noBorder && "!border-0"}`}
    >
      <div
        className={`flex justify-between items-center bg-lightDark cursor-pointer  ${titlePadding} ${color} ${textSize}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-3 items-center py-1.5">
          {icon && <span className="text-primary">{icon}</span>}
          <span className={`${isOpen ? "text-primary" : "text-body"}`}>
            {title}
          </span>
        </div>
        <HiOutlineChevronDown
          className={`duration-200 text-primary ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <motion.div
        key="content"
        className={`overflow-hidden px-4 ${contentBg}`}
        animate={{ height: isOpen ? "auto" : "0" }}
        transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Accordion;
