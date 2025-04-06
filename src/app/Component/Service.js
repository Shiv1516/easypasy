import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

export default function Service() {
  return (
    <div className="service-section ptb48 tac wrapper brd-b1" id="service">
      <h4 className="about-subheading p8 ls1 brd2 dib fs14 br8 fw6 fc2 mb16">
        Services
      </h4>
      <h2 className="about-main-text fs40 fw7 lh48 mb40">
        Creative & Modern Services
      </h2>
      <ul className="all-service pt32">
        <li className="services-items df aic jcsb plr32 brd2 ptb48 bg-h1 transit1 cp pr">
          <h4 className="service-number p8 ls1 brd2 dib fs14 br8 fw6">01</h4>
          <h2 className="service-heading fw6 flx80 tal">Web Design</h2>
          <MdArrowOutward className="service-icon fs24 transit2" />
          <div className="service-image-icon">
            <Image
              src="/images/service-timeline.jpg"
              width={250}
              height={300}
              alt="service img"
              className="service-image"
            />
          </div>
        </li>
        <li className="services-items df aic jcsb plr32 brd2 ptb48 bg-h1 transit1 cp pr">
          <h4 className="service-number p8 ls1 brd2 dib fs14 br8 fw6">02</h4>
          <h2 className="service-heading fw6 flx80 tal">
            Digital Identity Design
          </h2>
          <MdArrowOutward className="service-icon fs24 transit2" />
          <div className="service-image-icon">
            <Image
              src="/images/blog-img-01.jpg"
              width={250}
              height={300}
              alt="service img"
              className="service-image"
            />
          </div>
        </li>
        <li className="services-items df aic jcsb plr32 brd2 ptb48 bg-h1 transit1 cp pr">
          <h4 className="service-number p8 ls1 brd2 dib fs14 br8 fw6">03</h4>
          <h2 className="service-heading fw6 flx80 tal">
            Smart SEO & Reporting
          </h2>
          <MdArrowOutward className="service-icon fs24 transit2" />
          <div className="service-image-icon">
            <Image
              src="/images/blog-img-02.jpg"
              width={250}
              height={300}
              alt="service img"
              className="service-image"
            />
          </div>
        </li>
        <li className="services-items df aic jcsb plr32 brd2 ptb48 bg-h1 transit1 cp pr">
          <h4 className="service-number p8 ls1 brd2 dib fs14 br8 fw6">04</h4>
          <h2 className="service-heading fw6 flx80 tal">
            Interactive UI Animations
          </h2>
          <MdArrowOutward className="service-icon fs24 transit2" />
          <div className="service-image-icon">
            <Image
              src="/images/blog-img-03.jpg"
              width={250}
              height={300}
              alt="service img"
              className="service-image"
            />
          </div>
        </li>
        <li className="services-items df aic jcsb plr32 brd2 ptb48 bg-h1 transit1 cp pr">
          <h4 className="service-number p8 ls1 brd2 dib fs14 br8 fw6">05</h4>
          <h2 className="service-heading fw6 flx80 tal">Visual Enhancements</h2>
          <MdArrowOutward className="service-icon fs24 transit2" />
          <div className="service-image-icon">
            <Image
              src="/images/blog-img-04.jpg"
              width={250}
              height={300}
              alt="service img"
              className="service-image"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
