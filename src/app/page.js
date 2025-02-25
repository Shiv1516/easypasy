import About from "./Component/About";
import Blogs from "./Component/Blogs";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Hiw from "./Component/Hiw";
import Service from "./Component/Service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Hiw/>
      <Blogs/>
      <Footer />
    </>
  );
}
