"use client";

import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Image from "next/image";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <h2 className="contact-page-detail tac fs56 fw6 tdu pt48 mt40">
        Start a Conversation
      </h2>
      <div className="component-container ptb48 mt40 wrapper df aic fww">
        <div className="flx50">
          <Image
            src="/images/contact-img.jpg"
            width={400}
            height={550}
            sizes="100vh"
            alt="contact-page"
            className="w100 ofh"
          />
        </div>
        <div className="contact-form flx1">
          <form className="contact-form-card mlr12 p32" onSubmit={handleSubmit}>
            <div className="name-form-box df aic fww jcsb mb24">
              <div className="nam-input flx48 df fdc">
                <label htmlFor="name-field" className="form-name mb16">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name-field"
                  placeholder=""
                  // value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-name-text h48 plr12 brd2 br8 mb8"
                />
              </div>
              <div className="nam-input flx48 df fdc">
                <label htmlFor="number-field" className="form-number mb16">
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder=""
                  id="number-field"
                  required
                  // value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="form-number-text h48 plr12 brd2 br8 mb8"
                />
              </div>
            </div>
            <div className="email-input df fdc mb24">
              <label htmlFor="email-field" className="form-email mb16">
                Email
              </label>
              <input
                type="email"
                placeholder=""
                id="email-field"
                required
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-email-text h48 plr12 brd2 br8 mb8"
              />
            </div>
            <div className="subject-input df fdc mb24">
              <label htmlFor="subject-field" className="form-subject mb16">
                Subject
              </label>
              <input
                type="text"
                placeholder=""
                id="subject-field"
                required
                // value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-subject-text h48 plr12 brd2 br8 mb8"
              />
            </div>
            <div className="text-input df fdc mb32">
              <label htmlFor="message-field" className="form-text mb16">
                Your Message
              </label>
              <textarea
                name="text"
                id="message-field"
                // value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-subject-text pt12 plr12 brd2 br4 mb8 rn"
                rows="11"
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn fc3 fc-h2 cp transit2 df h48 aic jcc br8 bg2 bg-h2 df w100"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
