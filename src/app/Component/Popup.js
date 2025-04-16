import React from "react";

export default function Popup({ onClose }) {
  const handleViewServices = () => {
    document.getElementById("service")?.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container animated-popup">
        <div className="popup-icon">💼</div>
        <h2 className="popup-title">Explore Our Services</h2>
        <p className="popup-text">
          We provide custom web development, CRM solutions, and smart business
          tools designed to boost efficiency, automate workflows, and enhance
          your digital presence — all tailored to help your business grow faster
          and smarter.
        </p>
        <div className="popup-buttons">
          <button className="popup-btn-primary" onClick={handleViewServices}>
            View Services
          </button>
          <button className="popup-btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
