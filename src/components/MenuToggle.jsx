import React, { useState } from "react";
import "./MenuToggle.css";

function MenuToggle({ toggleMenu }) { 
  // Note: toggleMenu prop is passed from Header but we also have local state for the hamburger itself
  // in the mobile view if we wanted self-contained. 
  // However, looking at Header.jsx, it passes toggleMenu to control a parent state? 
  // Actually, Header.jsx has [showMenu, setShowMenu] and passes toggleMenu function.
  // But MenuToggle.jsx implementation in the legacy code seemed to be self-contained too?
  // Let's stick to the prop if provided, or local state.
  // The previous file had local state `menuOpen`. 
  
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (toggleMenu) toggleMenu(); // Call parent toggle if exists
  };

  return (
    <>
      <div className="menu-toggle" onClick={handleToggle}>
        {isOpen ? "✕" : "☰"}
      </div>
      <ul className={`menu ${isOpen ? "show" : ""}`}>
        <li><a href="#home" onClick={handleToggle}>Home</a></li>
        <li><a href="#vision" onClick={handleToggle}>Vision</a></li>
        <li><a href="#research" onClick={handleToggle}>Research</a></li>
        <li><a href="#faculty" onClick={handleToggle}>Faculty</a></li>
        <li><a href="#gallery" onClick={handleToggle}>Gallery</a></li>
        <li><a href="#contact-us" onClick={handleToggle}>Contact</a></li>
      </ul>
    </>
  );
}

export default MenuToggle;