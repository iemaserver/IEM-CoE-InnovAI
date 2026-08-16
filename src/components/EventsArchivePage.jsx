import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MediaModal from "./MediaModal";
import workshopPoster from "../assets/events/nacdc-on-device-ai-workshop-2026.jpg";
import impetusPreview from "../assets/new_g2.jpg";
import { gdgEvents } from "../data/impactData";
import "./EventsArchivePage.css";

const gdgReportUrl = "/reports/gdg-on-campus-iem-events-2025.pdf";

function EventsArchivePage() {
  const [activeMedia, setActiveMedia] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Events | InnovAI";
  }, []);

  return (
    <>
      <Header />
      <main className="events-archive-page">
        <section className="events-archive-hero">
          <div className="container">
            <span className="events-archive-eyebrow">Knowledge exchange · community · innovation</span>
            <h1>Events that move ideas <span>into action.</span></h1>
            <p>Workshops, conferences, hackathons and community programmes connecting research with practical learning.</p>
            <div className="events-archive-hero__stats" aria-label="Event archive summary">
              <span><strong>8</strong> major InnovAI activities</span>
              <span><strong>421+</strong> participants impacted</span>
              <span><strong>17</strong> states and UTs</span>
            </div>
          </div>
        </section>

        <section className="events-archive-section" id="nacdc-workshop">
          <div className="container">
            <div className="events-archive-heading">
              <div><span className="events-archive-eyebrow">Featured workshop</span><h2>On-device AI, from models to mobile</h2></div>
              <span className="events-archive-status">Completed · 11 August 2026</span>
            </div>
            <article className="events-archive-feature">
              <button type="button" className="events-archive-feature__poster" onClick={() => setActiveMedia({ type: "image", src: workshopPoster, title: "NACDC 2026 — Running Local AI Models on Android and iOS" })}>
                <img src={workshopPoster} alt="Poster for the NACDC 2026 workshop Running Local AI Models on Android and iOS" />
                <span>View full poster</span>
              </button>
              <div className="events-archive-feature__content">
                <div className="events-archive-tags"><span>NACDC 2026</span><span>Hands-on workshop</span><span>Mobile AI</span></div>
                <h2>Running Local AI Models on Android and iOS</h2>
                <p className="events-archive-lead">A practical workshop on deploying private, responsive and offline AI experiences directly on mobile devices.</p>
                <dl className="events-archive-details">
                  <div><dt>Speaker</dt><dd>Rohit Kumar</dd></div>
                  <div><dt>Affiliation</dt><dd>Android @ Flobiz</dd></div>
                  <div><dt>Date and time</dt><dd>11 August 2026 · 1:00–3:00 PM</dd></div>
                  <div><dt>Venue</dt><dd>Godrej Genesis</dd></div>
                </dl>
                <div className="events-archive-learnings">
                  <h3>Workshop focus</h3>
                  <ul>
                    <li>Run AI models without depending on the cloud.</li>
                    <li>Build fast, offline and privacy-first mobile experiences.</li>
                    <li>Integrate and optimize on-device models in mobile applications.</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="events-archive-section events-archive-section--surface">
          <div className="container">
            <div className="events-archive-heading">
              <div><span className="events-archive-eyebrow">Flagship programme</span><h2>IMPETUS 2026</h2></div>
              <Link to="/events/impetus" className="events-archive-link">Read the full story →</Link>
            </div>
            <article className="events-archive-impetus">
              <img src={impetusPreview} alt="Participants at IMPETUS 2026" />
              <div>
                <span>Open innovation hackathon</span>
                <h3>A national platform for student innovators</h3>
                <p>Conducted from 11 December 2025 to 12 January 2026 with participation across 17 states and union territories, plus Nigeria.</p>
                <div><strong>421+</strong><span>Participants</span><strong>236</strong><span>Teams</span><strong>13</strong><span>Finalists</span></div>
                <Link to="/events/impetus">Explore IMPETUS 2026</Link>
              </div>
            </article>
          </div>
        </section>

        <section className="events-archive-section" id="gdg-events">
          <div className="container">
            <div className="events-archive-heading">
              <div><span className="events-archive-eyebrow">Partner and community archive</span><h2>GDG on Campus IEM · 2025</h2></div>
              <button type="button" className="events-archive-link" onClick={() => setActiveMedia({ type: "pdf", src: gdgReportUrl, title: "GDG on Campus IEM — Event Report 2025" })}>View original report</button>
            </div>
            <p className="events-archive-intro">The supplied GDG report records three programmes and 388 participant attendances. These are presented as community activities; InnovAI authorship is not implied.</p>
            <div className="events-archive-grid">
              {gdgEvents.map((event, index) => (
                <article className="events-archive-card" key={event.title}>
                  <div className="events-archive-card__top"><span>0{index + 1}</span><b>{event.mode}</b></div>
                  <p>{event.date}</p>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <dl><div><dt>Participants</dt><dd>{event.participants}</dd></div><div><dt>Venue</dt><dd>{event.venue}</dd></div></dl>
                </article>
              ))}
            </div>
            <div className="events-archive-report-note">
              <div><span>PDF</span><strong>Event Report — GDG on Campus IEM</strong></div>
              <p>The original two-page document is retained as a source download. This HTML summary makes its core information searchable and accessible.</p>
              <button type="button" onClick={() => setActiveMedia({ type: "pdf", src: gdgReportUrl, title: "GDG on Campus IEM — Event Report 2025" })}>Open PDF report</button>
            </div>
          </div>
        </section>

        <section className="events-archive-cta">
          <div className="container"><span className="events-archive-eyebrow">Beyond attendance</span><h2>See the outcomes behind the activity.</h2><p>Explore publications, funding utilization, outreach and research translation in the institutional impact observatory.</p><Link to="/impact">Explore Impact &amp; Reports →</Link></div>
        </section>
      </main>
      <Footer />
      <MediaModal
        isOpen={Boolean(activeMedia)}
        onClose={() => setActiveMedia(null)}
        title={activeMedia?.title || "Media viewer"}
        type={activeMedia?.type || "image"}
        src={activeMedia?.src || ""}
      />
    </>
  );
}

export default EventsArchivePage;
