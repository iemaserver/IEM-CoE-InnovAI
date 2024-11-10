import React, { useEffect, useState } from 'react';
import './Hero.css';
import bloomVideo from "../assets/bloom.mp4";
import gloomVideo from "../assets/gloom.mp4"; // Import mobile video
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
  const [videoSource, setVideoSource] = useState(bloomVideo); // Track video source
  const subtitle = "Unlocking the potential of Artificial Intelligence.";

  useEffect(() => {
    let index = 0;
    let tempText = ""; // Store progressively typed text

    const typeText = () => {
      if (index < subtitle.length) {
        if (subtitle[index] === "<") {
          const closingTagIndex = subtitle.indexOf(">", index);
          tempText += subtitle.slice(index, closingTagIndex + 1); // Add the entire tag to the text
          setTypedText(tempText); // Update the typed text with the full tag
          index = closingTagIndex + 1; // Skip past the entire tag
        } else {
          tempText += subtitle[index]; // Add the next character
          setTypedText(tempText); // Update the state to reflect the new character
          index++; // Move to the next character
        }
      } else {
        clearInterval(typeInterval); // Stop the interval when done
      }
    };

    const typeInterval = setInterval(typeText, 100); // Type every 100 ms

    return () => clearInterval(typeInterval); // Clean up the interval on component unmount
  }, [subtitle]);

  // Scroll reveal logic for images
  useEffect(() => {
    const images = document.querySelectorAll('.collage-image');

    // Delay reveal for 2 seconds
    const revealImages = () => {
      images.forEach((image) => {
        image.classList.add('reveal');
      });
    };

    const timer = setTimeout(revealImages, 700); // 2000 ms delay

    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  // Detect screen size and switch video source for mobile devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSource(gloomVideo); // Use gloom.mp4 for mobile
      } else {
        setVideoSource(bloomVideo); // Use bloom.mp4 for larger screens
      }
    };

    handleResize(); // Check screen size on initial load
    window.addEventListener('resize', handleResize); // Update on window resize

    return () => window.removeEventListener('resize', handleResize); // Clean up the event listener
  }, []);

  return (
    <section className="hero">
      <video className="video-bg" src={videoSource} autoPlay muted loop playsInline />
      <div className="text-logo-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logon" />
        </div>
        <div className="text-container">
          {/* Safely render HTML inside typedText */}
          <p className="subtitle" dangerouslySetInnerHTML={{ __html: typedText }} />
        </div>
      </div>
      <div className="image-collage">
        <div className="ai-pattern">
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
