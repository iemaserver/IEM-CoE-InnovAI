import React, { useState } from "react";
import "./MenuToggle.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger Icon */}
        </div>
        <ul className={menuOpen ? "menu show" : "menu"}>
          <li>
            <a href="#home" onClick={toggleMenu} title="Home">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li>
            <a href="#vision" onClick={toggleMenu} title="Vision">
              <i className="fas fa-eye"></i>
            </a>
          </li>
          <li>
            <a href="#research" onClick={toggleMenu} title="Research">
              <i className="fas fa-flask"></i>
            </a>
          </li>
          <li>
            <a href="#faculty" onClick={toggleMenu} title="Faculty">
              <i className="fas fa-users"></i>
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={toggleMenu} title="Gallery">
              <i className="fas fa-camera"></i>
            </a>
          </li>
          <li>
            <a href="#contact-us" onClick={toggleMenu} title="Contact Us">
              <i className="fas fa-question-circle"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
