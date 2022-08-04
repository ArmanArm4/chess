import React, { useState } from "react";
import { motion } from "framer-motion";
import classes from "../css/mobile.module.css";
import ManuIcon from "./ManuIcon.js";

function MobileNav() {
  const [navIsClosed, setNavIsClosed] = useState(false);

  const openMotion = {
    close: {
      y: -56,
      transition: { duration: 0.6 },
    },
    open: {
      y: 3,
      rotate: 0,

      transition: { duration: 0.6 },
    },
  };
  const closeMotion = {
    close: {
      y: -48,
      transition: { duration: 0.6 },
    },
    open: {
      y: 10,
      rotate: 0,

      transition: { duration: 0.6 },
    },
  };
  return (
    <>
      <div className={classes.nav}>
        <div className={classes.open}>
          <motion.ul
            initial={"close"}
            variants={openMotion}
            animate={navIsClosed ? "open" : "close"}
          >
            <a href="/">GitHub</a>
            <li>
              <a href="#">armanportfolio.com</a>
            </li>
            <li>
              <a href="#">Online</a>
            </li>
          </motion.ul>
        </div>
        <motion.div
          initial={"open"}
          variants={closeMotion}
          animate={navIsClosed ? "open" : "close"}
          className={classes.open}
        >
          <div className={classes.logo}></div>
        </motion.div>
        <ManuIcon
          setNavIsClosed={setNavIsClosed}
          navIsClosed={navIsClosed}
        ></ManuIcon>
      </div>
    </>
  );
}

export default MobileNav;
