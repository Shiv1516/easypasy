import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="context-section wrapper df jcc aic brd-b1 " id="contact">
      <div className="context-contact-section w50 tac">
        <h2 className="contect-heading fs40 fw6 lh42 mb24">
          Get In Touch and start growing your startup today{" "}
        </h2>
        <p className="contect-subtext lh24 mb24 fs18">
          Have any questions? Don’t hesitate to contact us!
        </p>
        <div className="contect-button dib">
          <Link
            href="/contact"
            className="contact-btn h40 fw5 plr24 bg2 v-center fc2 br8"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
