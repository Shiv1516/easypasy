import React from "react";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Image from "next/image";
function Project() {
  return (
    <div>
      <Header />
      <h2 className="inner-page-detail tac fs56 fw6 tdu pt48 mt40">
        Featured Projects
      </h2>
      <div className="project-page wrapper ptb48 df fww">
        <div className="project-cards-box flx33">
          <div className="project-cards mlr16 br8 ofh mb24">
            <Image
              src="/images/hiw-img-02.jpg"
              height={300}
              width={300}
              sizes="40vh"
              alt="project-img"
              className="w100 mb24"
            />

            <h3 className="project-card-heading mb">Lorem dcsf fsf sfdsff</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Project;
