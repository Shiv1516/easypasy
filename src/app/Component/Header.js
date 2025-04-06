"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";
import Image from "next/image";
// import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setNavbarOpen(!isNavbarOpen);

    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("open-nav", !isNavbarOpen);
  };
  return (
    <>
      <div className="top-header">
        <div className="top-header-container wrapper ptb12 jce df">
          <Link href="tel:/+91 9891129590" className="v-center fs15 mr24 fw5">
            {" "}
            <IoMdCall className="mr8 fs22" />
            +91 9891129590
          </Link>
          <Link
            href="mailto:geeta@easypasy.com"
            className="v-center fs15 mr24 fw5"
          >
            {" "}
            <MdMail className="mr8 fs22" />
            geeta@easypasy.com
          </Link>
        </div>
      </div>
      <header className="header bg-li fc1 ptb12 fw5 fs14">
        <div className="wrapper v-center jcsb h80">
          <Link href="/" className="logo box-center ptb8">
            <Image
              src="/images/easy-pasy-logo.png"
              width={130}
              height={35}
              alt="Logo img"
            />
          </Link>
          {/* <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}
          <ul id="nav-items" className="nav-items v-center fc1 fww">
            <li className="nav-item">
              <Link href="#hero" className="nav-link p16 ls1 transit2">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#about"
                className="nav-link p16 ls1 transit2 v-center"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#service" className="nav-link p16 ls1 transit2">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#popularWork" className="nav-link p16 ls1 transit2">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#blog" className="nav-link p16 ls1 transit2">
                Blog
              </Link>
            </li>
          </ul>
          <Link
            href="#"
            className="talk-btn bg-h3 h40 plr24 bg2 v-center fc2 br8"
          >
            Start Project
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
