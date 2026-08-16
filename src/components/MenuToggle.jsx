/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuToggle.css";

function MenuToggle({ toggleMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((current) => !current);
    if (toggleMenu) toggleMenu();
  };

  const closeMenu = () => {
    setIsOpen(false);
    if (toggleMenu && isOpen) toggleMenu();
  };

  return (
    <>
      <button
        type="button"
        className="menu-toggle"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls="primary-menu"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        <span aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
      </button>
      <ul className={`menu ${isOpen ? "show" : ""}`} id="primary-menu">
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
        <li><Link to="/impact" onClick={closeMenu}>Impact &amp; Reports</Link></li>
        <li><a href="/#research" onClick={closeMenu}>Research</a></li>
        <li><a href="/#faculty" onClick={closeMenu}>Faculty</a></li>
        <li><a href="/#gallery" onClick={closeMenu}>Gallery</a></li>
        <li><a href="/#contact-us" onClick={closeMenu}>Contact</a></li>
      </ul>
    </>
  );
}

export default MenuToggle;
