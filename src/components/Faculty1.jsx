import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "./Faculty.css";

// Import faculty images
import DrMoutushiSingh from "../assets/teacher1.jpg";
import AninditaDasBhattacharjee from "../assets/teacher2.jpg";

function Faculty1() {
  useEffect(() => {
    // Apply ScrollReveal animation for faculty images
    ScrollReveal().reveal('.faculty-member', {
      duration: 1500,     // Animation lasts for 1.5 seconds
      scale: 0.8,         // Start slightly smaller and grow to full size
      opacity: 0,         // Start fully transparent
      easing: 'ease-in-out', // Smooth easing function
      reset: true,        // Resets the animation when scrolled back into view
      origin: 'center',   // Emerge from the center
    });
  }, []);

  return (
    <section className="faculty" id="faculty">
      <div className="container">
        <h2>Our Faculty</h2>
        <div className="faculty-list">
          <div className="faculty-member">
            <img
              src={DrMoutushiSingh}
              alt="Dr. Moutushi Singh"
              className="faculty-photo"
            />
            <h3>Dr. Moutushi Singh</h3>
            <p>Convenor</p>
          </div>

          <div className="faculty-member">
            <img
              src={AninditaDasBhattacharjee}
              alt="Ms. Anindita Das Bhattacharjee"
              className="faculty-photo"
            />
            <h3>Ms. Anindita Das Bhattacharjee</h3>
            <p>Centre-in Charge</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faculty1;
