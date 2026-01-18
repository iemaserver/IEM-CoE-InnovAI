import React, { useState, useEffect } from "react";
import Logo1 from "../assets/logo1.png";
import MenuToggle from "./MenuToggle";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollState, setScrollState] = useState("opening"); // opening, generating, open, closing, closed

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // Precise Sequence Timeline
    // 1. Opening: Handles appear (0ms)
    // 2. Generating: Handles separate & Laser scans logo (800ms)
    const genTimer = setTimeout(() => setScrollState("generating"), 800); 
    
    // 3. Open: Scan complete, logo fully visible, hologram stabilizes (3000ms)
    const openTimer = setTimeout(() => setScrollState("open"), 3000); 

    // 4. Closing: Handles fade out (6000ms)
    const closeTimer = setTimeout(() => setScrollState("closing"), 6000); 
    
    // 5. Closed: Clean state (7000ms)
    const closedTimer = setTimeout(() => setScrollState("closed"), 7000); 

    return () => {
      clearTimeout(genTimer);
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

        {/* AI GENERATION SCROLL */}
        <div className={`logo-scroll-container ${scrollState}`}>
          
          {/* Left Energy Core */}
          <div className="scroll-handle left">
            <div className="core-beam"></div>
          </div>

          {/* Holographic Projection Area */}
          <div className="hologram-screen">
            <div className="digital-grid"></div>
            
            {/* The Scanning Laser */}
            <div className="scan-laser-line"></div>

            {/* The Logo Being Generated */}
            <div className="logo-construct">
              <img src={Logo1} alt="IEM Logo" className="header-logo" />
            </div>
          </div>

          {/* Right Energy Core */}
          <div className="scroll-handle right">
            <div className="core-beam"></div>
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;
