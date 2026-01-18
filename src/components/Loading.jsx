import React, { useEffect, useState } from "react";
import "./Loading.css";
import logo from "../assets/Logo.png"; // Importing the actual logo

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="loading-container">
      <div className="loader-content">
        {/* Animated Logo Container */}
        <div className="logo-anim-container">
          <img src={logo} alt="InnovAI Logo" className="loading-logo" />
          <div className="logo-ring ring-1"></div>
          <div className="logo-ring ring-2"></div>
        </div>

        {/* Text Animation */}
        <div className="loading-text-wrapper">
          <h1 className="brand-name">
            innov<span className="highlight">AI</span>
          </h1>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;