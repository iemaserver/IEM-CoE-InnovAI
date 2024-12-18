// components/Vision.js
import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal"; // Import ScrollReveal
import "./Vision.css"; // Specific CSS for Vision section
import Research1 from "./Research1";
import Faculty1 from "./Faculty1";
import innovationImg from "../assets/V1.png"; // Image for Innovation
import collaborationImg from "../assets/V2.png"; // Image for Collaboration
import impactImg from "../assets/V3.png"; // Image for Impact
import d1Img from "../assets/d1.png"; // Import d1.png
import d2Img from "../assets/d2.png"; // Import d2.png
import d3Img from "../assets/d3.png"; // Import d3.png
import d4Img from "../assets/d4.png"; // Import d4.png

function Vision() {
  const [currentBg, setCurrentBg] = useState(d1Img); // Set initial background image

  // Background image change effect
  useEffect(() => {
    const images = [d1Img, d2Img, d3Img, d4Img];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % images.length;
      setCurrentBg(images[index]);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  useEffect(() => {
    // ScrollReveal animation
    ScrollReveal().reveal('.card', {
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: true,
    });
  }, []);

  return (
    <div className="wrapper" style={{ backgroundImage: `url(${currentBg})` }}>
      <section className="vision" id="vision">
        <div className="container">
          <h2 className="shining-text">Our Vision</h2>
          <p className="shining-text">
            To leverage cutting-edge AI to address global challenges and create a
            positive impact.
          </p>
          <div className="vision-cards">
            <div className="card">
              <img src={innovationImg} alt="Innovation" className="card-image" />
              <h3>Innovation</h3>
              <p>We drive to push the boundaries of research and development.</p>
            </div>
            <div className="card">
              <img src={impactImg} alt="Impact" className="card-image" />
              <h3>Impact</h3>
              <p>
                Our goal is to use AI to create meaningful solutions for societal
                issues.
              </p>
            </div>
            <div className="card">
              <img src={collaborationImg} alt="Collaboration" className="card-image" />
              <h3>Collaboration</h3>
              <p>
                We foster partnerships with leading institutions and organizations
                to amplify our reach.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Research1 />
      </section>
      <section>
        <Faculty1 />
      </section>
    </div>
  );
}

export default Vision;
