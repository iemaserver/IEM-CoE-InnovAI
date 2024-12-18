import React, { useEffect } from "react";
import "./Faculty.css";

import SatyajitChakrabartiPresident from "../assets/teacher1.jpg";
import SatyajitChakrabartiChairman from "../assets/teacher2.jpg";
import DrMoutushiSingh from "../assets/teacher3.jpg";
import AninditaDasBhattacharjee from "../assets/teacher4.jpg";
import DrSukanyaMukherjee from "../assets/teacher5.jpg";
import DrSanchitaGhosh from "../assets/teacher6.jpg";
import ProfKajariSur from "../assets/teacher7.jpg";
import DrSoumyenduSekharBandyopadhyay from "../assets/teacher8.jpg";
import DrDebapriyaRoy from "../assets/teacher9.jpg";
import DrKoushikDutta from "../assets/teacher10.jpg";
import DrMonalisaGhosh from "../assets/teacher11.jpg";
import DrSanandaChatterjee from "../assets/teacher12.jpg";
import DrBaisakhiDas from "../assets/teacher13.jpg";
import DrRupayanDas from "../assets/teacher14.jpg";
import DrSusovanJana from "../assets/teacher15.jpg";

// Faculty data array
const facultyData = [
  { name: "Prof. (Dr.) Satyajit Chakrabarti", position: "President", img: SatyajitChakrabartiPresident },
  { name: "Prof. (Dr.) Satyajit Chakrabarti", position: "Chairman", img: SatyajitChakrabartiChairman },
  { name: "Prof. (Dr.) Moutushi Singh", position: "Convenor", img: DrMoutushiSingh },
  { name: "Prof. Anindita Das Bhattacharjee", position: "Centre In-Charge", img: AninditaDasBhattacharjee },
  { name: "Prof. (Dr.) Sukanya Mukherjee", position: "Assistant HoD, CSE", img: DrSukanyaMukherjee },
  { name: "Prof. (Dr.) Sanchita Ghosh", img: DrSanchitaGhosh },
  { name: "Prof. Kajari Sur", img: ProfKajariSur },
  { name: "Prof. (Dr.) Soumyendu Sekhar Bandyopadhyay", img: DrSoumyenduSekharBandyopadhyay },
  { name: "Prof. (Dr.) Debapriya Roy", img: DrDebapriyaRoy },
  { name: "Prof. (Dr.) Koushik Dutta", img: DrKoushikDutta },
  { name: "Prof. (Dr.) Monalisa Ghosh", img: DrMonalisaGhosh },
  { name: "Prof. (Dr.) Sananda Chatterjee", img: DrSanandaChatterjee },
  { name: "Prof. (Dr.) Baisakhi Das", img: DrBaisakhiDas },
  { name: "Prof. (Dr.) Rupayan Das", img: DrRupayanDas },
  { name: "Prof. (Dr.) Susovan Jana", img: DrSusovanJana },
];

function Faculty() {
  useEffect(() => {
    const rows = document.querySelectorAll(".faculty-row");
  
    const handleScroll = () => {
      rows.forEach((row, index) => {
        const viewportHeight = window.innerHeight;
        const sectionTop = document.querySelector(".faculty").getBoundingClientRect().top;
  
        // Adjust the scroll effect speed based on row index
        const speedMultiplier = index === 0 ? 0.5 : 0.7; // Slow down the first row
        const scrollProgress = Math.max(
          Math.min((viewportHeight - sectionTop - index * 200 * speedMultiplier) / viewportHeight, 1),
          0
        );
  
        row.style.transform = `translateY(${50 - scrollProgress * 50}%)`;
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section className="faculty" id="faculty">
      <div className="container">
        <h2>Our Faculty</h2>
        <div className="faculty-grid">
          {[0, 1, 2].map((rowIndex) => (
            <div className="faculty-row" key={rowIndex}>
              {facultyData
                .slice(rowIndex * 5, rowIndex * 5 + 5)
                .map((faculty, index) => (
                  <div className="faculty-member" key={index}>
                    <img
                      src={faculty.img}
                      alt={faculty.name}
                      className="faculty-photo"
                    />
                    <h3>{faculty.name}</h3>
                    {faculty.position && <p>{faculty.position}</p>}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculty;
