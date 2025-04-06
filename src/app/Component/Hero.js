import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero-section bg1 aft pr pt40 zi3" id="hero">
      <div className="hero-container wrapper ptb90 pr fc1 zi2">
        <h1 className="hero-heading fw7 mb32 pr w65">
          Next-Gen Digital Solutions
        </h1>
        <span className="hero-icon">
          <Image
            width={200}
            height={200}
            src="/images/hero-shape.png"
            alt="icon-image"
            className="img-icon pa t0 r25 mt32"
          />
        </span>

        <p className="hero-subtext lh30 ls1 fw5 w65 fs20 mb40">
          Digital design plays a vital role in building a strong online identity
          for businesses of all sizes. From custom websites to CRMs, our
          solutions are crafted to boost engagement, improve usability, and
          drive growth through seamless experiences.
        </p>
        <div className="hero-btn dib mb32">
          <Link
            href="#popularWork"
            className="talk-btn bg-h3 h48 plr24 fw7 bg2 v-center fc2 br8"
          >
            Explore Our Projects
          </Link>
        </div>

        <div className="clients pt24">
          <h3 className="mb16 fw6 ls1 fs18 mb32">
            Empowering Brands from Day One
          </h3>
          <Image
            src="/images/author.jpg"
            width={70}
            height={70}
            alt="client-icon"
            className=" br50 brd4"
          />
          <Image
            src="/images/author-01.jpg"
            width={70}
            height={70}
            alt="client-icon"
            className="client-img br50 brd4"
          />
          <Image
            src="/images/author-02.jpg"
            width={70}
            height={70}
            alt="client-icon"
            className="client-img br50 brd4"
          />
          <Image
            src="/images/author-03.jpg"
            width={70}
            height={70}
            alt="client-icon"
            className="client-img br50 brd4"
          />
          <Image
            src="/images/author-04.jpg"
            width={70}
            height={70}
            alt="client-icon"
            className="client-img br50 brd4"
          />
          <Image
            src="/images/author-05.jpg"
            width={70}
            height={70}
            alt="client-icon"
            className="client-img br50 brd4"
          />
        </div>
      </div>
      <Image
        src="/images/counter.png"
        width={250}
        height={250}
        alt="hero-icons"
        className="hero-icons-01 pa b0 r0"
      />
      <div className="clients-hero df jce">
        <div className="clients-details flx50 df plr40 ptb40 bg2 mb24 br8">
          <div className="clients-cards lx33">
            <div className="clients-card mlr24 tac">
              <h2 className="clients-card-count mb12 fs44 fw7">100%</h2>
              <h5 className="clients-card-title mb16 p12 bg1 fc1 br4 dib fw5 fs14">
                Custom-Built Solutions
              </h5>
              <p className="clients-card-details lh28 fw5">
                Websites, apps, and CRMs tailored to your unique business goals.
              </p>
            </div>
          </div>
          <div className="clients-cards lx33">
            <div className="clients-card mlr24 tac">
              <h2 className="clients-card-count mb12 fs44 fw7">100%</h2>
              <h5 className="clients-card-title mb16 p12 bg1 fc1 br4 dib fw5 fs14">
                High-Speed Scalable Tech
              </h5>
              <p className="clients-card-details lh28 fw5">
                We use modern tech to build performance-driven, future-ready
                platforms.
              </p>
            </div>
          </div>
          <div className="clients-cards lx33">
            <div className="clients-card mlr24 tac">
              <h2 className="clients-card-count mb12 fs44 fw7">100%</h2>
              <h5 className="clients-card-title mb16 p12 bg1 fc1 br4 dib fw5 fs14">
                Startup-Friendly Approach
              </h5>
              <p className="clients-card-details lh28 fw5">
                We grow with you — whether you're just starting or scaling up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
