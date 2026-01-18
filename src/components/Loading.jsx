import React, { useEffect, useState } from "react";
import "./Loading.css";
import logo from "../assets/Logo.png";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loader-content">
        {/* Animated Logo Container */}
        <div className="logo-anim-container">
          <img src={logo} alt="InnovAI Logo" className="loading-logo" />
          <div className="logo-ring ring-1"></div>
          <div className="logo-ring ring-2"></div>
        </div>

        {/* Enhanced Text Section */}
        <div className="loading-text-wrapper">
          <h1 className="brand-name">
            Innov<span className="highlight">AI</span>
          </h1>
          <h2 className="brand-subtitle">CENTER OF EXCELLENCE</h2>
          
          <div className="system-status">
            <span className="status-text">SYSTEM INITIALIZING</span>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
