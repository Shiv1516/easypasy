import React from "react";
import Image from "next/image";

export default function Hiw() {
  return (
    <div className="hiw-section bg1">
      <div className="hiw-container wrapper tac ptb90 fc1 brd-b2">
        <h4 className="hiw-subheading p8 ls1 brd1 bg4 dib fs14 br8 fw6 mb16">
          How IT Works
        </h4>
        <h2 className="hiw-main-text fs40 fw7 lh48 mb40">
          Step by Step Working Process
        </h2>
        <div className="hiw-cards df fww pt32 pr aisc">
          <img src="/images/work-step-line.png" className="hiw-bg-img pa" />
          <div className="hiw-card-box flx25 df">
            <div className="hiw-card-container mlr16">
              <div className="card-img">
                <Image
                  src="/images/work-process.jpg"
                  width={270}
                  height={170}
                  alt="work-process-img"
                  className="hiw-image br8 "
                />
              </div>
              <div className="circle bef pr"></div>

              <div className="card-text plr16 ptb32 brd3 br8">
                <h5 className="card-text-heading mb24 fs22 fw6 mlr24 lh30">
                  Discovery and Strategy
                </h5>
                <p className="card-text-subheading lh28">
                  We begin by understanding your brand, goals, and target
                  audience competitive
                </p>
              </div>
            </div>
          </div>
          <div className="hiw-card-box flx25 df">
            <div className="hiw-card-container mlr16">
              <div className="card-text plr16 ptb32 brd3 br8">
                <h5 className="card-text-heading mb24 fs22 fw6 mlr24 lh30">
                  Discovery and Strategy
                </h5>
                <p className="card-text-subheading lh28">
                  We begin by understanding your brand, goals, and target
                  audience competitive
                </p>
              </div>
              <div className="circle bef pr"></div>
              <div className="card-img">
                <Image
                  src="/images/work-process.jpg"
                  width={270}
                  height={170}
                  alt="work-process-img"
                  className="hiw-image br8"
                />
              </div>
            </div>
          </div>
          <div className="hiw-card-box flx25 df">
            <div className="hiw-card-container mlr16">
              <div className="card-img">
                <Image
                  src="/images/work-process.jpg"
                  width={270}
                  height={170}
                  alt="work-process-img"
                  className="hiw-image br8"
                />
              </div>
              <div className="circle bef pr"></div>

              <div className="card-text plr16 ptb32 brd3 br8">
                <h5 className="card-text-heading mb24 fs22 fw6 mlr24 lh30">
                  Discovery and Strategy
                </h5>
                <p className="card-text-subheading lh28">
                  We begin by understanding your brand, goals, and target
                  audience competitive
                </p>
              </div>
            </div>
          </div>
          <div className="hiw-card-box flx25 df">
            <div className="hiw-card-container mlr16">
              <div className="card-text plr16 ptb32 brd3 br8">
                <h5 className="card-text-heading mb24 fs22 fw6 mlr24 lh30">
                  Discovery and Strategy
                </h5>
                <p className="card-text-subheading lh28">
                  We begin by understanding your brand, goals, and target
                  audience competitive
                </p>
              </div>
              <div className="circle bef pr"></div>
              <div className="card-img">
                <Image
                  src="/images/work-process.jpg"
                  width={270}
                  height={170}
                  alt="work-process-img"
                  className="hiw-image br8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
