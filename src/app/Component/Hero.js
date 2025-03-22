import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero-section bg1 aft pr">
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
        <div className="hero-btn dib">
          <Link
            href="#"
            className="talk-btn bg-h3 h48 plr24 fw7 bg2 v-center fc2 br8"
          >
            Explore Our Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
