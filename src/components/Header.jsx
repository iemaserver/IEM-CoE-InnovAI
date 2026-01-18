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
    // Sequence Timeline
    const openTimer = setTimeout(() => setScrollState("open"), 1000); 
    const closeTimer = setTimeout(() => setScrollState("closing"), 5000); 
    const closedTimer = setTimeout(() => setScrollState("closed"), 6000); 

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
      clearTimeout(closedTimer);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        
        {/* Navigation - Now on the LEFT */}
        <nav className="nav">
          <MenuToggle toggleMenu={toggleMenu} />
        </nav>

        {/* Animated Logo Scroll Container - Now on the RIGHT */}
        <div className={`logo-scroll-container ${scrollState}`}>
          <div className="scroll-bar left"></div>
          <div className="scroll-content">
            <div className="hologram-scan-line"></div>
            <div className="shine-effect"></div>
            {/* Using a filter-based approach to simulate SVG/Analysis look */}
            <div className="logo-wrapper-analysis">
               <img src={Logo1} alt="IEM Logo" className="header-logo" />
            </div>
          </div>
          <div className="scroll-bar right"></div>
        </div>

      </div>
    </header>
  );
}

export default Header;
