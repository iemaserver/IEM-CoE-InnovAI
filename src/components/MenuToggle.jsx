import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for SPA navigation
import "./MenuToggle.css";

function MenuToggle({ toggleMenu }) { 
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (toggleMenu) toggleMenu(); 
  };

  return (
    <>
      <div className="menu-toggle" onClick={handleToggle}>
        {isOpen ? "✕" : "☰"}
      </div>
      <ul className={`menu ${isOpen ? "show" : ""}`}>
        <li><Link to="/" onClick={handleToggle}>Home</Link></li>
        <li><Link to="/events/impetus" onClick={handleToggle} className="highlight-link">IMPETUS 2026</Link></li>
        <li><a href="/#vision" onClick={handleToggle}>Vision</a></li>
        <li><a href="/#research" onClick={handleToggle}>Research</a></li>
        <li><a href="/#faculty" onClick={handleToggle}>Faculty</a></li>
        <li><a href="/#gallery" onClick={handleToggle}>Gallery</a></li>
        <li><a href="/#contact-us" onClick={handleToggle}>Contact</a></li>
      </ul>
    </>
  );
}

export default MenuToggle;