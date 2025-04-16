"use client";
import { useEffect, useState } from "react";
import About from "./Component/About";
import Blogs from "./Component/Blogs";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Hiw from "./Component/Hiw";
import PopularWork from "./Component/PopularWork";
import Service from "./Component/Service";
import Testmonial from "./Component/Testmonial";
import Popup from "./Component/Popup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer); // Clean up
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Hiw />
      <PopularWork />
      <Testmonial />
      <Blogs />
      <Contact />
      <Footer />
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  );
}
