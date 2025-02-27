import React from "react";
import Image from "next/image";

export default function Hiw() {
  return (
    <div className="hiw-section bg1 ptb48">
      <div className="hiw-container wrapper tac ptb40 fc1 ">
        <h4 className="hiw-subheading p8 ls1 brd1 bg4 dib fs14 br8 fw6 mb16">
          How IT Works
        </h4>
        <h2 className="hiw-main-text fs40 fw7 lh48 mb40">
          Step by Step Working Process
        </h2>
        <div className="hiw-cards df fww pt24">
          <div className="hiw-card-container flx25">
            <div className="card-img">
              <Image
                src="/images/work-process.jpg"
                width={310}
                height={170}
                alt="work-process-img"
                className="hiw-image br8 mb12"
              />
            </div>
            <div>
              
            </div>

            <div className="card-text p16 brd3 br8">
              <h5 className="card-text-heading mb24 fs22 fw6 mlr24 lh30">
                Discovery and Strategy
              </h5>
              <p className="card-text-subheading lh24">
                We begin by understanding your brand, goals, and target audience
                competitive
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
