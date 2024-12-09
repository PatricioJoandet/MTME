import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from "motion/react";

export default function Toast({ msg, show }) {
  return (
    <motion.div
      className="toast toast-top toast-end top-20"
      initial={{ opacity: 0, x: 100 }}
      animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="alert alert-info bg-[#F72798]">
        <FaInfoCircle />
        <span>{msg}</span>
      </div>
    </motion.div>
  );
}
