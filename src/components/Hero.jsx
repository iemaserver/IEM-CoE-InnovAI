import React, { useEffect, useState } from 'react';
import './Hero.css';
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";
import a6 from "../assets/a6.jpg";
import a7 from "../assets/a7.jpg";
import a8 from "../assets/a8.jpg";
import a9 from "../assets/a9.jpg";
import a10 from "../assets/a10.jpg";
import logo from "../assets/logo.png";


function Hero() {
  const [typedText, setTypedText] = useState("");
  const subtitle = "Unnlocking the potential of artificial intelligence for a better tomorrow and prospects ";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < subtitle.length) {
        setTypedText((prevText) => prevText + subtitle[index]);
        index++;
      } else {
        clearInterval(typeInterval); // Clear interval when done
      }
    }, 100);

    return () => clearInterval(typeInterval); // Clean up interval
  }, [subtitle]);

  // Scroll reveal logic for images
  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.collage-image');
      images.forEach((image) => {
        const imageTop = image.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (imageTop < windowHeight - 50) {
          image.classList.add('reveal');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the reveal for images already in view
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="text-logo-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logon" />
        </div>
        <div className="text-container">
          <p className="subtitle">{typedText}</p>
        </div>
      </div>
      <div className="image-collage">
        <div className="ai-pattern">
          {/* Triangle for "A" */}
          <div className="a-triangle">
            <img src={a1} alt="A1" className="collage-image" />
            <div className="row">
              <img src={a2} alt="A2" className="collage-image" />
              <img src={a3} alt="A3" className="collage-image" />
            </div>
            <div className="row">
              <img src={a4} alt="A4" className="collage-image" />
              <img src={a5} alt="A5" className="collage-image" />
              <img src={a6} alt="A6" className="collage-image" />
            </div>
          </div>
          {/* Column for "I" */}
          <div className="i-column">
            <img src={a7} alt="I1" className="collage-image" />
            <img src={a8} alt="I2" className="collage-image" />
            <img src={a9} alt="I3" className="collage-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
