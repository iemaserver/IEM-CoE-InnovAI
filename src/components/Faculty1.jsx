import React from "react";
import "./Faculty.css";

// Import images...
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
  return (
    <section className="faculty" id="faculty">
      <div className="faculty-overlay"></div>
      <div className="container">
        <h2>Our Faculty</h2>
        
        {/* Infinite Marquee Container */}
        <div className="marquee-container">
          <div className="marquee-content">
            {/* Original List */}
            {facultyData.map((faculty, index) => (
              <div className="faculty-card" key={`original-${index}`}>
                <div className="image-wrapper">
                  <img src={faculty.img} alt={faculty.name} className="faculty-photo" />
                </div>
                <div className="info-wrapper">
                  <h3>{faculty.name}</h3>
                  {faculty.position && <p className="position">{faculty.position}</p>}
                </div>
              </div>
            ))}
            
            {/* Duplicate List for Seamless Loop */}
            {facultyData.map((faculty, index) => (
              <div className="faculty-card" key={`duplicate-${index}`}>
                <div className="image-wrapper">
                  <img src={faculty.img} alt={faculty.name} className="faculty-photo" />
                </div>
                <div className="info-wrapper">
                  <h3>{faculty.name}</h3>
                  {faculty.position && <p className="position">{faculty.position}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faculty;