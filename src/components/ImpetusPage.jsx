import React, { useEffect } from "react";
import "./ImpetusPage.css";
import Header from "./Header";
import Footer from "./Footer";
import g1 from "../assets/new_g1.jpg"; 
import g2 from "../assets/new_g2.jpg"; 
import g3 from "../assets/new_g3.png"; // New Screenshot 1
import g4 from "../assets/new_g4.png"; // New Screenshot 2

// Faculty Images
import teacherMoutushi from "../assets/teacher3.jpg";
import teacherAnindita from "../assets/teacher4.jpg";

function ImpetusPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="impetus-page">
        
        {/* Hero Section */}
        <section className="impetus-hero">
          <div className="hero-overlay"></div>
          <div className="container">
            <span className="badge">POST EVENT REPORT</span>
            <h1 className="glitch-text" data-text="IMPETUS 2026">IMPETUS 2026</h1>
            <h2 className="sub-title">An Open Innovation Hackathon</h2>
            <div className="organizers">
              <p>Organized by <span className="highlight">GDG On Campus IEM</span></p>
              <p>in association with <span className="highlight">InnovAI Center of Excellence</span></p>
            </div>
          </div>
        </section>

        {/* Stats Dashboard */}
        <section className="impetus-stats">
          <div className="container">
            <div className="stat-card">
              <div className="stat-number" data-target="421">421</div>
              <div className="stat-label">Participants</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="236">236</div>
              <div className="stat-label">Teams</div>
            </div>
            <div className="stat-card">
              <div className="stat-number" data-target="17">17</div>
              <div className="stat-label">States Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">13</div>
              <div className="stat-label">Finalists</div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="impetus-content">
          <div className="container">
            <div className="content-grid">
              
              <div className="text-block">
                <h3>Overview</h3>
                <p>
                  IMPETUS was a large-scale innovation-based hackathon aimed to empower student innovators 
                  to build real-world problem-solving projects. Conducted from <strong>11th Dec 2025 to 12th Jan 2026</strong>, 
                  it was part of the official campaign by <strong>Google Developer Groups India</strong>.
                </p>
              </div>

              <div className="text-block">
                <h3>Global Reach</h3>
                <p>
                  Witnessing massive engagement, IMPETUS drew participants from <strong>17 States/UTs</strong> across India, 
                  including Andhra Pradesh, Delhi, Maharashtra, and West Bengal, along with international participation from <strong>Nigeria</strong>.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Highlights & Finale */}
        <section className="impetus-highlights">
          <div className="container">
            <h3>Grand Finale & Highlights</h3>
            <div className="highlight-grid">
              <div className="highlight-card">
                <div className="card-icon">🏆</div>
                <h4>Top 13 Finalists</h4>
                <p>Shortlisted from 236 teams based on innovation, feasibility, and impact.</p>
              </div>
              <div className="highlight-card">
                <div className="card-icon">📍</div>
                <h4>Science Auditorium</h4>
                <p>The offline final round was held at IEM Gurukul Campus, serving as the grand finale.</p>
              </div>
              <div className="highlight-card">
                <div className="card-icon">⚖️</div>
                <h4>Expert Judiciary</h4>
                <p>Evaluated by 4 Industry Experts on technical depth and product vision.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Gallery */}
        <section className="impetus-gallery">
          <div className="container">
            <h3>Event Snapshots</h3>
            <div className="gallery-grid">
              <div className="gallery-img-wrapper">
                <img src={g1} alt="Event Snapshot 1" />
              </div>
              <div className="gallery-img-wrapper">
                <img src={g2} alt="Event Snapshot 2" />
              </div>
              <div className="gallery-img-wrapper">
                <img src={g3} alt="Event Snapshot 3" />
              </div>
              <div className="gallery-img-wrapper">
                <img src={g4} alt="Event Snapshot 4" />
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Acknowledgement */}
        <section className="impetus-faculty">
          <div className="container">
            <h3>Special Thanks</h3>
            <div className="faculty-grid">
              <div className="faculty-card small">
                <div className="faculty-img-container">
                    <img src={teacherMoutushi} alt="Prof. (Dr.) Moutushi Singh" />
                </div>
                <h4>Prof. (Dr.) Moutushi Singh</h4>
                <p>Convenor, InnovAI CoE</p>
              </div>
              <div className="faculty-card small">
                <div className="faculty-img-container">
                    <img src={teacherAnindita} alt="Prof. Anindita Das Bhattacharjee" />
                </div>
                <h4>Prof. Anindita Das Bhattacharjee</h4>
                <p>Centre In-Charge, InnovAI CoE</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}

export default ImpetusPage;