import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";

export default function Popup({ onClose }) {
  const handleViewServices = () => {
    document.getElementById("service")?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };
  const handleViewProject = () => {
    document
      .getElementById("popularWork")
      ?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container animated-popup">
        <div className="popup-icon">💼</div>
        <h2 className="popup-title">Explore Our Services</h2>
        <p className="popup-text">
          We offer custom web development, app development, and CRM solutions
          tailored to your business needs. From building and maintaining
          websites to regular updates and smart automation tools, I provide
          everything you need to grow online — all at a reasonable cost. I focus
          on quality, reliability, and excellent customer care to ensure your
          digital presence is always in good hands.
        </p>
        <div className="mb24">
          <Link href="https://in.linkedin.com/" className="social-items mr12">
            <GrLinkedinOption className="brd1 p12 fs22 br50 bg-h3 fc-h2 transit1" />
          </Link>
          <Link href="https://www.instagram.com/" className="social-items mr12">
            <FaInstagram className="brd1 p12 fs22 br50 bg-h3 fc-h2 transit1" />
          </Link>
          <Link href="https://www.x.com/" className="social-items mr12">
            <FaXTwitter className="brd1 p12 fs22 br50 bg-h3 fc-h2 transit1" />
          </Link>
          <Link href="https://www.facebook.com/" className="social-items mr12">
            <FaFacebookF className="brd1 p12 fs22 br50 bg-h3 fc-h2 transit1" />
          </Link>
        </div>
        <div className="popup-buttons">
          <button className="popup-btn-primary" onClick={handleViewServices}>
            View Services
          </button>
          <button className="popup-btn-primary" onClick={handleViewProject}>
            Explore Projects
          </button>
          <button className="popup-btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
