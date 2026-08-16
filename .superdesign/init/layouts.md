# Shared Layouts

## `src/App.jsx` — application shell and route switch

```jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Partnerships1 from "./components/Partnerships1";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import CustomCursor from "./components/CustomCursor";
import ImpetusPage from "./components/ImpetusPage"; // Import the new page

import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Keep a slight delay for the "Boot Sequence" effect to finish
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {!isLoaded ? (
        <Loading />
      ) : (
        <>
          <CustomCursor />
          {/* Main Routes Setup */}
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <main>
                  <Hero />
                  <Vision />
                  <Events />
                  <Gallery /> 
                  <Partnerships1 />
                </main>
                <Footer />
              </>
            } />
            
            {/* Dedicated Event Route */}
            <Route path="/events/impetus" element={<ImpetusPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
```

## `src/components/Header.jsx` — fixed header and navigation

```jsx
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
    const genTimer = setTimeout(() => setScrollState("generating"), 800); 
    const openTimer = setTimeout(() => setScrollState("open"), 3000); 
    const closeTimer = setTimeout(() => setScrollState("closing"), 6000); 
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
        <div className={`logo-scroll-container ${scrollState}`}>
          <div className="scroll-handle left"><div className="core-beam"></div></div>
          <div className="hologram-screen">
            <div className="digital-grid"></div>
            <div className="scan-laser-line"></div>
            <div className="logo-construct">
              <img src={Logo1} alt="IEM Logo" className="header-logo" />
            </div>
          </div>
          <div className="scroll-handle right"><div className="core-beam"></div></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
```

## `src/components/Footer.jsx` — shared footer

```jsx
import React from "react";
import FacebookIcon from "../assets/icons8-facebook.svg";
import TwitterIcon from "../assets/icons8-twitter.svg";
import InstagramIcon from "../assets/icons8-instagram.svg";
import ContactUs1 from "./ContactUs1";

import "./Footer.css"; // Footer specific styles

function Footer() {
  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="column-left">
          <ContactUs1 />
          <div className="container1">
            <p>&copy; 2024 All rights reserved | Website Designed by <a href="https://www.linkedin.com/in/sumitkumardas-ai/" target="_blank" rel="noopener noreferrer" className="designer-link">Sumit Kumar Das</a></p>
            <ul className="social-links">
              <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt="Facebook" /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="Twitter" /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="column-right"></div>
      </div>
    </footer>
  );
}

export default Footer;
```
