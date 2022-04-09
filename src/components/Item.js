import { motion } from "framer-motion";
import React from "react";
import "./Item.css";

const subheading = {
  true: {
    opacity: 1,
  },
  false: {
    opacity: 0,
    display: "none",
  },
};

function Item({ icon, name }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: " rgba( 255, 255, 255, 0.3 )",
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: " blur( 5.5px )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        cursor: "pointer",
      }}
      transition={{
        type: "none",
        duration: 0.1,
      }}
      className="item"
    >
      <motion.div className="icon">{icon}</motion.div>
      <motion.span variants={subheading}>{name}</motion.span>
    </motion.div>
  );
}

export default Item;
