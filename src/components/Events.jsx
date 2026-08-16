import { Link } from "react-router-dom";
import "./Events.css";
import impetusImage from "../assets/new_g1.jpg";
import workshopPoster from "../assets/events/nacdc-on-device-ai-workshop-2026.jpg";
import impactImage from "../assets/impact/innovai-impact-2023-2026.jpg";

const featuredEvents = [
  {
    image: workshopPoster,
    eyebrow: "Workshop · 11 August 2026",
    title: "On-device AI for Android and iOS",
    description: "A hands-on NACDC 2026 workshop on fast, private and offline mobile AI experiences.",
    to: "/events#nacdc-workshop",
  },
  {
    image: impetusImage,
    eyebrow: "Flagship hackathon",
    title: "IMPETUS 2026",
    description: "421+ participants and 236 teams connected through a national open innovation programme.",
    to: "/events/impetus",
  },
  {
    image: impactImage,
    eyebrow: "Evidence library",
    title: "Impact & Reports",
    description: "Explore publication growth, funding, outreach, research translation and source reports.",
    to: "/impact",
  },
];

function Events() {
  return (
    <section className="events" id="events">
      <div className="container">
        <div className="events-heading">
          <div><span>Latest from InnovAI</span><h2>Events &amp; Knowledge Exchange</h2></div>
          <Link to="/events" className="events-view-all">View all events →</Link>
        </div>
        <p>Real programmes, reports and outcomes from the InnovAI community.</p>
        <div className="events-cards events-cards--featured">
          {featuredEvents.map((event) => (
            <Link className="card events-feature-card" to={event.to} key={event.title}>
              <img src={event.image} alt="" className="card-image" />
              <div className="events-feature-card__body">
                <span>{event.eyebrow}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <b>Explore →</b>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
