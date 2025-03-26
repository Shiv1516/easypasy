"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { id: 1, src: "/images/testimonial-01.png", alt: "Testimonial 1" },
  { id: 2, src: "/images/testimonial-02.png", alt: "Testimonial 2" },
  { id: 3, src: "/images/testimonial-01.png", alt: "Testimonial 3" },
  { id: 4, src: "/images/testimonial-02.png", alt: "Testimonial 4" },
  { id: 5, src: "/images/testimonial-01.png", alt: "Testimonial 5" },
  { id: 6, src: "/images/testimonial-02.png", alt: "Testimonial 6" },
  { id: 7, src: "/images/testimonial-01.png", alt: "Testimonial 7" },
  { id: 8, src: "/images/testimonial-02.png", alt: "Testimonial 8" },
];

const testimonials1 = [
  {
    id: 1,
    text: "Working with Ridda has been a game-changer for our social media presence. Their strategic approach and attention to detail have helped us reach new heights.",
    author: "Randall J. Ferguson",
    position: "CEO & Founder",
    logo: "/images/testimonial-01.png",
    avatar: "/images/author.jpg",
  },
  {
    id: 2,
    text: "Ridda's team is incredibly talented! They crafted a stunning campaign that boosted our engagement by 150% in just three months.",
    author: "Sophia Patel",
    position: "Marketing Director",
    logo: "/images/testimonial-02.png",
    avatar: "/images/author.jpg",
  },
  {
    id: 3,
    text: "Their ability to analyze data and create meaningful content is outstanding. We've seen a significant ROI since partnering with them.",
    author: "James Carter",
    position: "Startup Founder",
    logo: "/images/testimonial-01.png",
    avatar: "/images/author.jpg",
  },
];
export default function Testmonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

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
        <div className="text-cards flx50 df fdc plr32">
          <div className="slider-container">
            <Slider {...settings1}>
              {testimonials1.map((item) => (
                <div className="text-card-container plr16">
                  <div key={item.id} className="text-card brd2 p24 br8">
                    <div className="dtext-card-img df jce">
                      <Image
                        src={item.logo}
                        width={150}
                        height={40}
                        alt="testimonial icon"
                        className="ofh mb24"
                      />
                    </div>
                    <p className="text-card-content fw6 lh28 mb24">
                      {item.text}
                    </p>
                    <div className="text-card-person df aic">
                      <Image
                        src={item.avatar}
                        width={60}
                        height={60}
                        alt="client-icon"
                        className="br50 brd4 mr16"
                      />
                      <h5 className="fw7">
                        {item.author}{" "}
                        <span className="fw5 fs14">/{item.position}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="all-partner-list pt32 tac">
        <h4 className="all-par-cards fw7 mb32 fs20">
          Trusted by industry leaders
        </h4>
        <div className="slider-container">
          <Slider {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="slider-item tac">
                <div className="df jcc ">
                  <Image
                    src={item.src}
                    width={150}
                    height={40}
                    alt={item.alt}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
