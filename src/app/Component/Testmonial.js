import React from "react";
import Image from "next/image";
export default function Testmonial() {
  return (
    <div className="testmonial-section ptb40 wrapper brd2 br8">
      <div className="testmonial-container df fww ptb40 mb32">
        <div className="test-cards flx50 plr40">
          <h5 className="brd1 p12 fw6 dib br8 mb32">Out Testimonials</h5>
          <h2 className="fs40 lh48 fw7 mb32">
            1580+ Customer Say About Our Services
          </h2>
          <p className="lh24">
            A web design agency is dedicated to creating visually stunning and
            highly functional websites.
          </p>
        </div>
        <div className="flx50 df fdc plr32">
          <div className="m12 brd2 p24 br8">
            <div className="df jce">
              <Image
                src="/images/testimonial-01.png"
                width={150}
                height={40}
                alt="testimonial icon"
                className="ofh mb24"
              />
            </div>
            <p className="fw6 lh28 mb24">
              Working with Ridda has been game-changer for our social media
              presence. Their strategic to approach and attention too detail
              have helped us reach new heights
            </p>
            <div className="df aic">
              <Image
                src="/images/author.jpg"
                width={60}
                height={60}
                alt="client-icon"
                className="br50 brd4 mr16"
              />
              <h5 className="fw7 ">
                Randall J. Ferguson{" "}
                <span className="fw5 fs14">/CEO & Founder</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="all-partner-list pt32 tac">
        <h4 className="all-par-cards fw7 mb32 fs20">
          Trusted by industry leaders
        </h4>
        <ul className="all-par-list df fww jcsb">
          <li className="all-par-item flx16 tac df">
            <Image
              src="/images/testimonial-01.png"
              width={150}
              height={40}
              alt="testimonial icon"
              className="ofh w100 mlr16"
            />
          </li>
          <li className="all-par-item flx16 tac df">
            <Image
              src="/images/testimonial-02.png"
              width={150}
              height={40}
              alt="testimonial icon"
              className="ofh w100 mlr16"
            />
          </li>
          <li className="all-par-item flx16 tac df">
            <Image
              src="/images/testimonial-01.png"
              width={150}
              height={40}
              alt="testimonial icon"
              className="ofh w100 mlr16"
            />
          </li>
          <li className="all-par-item flx16 tac df">
            <Image
              src="/images/testimonial-02.png"
              width={150}
              height={40}
              alt="testimonial icon"
              className="ofh w100 mlr16"
            />
          </li>
          <li className="all-par-item flx16 tac df">
            <Image
              src="/images/testimonial-01.png"
              width={150}
              height={40}
              alt="testimonial icon"
              className="ofh w100 mlr16"
            />
          </li>
          <li className="all-par-item flx16 tac df">
            <Image
              src="/images/testimonial-02.png"
              width={150}
              height={40}
              alt="testimonial icon"
              className="ofh w100 mlr16"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
