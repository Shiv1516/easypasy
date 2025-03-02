import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PopularWork() {
  return (
    <div className="popular-work-section ptb90 tac wrapper brd-b1 ofh">
      <h4 className="popular-work-subheading p8 ls1 brd2 dib fs14 br8 fw6 fc2 mb16">
        Popular Works
      </h4>
      <h2 className="popular-work-main-text fs40 fw7 lh48 mb40">
        Explore Our Latest Projects
      </h2>
      <ul className="popular-work-sample ptb32 mb16 df jcsb fww">
        <li className="popular-word-cards mb16">
          <Image
            src="/images/project-image1.jpg"
            alt="popular-work-image"
            width={810}
            height={369}
            className
          />
        </li>
        <li className="popular-word-cards mb16">
          <Image
            src="/images/project-image2.jpg"
            alt="popular-work-image"
            width={410}
            height={370}
            className
          />
        </li>
        <li className="popular-word-cards mb16">
          <Image
            src="/images/project-image2.jpg"
            alt="popular-work-image"
            width={410}
            height={370}
            className
          />
        </li>
        <li className="popular-word-cards mb16">
          <Image
            src="/images/project-image1.jpg"
            alt="popular-work-image"
            width={810}
            height={369}
            className
          />
        </li>
        <li className="popular-word-cards mb16">
          <Image
            src="/images/project-image1.jpg"
            alt="popular-work-image"
            width={810}
            height={369}
            className
          />
        </li>
        <li className="popular-word-cards mb16">
          <Image
            src="/images/project-image2.jpg"
            alt="popular-work-image"
            width={410}
            height={370}
            className
          />
        </li>
      </ul>
      <Link
        href="/"
        className="popular-work-button p16 ls1 brd2 dib bg-h1 fs14 br8 fw6 fc2"
      >
        Explore More
      </Link>
    </div>
  );
}
