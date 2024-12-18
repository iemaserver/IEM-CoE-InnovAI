import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Gallery.css";

// Import gallery images
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";

// Image data array
const galleryData = [
  { id: 1, img: g1 },
  { id: 2, img: g2 },
  { id: 3, img: g3 },
  { id: 4, img: g4 },
  { id: 5, img: g5 },
  { id: 6, img: g6 },
  { id: 7, img: g7 },
  { id: 8, img: g8 },
];

function Gallery() {
  // ScrollReveal animation
  useEffect(() => {
    ScrollReveal().reveal(".gallery-item", {
      duration: 1500,
      scale: 0.95,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
      origin: "bottom",
      distance: "20px",
    });
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "2.5em",
            fontWeight: "bold",
            color: "#fff",
            textShadow: `
              0 0 10px rgba(123, 104, 238, 0.8), 
              0 0 15px rgba(173, 216, 230, 0.7), 
              0 0 20px rgba(75, 0, 130, 0.9)`,
            animation: "glowEffect 2s infinite alternate",
          }}
        >
          Gallery
        </h2>
        <div className="gallery-list">
          {galleryData.map((item) => (
            <div className="gallery-item" key={item.id}>
              <img
                src={item.img}
                alt={`Gallery ${item.id}`}
                className="gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
