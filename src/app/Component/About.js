import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";

export default function About() {
  return (
    <div className="about-us pt48 df fww wrapper brd-b1">
      <div className="about-left flx50 pr pt24 pl48">
        <p className="about-detail-box brd1 fw6">Development</p>
        <p className="about-detail-box brd1 fw6 pa bg1 fc1 second">
          Web Design
        </p>
        <p className="about-detail-box brd1 fw6 pa r0 bg2 tac third">
          Mobile Apps <br />
          Design
        </p>
      </div>
      <div className="about-content flx1">
        <h4 className="about-subheading p8 brd1 dib fs12 br8 fw6 fc2 mb16">
          About Agency
        </h4>
        <h2 className="about-main-text fs40 fw7 lh48 mb40">
          Technology Transforming Ideas into Reality Empowering Brands with
          Engaging Ridda Agency
        </h2>
        <p className="about-subtext lh24 ls1 mb32">
          At our web design agency, we specialize in creating visually stunning
          and highly functional websites that help businesses stand out in the
          digital world. Our team of talented designers and developers are
          passionate about crafting
        </p>
        <ul className="about-points df fww fw5 mb32">
          <li className="about-items df aic flx50 mb16">
            <FaCircleCheck className="mr8" />
            Digital Product Design
          </li>
          <li className="about-items df aic flx50 mb16">
            <FaCircleCheck className="mr8" />
            Digital Product Design
          </li>
          <li className="about-items df aic flx50 mb16">
            <FaCircleCheck className="mr8" />
            Digital Product Design
          </li>
          <li className="about-items df aic flx50 mb16">
            <FaCircleCheck className="mr8" />
            Digital Product Design
          </li>
        </ul>
        <div className="dib">
          <Link
            href="#"
            className="talk-btn bg-h1 h40 plr24 df fw6 brd1 aic fc2 br8"
          >
            Explore Our Projects
          </Link>
        </div>
      </div>
      <div className="w100 pt48 mt40">
        <img src="images/about.jpg" className="w100" />
      </div>
    </div>
  );
}
