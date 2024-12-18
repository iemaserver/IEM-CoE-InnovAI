// components/Research.js
import React from "react";
import "./Research.css";
import R1 from "../assets/R1.png"; // Machine Learning
import R2 from "../assets/R2.png"; // Remote Sensing
import R3 from "../assets/R3.png"; // Artificial Intelligence
import R4 from "../assets/R4.png"; // Projects

function Research1() {
  return (
    <section className="research" id="research">
      <div className="container">
        <h2>Research</h2>
        <p>We conduct groundbreaking research in various AI domains.</p>
        <div className="research-cards">
          <div className="card">
            <img src={R1} alt="Machine Learning" className="card-image" />
            <h3>Machine Learning</h3>
            <p>
              Advancing the field by designing innovative algorithms that learn
              from data and adapt to complex challenges.
            </p>
          </div>
          <div className="card">
            <img src={R2} alt="Remote Sensing" className="card-image" />
            <h3>Remote Sensing</h3>
            <p>
              Harnessing satellite data and geospatial technologies for
              environmental monitoring and disaster management.
            </p>
          </div>
          <div className="card">
            <img src={R3} alt="Artificial Intelligence" className="card-image" />
            <h3>Artificial Intelligence</h3>
            <p>
              Pioneering the development of intelligent systems that simulate
              human reasoning and decision-making.
            </p>
          </div>
          <div className="card">
            <img src={R4} alt="Projects" className="card-image" />
            <h3>Projects</h3>
            <p>
              Explore our latest projects that demonstrate cutting-edge
              advancements in AI and technology.
            </p>
            {/* Correct Vite path to Projects.html */}
            <a
              href="/assets/Projects.html"
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Research1;
