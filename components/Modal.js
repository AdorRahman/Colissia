import { motion, AnimatePresence } from "framer-motion";
import ClientOnlyPortal from "./ClientOnlyPortal";
import { IoCloseCircle } from "react-icons/io5";
import { useEffect } from "react";
const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: "-100%", transition: { type: "spring" } },
  isOpen: { top: "0%" },
  exit: { top: "-100%" },
};
const Modal = ({ handleClose, children, isOpen }) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ClientOnlyPortal selector="#modal">
          <motion.div
            className="fixed w-screen h-screen inset-0 z-50 bg-darker backdrop-filter backdrop-saturate-150 backdrop-blur-lg bg-opacity-50 flex justify-center items-center"
            initial={"initial"}
            animate={"isOpen"}
            exit={"exit"}
            variants={modalVariant}
          >
            <motion.div
              variants={containerVariant}
              className="bg-dark bg-opacity-90 shadow-xl px-10 py-10 rounded-md relative"
            >
              <span
                onClick={handleClose}
                className="text-danger text-2xl cursor-pointer absolute right-2 top-2"
              >
                <IoCloseCircle />
              </span>
              {children}
            </motion.div>
          </motion.div>
        </ClientOnlyPortal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
