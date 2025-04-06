import React from "react";
import Image from "next/image";

export default function Hiw() {
  return (
    <div className="hiw-section bg1">
      <div
        className="hiw-container wrapper tac ptb90 fc1 brd-b2 aft pr"
        id="hiw"
      >
        <h4 className="hiw-subheading p8 ls1 brd1 bg3 dib fs14 br8 fw6 mb16">
          How IT Works
        </h4>
        <h2 className="hiw-main-text fs40 fw7 lh48 mb40">
          Step by Step Working Process
        </h2>
        <div className="hiw-cards df fww pt32 pr aisc zi2">
          <img src="/images/work-step-line.png" className="hiw-bg-img pa" />
          <div className="hiw-card-box flx25 df">
            <div className="hiw-card-container mlr16">
              <div className="card-img df">
                <Image
                  src="/images/hiw-img-02.jpg"
                  width={270}
                  height={170}
                  sizes="40vh"
                  alt="work-process-img"
                  className="hiw-image br8 w100"
                />
              </div>
              <div className="circle bef pr"></div>

              <div className="card-text plr12 ptb32 brd3 br8 transit2">
                <h5 className="card-text-heading mb24 fs22 fw6 mlr24 lh30">
                  Discovery and Planning
                </h5>
                <p className="card-text-subheading lh28">
                  We understand your goals, brand, and needs to build strong
                  foundations.
                </p>
              </div>
            </div>
          </div>
          <div className="hiw-card-box flx25 df">
            <div className="hiw-card-container mlr16">
              <div className="card-text plr12 ptb32 brd3 br8 bg-h1 fc-h1 transit2">
                <h5 className="card-text-heading mb24 fs22 fw6 mlr24 lh30">
                  Strategy and Design
                </h5>
                <p className="card-text-subheading lh28">
                  We design user-first interfaces aligned with business goals
                  and user behavior.
                </p>
              </div>
              <div className="circle bef pr"></div>
              <div className="card-img df">
                <Image
                  src="/images/hiw-img-01.jpg"
                  width={270}
                  height={170}
                  sizes="40vh"
                  alt="work-process-img"
                  className="hiw-image br8 w100"
                />
              </div>
            </div>
          </div>
          <div className="hiw-card-box flx25 df">
            <div className="hiw-card-container mlr16">
              <div className="card-img df">
                <Image
                  src="/images/hiw-img-04.jpg"
                  width={270}
                  height={170}
                  sizes="40vh"
                  alt="work-process-img"
                  className="hiw-image br8 w100"
                />
              </div>
              <div className="circle bef pr"></div>

              <div className="card-text plr16 ptb32 brd3 br8 bg-h1 fc-h1 transit2">
                <h5 className="card-text-heading mb24 fs22 fw6 mlr24 lh30">
                  Development and Integration
                </h5>
                <p className="card-text-subheading lh28">
                  We build scalable sites, apps, and CRMs with modern, seamless
                  integration.
                </p>
              </div>
            </div>
          </div>
          <div className="hiw-card-box flx25 df">
            <div className="hiw-card-container mlr16">
              <div className="card-text plr12 ptb32 brd3 br8 bg-h1 fc-h1 transit2">
                <h5 className="card-text-heading mb24 fs22 fw6 mlr24 lh30">
                  Testing and Launch
                </h5>
                <p className="card-text-subheading lh28">
                  We test performance, fix bugs, and ensure smooth launch with
                  support.
                </p>
              </div>
              <div className="circle bef pr"></div>
              <div className="card-img df">
                <Image
                  src="/images/hiw-img-03.jpg"
                  width={270}
                  height={170}
                  sizes="40vh"
                  alt="work-process-img"
                  className="hiw-image br8 w100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
