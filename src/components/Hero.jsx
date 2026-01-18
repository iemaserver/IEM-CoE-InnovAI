import React, { useEffect, useRef, useState } from 'react';
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
import logo from "../assets/Logo.png";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const canvasRef = useRef(null);
  const subtitle = "Unlocking the potential of <span class='highlight'>Artificial Intelligence.</span>";

  // Typing Effect
  useEffect(() => {
    let index = 0;
    let tempText = ""; 
    const typeInterval = setInterval(() => {
      if (index < subtitle.length) {
        if (subtitle[index] === "<") {
          const closingTagIndex = subtitle.indexOf(">", index);
          tempText += subtitle.slice(index, closingTagIndex + 1);
          index = closingTagIndex + 1;
        } else {
          tempText += subtitle[index];
          index++;
        }
        setTypedText(tempText);
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  // Neural Network Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)'; // Cyan
        ctx.fill();
      }
    }

    // Create Particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth / 10, 100); // Responsive count
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    initParticles();

    // Mouse Interaction
    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p, index) => {
        p.update();
        p.draw();

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        if (mouse.x) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 200) {
             ctx.beginPath();
            ctx.strokeStyle = `rgba(112, 0, 255, ${1 - distance / 200})`; // Purple connection to mouse
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            
            // Subtle attraction
            p.x -= dx * 0.005;
            p.y -= dy * 0.005;
          }
        }
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content container">
        <div className="text-section">
          <div className="logo-wrapper">
            <img src={logo} alt="InnovAI Logo" className="hero-logo" />
            <div className="logo-glow"></div>
          </div>
          <h1 className="hero-title">
            Innovate<span className="dot">.</span><br />
            Create<span className="dot">.</span><br />
            Inspire<span className="dot">.</span>
          </h1>
          <div className="subtitle-wrapper">
            <p className="subtitle" dangerouslySetInnerHTML={{ __html: typedText }} />
            <span className="cursor">|</span>
          </div>
        </div>
        
        <div className="visual-section">
          <div className="floating-grid">
            {/* Preserving the original collage structure but styling it better */}
            <div className="collage-group group-1">
              <img src={a1} alt="" className="grid-img" />
            </div>
            <div className="collage-group group-2">
              <img src={a2} alt="" className="grid-img" />
              <img src={a3} alt="" className="grid-img" />
            </div>
            <div className="collage-group group-3">
              <img src={a4} alt="" className="grid-img" />
              <img src={a5} alt="" className="grid-img" />
              <img src={a6} alt="" className="grid-img" />
            </div>
            <div className="collage-group group-4">
              <img src={a7} alt="" className="grid-img" />
              <img src={a8} alt="" className="grid-img" />
              <img src={a9} alt="" className="grid-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
