import React from "react"
import { FaCalendarAlt } from "react-icons/fa";
import { GoArrowDownRight } from "react-icons/go";
import Image from "next/image";


export default function Blogs(){
    return(<div className="blogs-section ptb48 tac wrapper brd-b1">
          <h4 className="blog-subheading p8 ls1 brd2 dib fs14 br8 fw6 fc2 mb16">
            Services
          </h4>
          <h2 className="blog-main-text fs40 fw7 lh48 mb40">
            Creative & Modern Services
          </h2>
          <ul className="all-blogs pt32">
            <li className="blog-items  plr32 brd2 ptb32 transit1 cp">
                <div className="df ais jcsb mb16">
                    <h4 className="blog-number ls1 fs14 br8 fw6 df">
                        <FaCalendarAlt  className="mr8"/> September 15, 2024
                    </h4>
                    <h2 className="blog-heading fw6 flx60 tal fs22 fw6 ls28">
                        How to Craft they Winning Socials Media Strategy from Scratch
                    </h2>
                    <GoArrowDownRight  className="blog-icon fs24 transit2 " />
                </div>
              <div className="blog-hidd-container dn transit2">
              <div className="blog-inner-container flx50 mlra df aic pt24">
                    <p className="blog-hidden-text lh24 tal mr12">Web design agency dedicated creating visually up highly   functional websites that help businesses out landscape combining creative design

                    </p>
                <Image src="/images/blog-timeline1.jpg" 
                    width={250}
                    height={150} 
                    alt="Blog-image"/>
              </div> 
              </div>
            </li>
          </ul>
        </div>)
}