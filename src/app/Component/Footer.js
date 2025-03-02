"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer-section pt48 bg1 aft bef pr">
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
      <div className="footer-content df wrapper ptb48 mt32 fc1 brd-b2">
        <div className="footer-cards flx1">
          <div className="footer-card-container mlr16 fw5">
            <Link href="/" className="logo mb12">
              <Image
                src="/images/logo.png"
                width={130}
                height={35}
                alt="logo-img"
              />
            </Link>
            <p className="footer-card-text lh24 mb24">
              High-quality content the heart successful marketing strategy
              drives engage.
            </p>
            <div className="footer-card-inputbox pr">
              <input
                placeholder="Email Address "
                className="df w100 h48 pl40 fs14 fw5 ls1 br8"
              />
              <CiMail className="foot-icon pa fc2 fw5 fs18" />
              <button className="footer-card-btn plr24 ptb8 bg2 v-center fs15 fw6 cp pa fc2 br8">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="footer-cards flx25">
          <div className="footer-card-container mlr16 fw5">
            <h2 className="footer-card-heading mb24">Location</h2>
            <p className="footer-card-subheading lh28 fs18 ">
              55 Main Street, 2nd block Malborne, Australia
            </p>
          </div>
        </div>
        <div className="footer-cards flx20">
          <div className="footer-card-container mlr16 fw5">
            <h2 className="footer-card-heading mb24">Contact Us</h2>
            <p className="footer-card-subheading lh28 fs18 ">
              <Link href="tel:+917052211516">+91 7052211516</Link>
              <Link href="mailto:example@email.com">example@email.com</Link>
            </p>
          </div>
        </div>
        <div className="footer-cards flx25">
          <div className="footer-card-container mlr16 fw5">
            <h2 className="footer-card-heading mb24">Follow Us</h2>
            <p className="footer-card-subheading lh28 fs18 df">
              <Link href="/" className="social-items mr12">
                <FaLinkedinIn className="brd1 p8 br50 bg-h1 fc-h1 transit1" />
              </Link>
              <Link href="/" className="social-items mr12">
                <FaInstagram className="brd1 p8 br50 bg-h1 fc-h1 transit1" />
              </Link>
              <Link href="/" className="social-items mr12">
                <FaXTwitter className="brd1 p8 br50 bg-h1 fc-h1 transit1" />
              </Link>
              <Link href="/" className="social-items mr12">
                <FaFacebookF className="brd1 p8 br50 bg-h1 fc-h1 transit1" />
              </Link>
            </p>
          </div>
        </div>
      </div>
      <p className="ptb40 fs14 fw5 fc1 tac wrapper brd-b3">
        Copyright © baba, all rights reserved.
      </p>
    </div>
  );
}
