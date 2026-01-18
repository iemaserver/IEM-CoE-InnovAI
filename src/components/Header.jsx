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
    const openTimer = setTimeout(() => setScrollState("open"), 1000); // Fully opened after 1s
    const closeTimer = setTimeout(() => setScrollState("closing"), 5000); // Start closing after 5s
    const closedTimer = setTimeout(() => setScrollState("closed"), 6000); // Fully closed state (logo remains, borders gone)

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
      clearTimeout(closedTimer);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        
        {/* Animated Logo Scroll Container */}
        <div className={`logo-scroll-container ${scrollState}`}>
          <div className="scroll-bar left"></div>
          <div className="scroll-content">
            <div className="shine-effect"></div>
            <img src={Logo1} alt="IEM Logo" className="header-logo" />
          </div>
          <div className="scroll-bar right"></div>
        </div>

        <nav className="nav">
          <MenuToggle toggleMenu={toggleMenu} />
        </nav>
      </div>
    </header>
  );
}

export default Header;