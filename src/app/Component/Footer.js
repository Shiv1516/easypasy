"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="footer-section ptb48 bg1">
      <div className="overflow-hidden fc1 fs200 wsnw fw6">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          Get In Touch_Get In Touch_Get In Touch_Get In Touch_
        </motion.div>
      </div>
      <div className="footer-content df wrapper"></div>
    </div>
  );
}
