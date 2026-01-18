import React, { useState, useEffect } from "react";
import Logo1 from "../assets/logo1.png";
import MenuToggle from "./MenuToggle";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollState, setScrollState] = useState("opening"); // opening, open, closing, closed

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // Advanced Sequence Timeline
    const openTimer = setTimeout(() => setScrollState("open"), 1200); // Allow time for expansion
    const closeTimer = setTimeout(() => setScrollState("closing"), 6000); // Longer display time
    const closedTimer = setTimeout(() => setScrollState("closed"), 7000); // Final state

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
      clearTimeout(closedTimer);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        
        <nav className="nav">
          <MenuToggle toggleMenu={toggleMenu} />
        </nav>

        {/* ULTRA-ENHANCED LOGO SCROLL */}
        <div className={`logo-scroll-container ${scrollState}`}>
          
          {/* Left Energy Core */}
          <div className="scroll-handle left">
            <div className="core-glow"></div>
          </div>

          {/* Holographic Projection Screen */}
          <div className="hologram-screen">
            <div className="digital-grid"></div>
            <div className="scan-beam"></div>
            
            {/* Multi-Layered Glitch Logo */}
            <div className="logo-construct">
              {/* Cyan Channel */}
              <img src={Logo1} alt="" className="logo-layer glitch-cyan" />
              {/* Violet Channel */}
              <img src={Logo1} alt="" className="logo-layer glitch-violet" />
              {/* Main Logo */}
              <img src={Logo1} alt="IEM Logo" className="logo-layer base" />
            </div>
          </div>

          {/* Right Energy Core */}
          <div className="scroll-handle right">
            <div className="core-glow"></div>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;