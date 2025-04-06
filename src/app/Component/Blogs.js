import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { GoArrowDownRight } from "react-icons/go";
import Image from "next/image";

export default function Blogs() {
  return (
    <div className="blogs-section pt48 tac wrapper brd-b1 ofh" id="blog">
      <h4 className="blog-subheading p8 ls1 brd2 dib fs14 br8 fw6 fc2 mb16">
        Blog & News
      </h4>
      <h2 className="blog-main-text fs40 fw7 lh48 mb40">
        Explore Latest Insights
      </h2>
      <ul className="all-blogs pt32">
        <li className="blog-items  plr32 brd2 ptb32 transit1 cp">
          <div className="df ais jcsb mb16">
            <h4 className="blog-number ls1 fs14 br8 fw6 df">
              <FaCalendarAlt className="mr8" /> September 03, 2023
            </h4>
            <h2 className="blog-heading fw6 flx60 tal fs22 fw6 ls28">
              How to Craft a Winning Social Media Strategy from Scratch
            </h2>
            <GoArrowDownRight className="blog-icon fs24 transit2 " />
          </div>
          <div className="blog-hidd-container dn transit2">
            <div className="blog-inner-container flx50 mlra df aic pt24">
              <p className="blog-hidden-text lh24 tal mr12">
                We help brands build impactful digital strategies by combining
                design, development, and analytics — empowering long-term growth
                and stronger audience connection.
              </p>
              <Image
                src="/images/blog-img-01.jpg"
                width={250}
                height={150}
                alt="Blog-image"
              />
            </div>
          </div>
        </li>
        <li className="blog-items  plr32 brd2 ptb32 transit1 cp">
          <div className="df ais jcsb mb16">
            <h4 className="blog-number ls1 fs14 br8 fw6 df">
              <FaCalendarAlt className="mr8" /> December 05, 2023
            </h4>
            <h2 className="blog-heading fw6 flx60 tal fs22 fw6 ls28">
              Why Your Business Needs a Custom Website in 2025
            </h2>
            <GoArrowDownRight className="blog-icon fs24 transit2 " />
          </div>
          <div className="blog-hidd-container dn transit2">
            <div className="blog-inner-container flx50 mlra df aic pt24">
              <p className="blog-hidden-text lh24 tal mr12">
                Custom-built websites are key to performance, scalability, and
                brand authority in a fast-changing digital world.
              </p>
              <Image
                src="/images/blog-img-02.jpg"
                width={250}
                height={150}
                alt="Blog-image"
              />
            </div>
          </div>
        </li>
        <li className="blog-items  plr32 brd2 ptb32 transit1 cp">
          <div className="df ais jcsb mb16">
            <h4 className="blog-number ls1 fs14 br8 fw6 df">
              <FaCalendarAlt className="mr8" /> January 25, 2024
            </h4>
            <h2 className="blog-heading fw6 flx60 tal fs22 fw6 ls28">
              CRM Development: Turning Data into Business Growth
            </h2>
            <GoArrowDownRight className="blog-icon fs24 transit2 " />
          </div>
          <div className="blog-hidd-container dn transit2">
            <div className="blog-inner-container flx50 mlra df aic pt24">
              <p className="blog-hidden-text lh24 tal mr12">
                Discover how a well-designed CRM can streamline customer
                relationships, improve retention, and boost productivity.
              </p>
              <Image
                src="/images/blog-img-03.jpg"
                width={250}
                height={150}
                alt="Blog-image"
              />
            </div>
          </div>
        </li>
        <li className="blog-items  plr32 brd2 ptb32 transit1 cp">
          <div className="df ais jcsb mb16">
            <h4 className="blog-number ls1 fs14 br8 fw6 df">
              <FaCalendarAlt className="mr8" /> November 30, 2024
            </h4>
            <h2 className="blog-heading fw6 flx60 tal fs22 fw6 ls28">
              Future-Proofing Apps: Trends & Tech to Watch in 2025
            </h2>
            <GoArrowDownRight className="blog-icon fs24 transit2 " />
          </div>
          <div className="blog-hidd-container dn transit2">
            <div className="blog-inner-container flx50 mlra df aic pt24">
              <p className="blog-hidden-text lh24 tal mr12">
                Learn what’s next in mobile and web app development — and how to
                build solutions that scale and evolve.
              </p>
              <Image
                src="/images/blog-img-04.jpg"
                width={250}
                height={150}
                alt="Blog-image"
              />
            </div>
          </div>
        </li>
        <li className="blog-items  plr32 brd2 ptb32 transit1 cp">
          <div className="df ais jcsb mb16">
            <h4 className="blog-number ls1 fs14 br8 fw6 df">
              <FaCalendarAlt className="mr8" /> February 30, 2024
            </h4>
            <h2 className="blog-heading fw6 flx60 tal fs22 fw6 ls28">
              The Power of Seamless UX/UI in Digital Product Success
            </h2>
            <GoArrowDownRight className="blog-icon fs24 transit2 " />
          </div>
          <div className="blog-hidd-container dn transit2">
            <div className="blog-inner-container flx50 mlra df aic pt24">
              <p className="blog-hidden-text lh24 tal mr12">
                Great design isn’t just about looks — it’s about creating
                intuitive, goal-driven experiences your users love.
              </p>
              <Image
                src="/images/blog-timeline1.jpg"
                width={250}
                height={150}
                alt="Blog-image"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
