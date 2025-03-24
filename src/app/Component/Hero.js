import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero-section bg1 aft pr pt40">
      <div className="hero-container wrapper ptb90 pr fc1 zi2">
        <h1 className="hero-heading fw7 mb32 pr">
          Building Responsive Websites
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
          Web design is a critical aspect of creating an effective online
          presence for any business or individual. A well-designed website not
          only reflects a brand's identity but also enhances user experience,
          ensuring visitors can easily
        </p>
        <div className="hero-btn dib mb32">
          <Link
            href="#"
            className="talk-btn bg-h3 h48 plr24 fw7 bg2 v-center fc2 br8"
          >
            Explore Our Projects
          </Link>
        </div>

        <div className="clients pt24">
          <h3 className="mb16 fw6 ls1 fs18 mb32">5m+ Trusted Clients</h3>
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

      <div className="clients-hero df jce pr">
        <span className="hero-icons-client pa r0 t0">
          <Image
            src="/images/counter.png"
            width={250}
            height={250}
            alt="hero-icons"
            className="hero-icons-01"
          />
        </span>
        <div className="clients-details flx50 df plr40 ptb40 bg2 mb24 br8">
          <div className="clients-cards lx33">
            <div className="clients-card mlr24 tac">
              <h2 className="clients-card-count mb12 fs44 fw7">25k+</h2>
              <h5 className="clients-card-title mb16 p12 bg1 fc1 br4 dib fw5 fs14">
                Project Complete
              </h5>
              <p className="clients-card-details lh28 fw5">
                Completing a mobile application development
              </p>
            </div>
          </div>
          <div className="clients-cards lx33">
            <div className="clients-card mlr24 tac">
              <h2 className="clients-card-count mb12 fs44 fw7">25k+</h2>
              <h5 className="clients-card-title mb16 p12 bg1 fc1 br4 dib fw5 fs14">
                Project Complete
              </h5>
              <p className="clients-card-details lh28 fw5">
                Completing a mobile application development
              </p>
            </div>
          </div>
          <div className="clients-cards lx33">
            <div className="clients-card mlr24 tac">
              <h2 className="clients-card-count mb12 fs44 fw7">25k+</h2>
              <h5 className="clients-card-title mb16 p12 bg1 fc1 br4 dib fw5 fs14">
                Project Complete
              </h5>
              <p className="clients-card-details lh28 fw5">
                Completing a mobile application development
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
