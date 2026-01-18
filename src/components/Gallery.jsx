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
  useEffect(() => {
    ScrollReveal().reveal(".gallery-item", {
      duration: 1000,
      scale: 0.95,
      opacity: 0,
      easing: "ease-in-out",
      reset: false, 
      origin: "bottom",
      distance: "20px",
      interval: 100 
    });
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-wrapper">
          <div className="gallery-list">
            {/* Original Set */}
            {galleryData.map((item) => (
              <div className="gallery-item" key={`original-${item.id}`}>
                <img
                  src={item.img}
                  alt={`Gallery ${item.id}`}
                  className="gallery-photo"
                />
              </div>
            ))}
            {/* Duplicated Set for Infinite Scroll */}
            {galleryData.map((item) => (
              <div className="gallery-item" key={`duplicate-${item.id}`}>
                <img
                  src={item.img}
                  alt={`Gallery ${item.id}`}
                  className="gallery-photo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;