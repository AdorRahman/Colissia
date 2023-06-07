import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { BiHomeSmile } from "react-icons/bi";
import { AiFillShopping, AiFillPhone } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItems = [
  {
    name: "Home",
    icon: <BiHomeSmile />,
    color: "#FF008C",
    href: "/",
  },
  {
    name: "Shop",
    icon: <AiFillShopping />,
    color: "#D309E1",
    href: "/shop",
  },
  {
    name: "About",
    icon: <BsFillPersonLinesFill />,
    color: "#9C1AFF",
    href: "/about",
  },
  {
    name: "Contact",
    icon: <AiFillPhone />,
    color: "#7700FF",
    href: "/contact",
  },
  {
    name: "Logout",
    icon: <IoLogOut />,
    color: "#4400FF",
    href: "/logout",
  },
];

const Navigation = ({ pointerEvents }) => (
  <motion.ul
    className={`absolute p-6 top-24 w-60 ${
      pointerEvents == "auto" ? "pointer-events-auto" : "pointer-events-none"
    }`}
    variants={variants}
  >
    {menuItems.map((item) => (
      <MenuItem
        name={item.name}
        icon={item.icon}
        color={item.color}
        href={item.href}
        key={item.name}
      />
    ))}
  </motion.ul>
);

export default Navigation;
