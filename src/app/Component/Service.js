import React from "react";
import { MdArrowOutward } from "react-icons/md";

export default function Service() {
  return <div className="service-section ptb48 tac wrapper brd-b1">
     <h4 className="about-subheading p8 ls1 brd1 dib fs14 br8 fw6 fc2 mb16">
         Services
        </h4>
        <h2 className="about-main-text fs40 fw7 lh48 mb40">
        Creative & Modern Services
      </h2>
      <ul className="all-service pt32">
<li className="services-items df aic jcsb pl32 pr16 brd2 ptb32">
<h4 className="service-number p8 ls1 brd1 dib fs14 br8 fw6 fc2 mb16">
         01
        </h4>
        <h2 className="service-heading fw6">
          Web Design
        </h2><MdArrowOutward className="service-icon fs24"/>

</li>
<li className="services-items df aic jcsb pl32 pr16 brd2 ptb32">
<h4 className="service-number p8 ls1 brd1 dib fs14 br8 fw6 fc2 mb16">
         01
        </h4>
        <h2 className="service-heading fw6">
          Web Design
        </h2><MdArrowOutward className="service-icon fs24"/>

</li>
<li className="services-items df aic jcsb pl32 pr16 brd2 ptb32">
<h4 className="service-number p8 ls1 brd1 dib fs14 br8 fw6 fc2 mb16">
         01
        </h4>
        <h2 className="service-heading fw6">
          Web Design
        </h2><MdArrowOutward className="service-icon fs24"/>

</li>

      </ul>
  </div>;
}
