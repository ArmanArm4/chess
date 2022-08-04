import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/manuIcon.css";

function ManuIcon({ navIsClosed, setNavIsClosed }) {
  const firstDiv = {
    open: {
      y: 8,
      rotate: 45,
      transition: { duration: 0.8 },
    },
    close: {
      y: 0,
      rotate: 0,
      transition: { duration: 0.6 },
    },
  };
  const secondDiv = {
    open: {
      y: 2,
      rotate: 405,
      transition: { duration: 0.8 },
    },
    close: {
      y: 0,
      rotate: 0,
      transition: { duration: 0.6 },
    },
  };
  const thirdDiv = {
    open: {
      y: -3,
      rotate: -45,
      transition: { duration: 0.8 },
    },
    close: {
      y: 0,
      rotate: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <div
      className="closeIcon"
      onClick={() => {
        setNavIsClosed(!navIsClosed);
      }}
    >
      <motion.div
        className="line_one"
        variants={firstDiv}
        animate={navIsClosed ? "open" : "close"}
      ></motion.div>
      <motion.div
        className="line_one"
        variants={secondDiv}
        animate={navIsClosed ? "open" : "close"}
      ></motion.div>
      <motion.div
        className="line_one"
        variants={thirdDiv}
        animate={navIsClosed ? "open" : "close"}
      ></motion.div>
    </div>
  );
}

export default ManuIcon;
