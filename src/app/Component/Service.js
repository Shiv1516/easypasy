import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function Service() {
  return (
    <div className="service-section ptb48 tac wrapper brd-b1">
      <h4 className="about-subheading p8 ls1 brd2 dib fs14 br8 fw6 fc2 mb16">
        Services
      </h4>
      <h2 className="about-main-text fs40 fw7 lh48 mb40">
        Creative & Modern Services
      </h2>
      <ul className="all-service pt32">
        <li className="services-items df aic jcsb plr32 brd2 ptb32 bg-h1 transit1 cp">
          <h4 className="service-number p8 ls1 brd2 dib fs14 br8 fw6">01</h4>
          <h2 className="service-heading fw6 flx60 tal">Web Design</h2>
          <MdArrowOutward className="service-icon fs24 transit2" />
        </li>
        <li className="services-items df aic jcsb plr32 brd2 ptb32 bg-h1 transit1 cp">
          <h4 className="service-number p8 ls1 brd2 dib fs14 br8 fw6">02</h4>
          <h2 className="service-heading fw6 flx60 tal">Branding</h2>
          <MdArrowOutward className="service-icon fs24 transit2" />
        </li>
        <li className="services-items df aic jcsb plr32 brd2 ptb32 bg-h1 transit1 cp">
          <h4 className="service-number p8 ls1 brd2 dib fs14 br8 fw6">03</h4>
          <h2 className="service-heading fw6 flx60 tal">SEO</h2>
          <MdArrowOutward className="service-icon fs24 transit2" />
        </li>
        <li className="services-items df aic jcsb plr32 brd2 ptb32 bg-h1 transit1 cp">
          <h4 className="service-number p8 ls1 brd2 dib fs14 br8 fw6">04</h4>
          <h2 className="service-heading fw6 flx60 tal">Motion Design</h2>
          <MdArrowOutward className="service-icon fs24 transit2" />
        </li>
        <li className="services-items df aic jcsb plr32 brd2 ptb32 bg-h1 transit1 cp">
          <h4 className="service-number p8 ls1 brd2 dib fs14 br8 fw6">05</h4>
          <h2 className="service-heading fw6 flx60 tal">3D Animation</h2>
          <MdArrowOutward className="service-icon fs24 transit2" />
        </li>
      </ul>
    </div>
  );
}
