# Shared UI Components

The project uses custom React components and vanilla CSS; it has no external component library or formal primitive set. The reusable interactive navigation component is included below.

## `src/components/MenuToggle.jsx` — `MenuToggle`

Responsive navigation menu used by the shared header. Props: `toggleMenu` callback.

```jsx
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
        {isOpen ? "âœ•" : "â˜°"}
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
```

## `src/components/ContactUs1.jsx` — `ContactUs1`

Reusable contact section rendered inside the shared footer.

```jsx
import React from "react";
import "./ContactUs.css";

function ContactUs1() {
  return (
    <section className="contact-us" id="contact-us">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Get in touch with us to learn more about our research and initiatives.</p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Address</h3>
            <p>Institute of Engineering & Management, Kolkata, India</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>innovai@iem.edu.in</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>+91 33 2357 2995</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs1;
```
