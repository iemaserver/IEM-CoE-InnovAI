import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MediaModal from "./MediaModal";
import workshopPoster from "../assets/events/nacdc-on-device-ai-workshop-2026.jpg";
import impetusPreview from "../assets/new_g2.jpg";
import { gdgEvents } from "../data/impactData";
import { demystifyingAiWorkshop, stellarBootcamp } from "../data/eventsData";
import stellarPoster from "../assets/events/stellar-bootcamp-2026-poster.jpg";
import stellarShot1 from "../assets/events/stellar-bootcamp-2026-01.jpg";
import stellarShot2 from "../assets/events/stellar-bootcamp-2026-02.jpg";
import stellarClipPoster from "../assets/events/stellar-bootcamp-2026-clip-poster.jpg";
import demystifyingPoster from "../assets/events/demystifying-ai-2024-poster.jpg";
import demystifying01 from "../assets/events/demystifying-ai-2024-01.jpg";
import demystifying02 from "../assets/events/demystifying-ai-2024-02.jpg";
import demystifying03 from "../assets/events/demystifying-ai-2024-03.jpg";
import demystifying04 from "../assets/events/demystifying-ai-2024-04.jpg";
import demystifying05 from "../assets/events/demystifying-ai-2024-05.jpg";
import demystifying06 from "../assets/events/demystifying-ai-2024-06.jpg";
import demystifying07 from "../assets/events/demystifying-ai-2024-07.jpg";
import demystifying08 from "../assets/events/demystifying-ai-2024-08.jpg";
import "./EventsArchivePage.css";

const gdgReportUrl = "/reports/gdg-on-campus-iem-events-2025.pdf";
const stellarClipUrl = "/media/stellar-bootcamp-2026.mp4";
const demystifyingReportUrl = "/reports/demystifying-ai-workshop-2024-report.docx";

const stellarShots = [
  { src: stellarShot1, caption: "Opening session, 15 March 2026" },
  { src: stellarShot2, caption: "Ecosystem walkthrough for participants" },
];

const demystifyingShots = [
  { src: demystifying01, caption: "Participants on day two" },
  { src: demystifying02, caption: "Keynote session in progress" },
  { src: demystifying03, caption: "Day three technical session" },
  { src: demystifying04, caption: "Student project presentation" },
  { src: demystifying05, caption: "Hands-on session with participants" },
  { src: demystifying06, caption: "Certificate handover" },
  { src: demystifying07, caption: "Felicitation of an invited speaker" },
  { src: demystifying08, caption: "Full cohort on the closing day" },
];

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

        <section className="events-archive-section events-archive-section--surface" id="stellar-bootcamp">
          <div className="container">
            <div className="events-archive-heading">
              <div><span className="events-archive-eyebrow">Community bootcamp · Web3</span><h2>{stellarBootcamp.title}</h2></div>
              <span className="events-archive-status">{stellarBootcamp.status} · {stellarBootcamp.dates}</span>
            </div>
            <article className="events-archive-feature">
              <button type="button" className="events-archive-feature__poster" onClick={() => setActiveMedia({ type: "image", src: stellarPoster, title: `${stellarBootcamp.title} — event poster` })}>
                <img src={stellarPoster} alt={`Poster for the ${stellarBootcamp.title}`} />
                <span>View full poster</span>
              </button>
              <div className="events-archive-feature__content">
                <div className="events-archive-tags">{stellarBootcamp.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <h2>Two days building on Web3</h2>
                <p className="events-archive-lead">{stellarBootcamp.lead}</p>
                <dl className="events-archive-details">
                  <div><dt>Presented by</dt><dd>{stellarBootcamp.presenter}</dd></div>
                  <div><dt>Speaker</dt><dd>{stellarBootcamp.speaker.name}</dd></div>
                  <div><dt>Affiliation</dt><dd>{stellarBootcamp.speaker.role}</dd></div>
                  <div><dt>Dates</dt><dd>{stellarBootcamp.dates}</dd></div>
                  <div><dt>Venue</dt><dd>{stellarBootcamp.venue}</dd></div>
                  <div><dt>Registration</dt><dd>{stellarBootcamp.registration.cost} · <a href={stellarBootcamp.registration.url} target="_blank" rel="noreferrer">Programme page ↗</a></dd></div>
                  <div><dt>In collaboration with</dt><dd>{stellarBootcamp.partners.join(" · ")}</dd></div>
                </dl>
                <div className="events-archive-learnings">
                  <h3>What participants got</h3>
                  <ul>{stellarBootcamp.included.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div className="events-archive-learnings">
                  <h3>Rewards</h3>
                  <ul>{stellarBootcamp.rewards.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
            </article>
            <div className="events-archive-media">
              <button type="button" className="events-archive-media__item events-archive-media__item--video" onClick={() => setActiveMedia({ type: "video", src: stellarClipUrl, poster: stellarClipPoster, title: `${stellarBootcamp.title} — session clip` })}>
                <img src={stellarClipPoster} alt="Participants building during the Stellar bootcamp" />
                <span className="events-archive-media__play" aria-hidden="true">▶</span>
                <small>Watch the session clip</small>
              </button>
              {stellarShots.map((shot) => (
                <button type="button" className="events-archive-media__item" key={shot.caption} onClick={() => setActiveMedia({ type: "image", src: shot.src, title: shot.caption })}>
                  <img src={shot.src} alt={shot.caption} />
                  <small>{shot.caption}</small>
                </button>
              ))}
            </div>
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

        <section className="events-archive-section" id="demystifying-ai-2024">
          <div className="container">
            <div className="events-archive-heading">
              <div><span className="events-archive-eyebrow">Workshop archive</span><h2>{demystifyingAiWorkshop.title}</h2></div>
              <span className="events-archive-status">{demystifyingAiWorkshop.status} · {demystifyingAiWorkshop.dates}</span>
            </div>
            <article className="events-archive-feature">
              <button type="button" className="events-archive-feature__poster" onClick={() => setActiveMedia({ type: "image", src: demystifyingPoster, title: `${demystifyingAiWorkshop.title} — workshop brochure` })}>
                <img src={demystifyingPoster} alt={`Brochure for the ${demystifyingAiWorkshop.title} workshop`} />
                <span>View full brochure</span>
              </button>
              <div className="events-archive-feature__content">
                <div className="events-archive-tags">{demystifyingAiWorkshop.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <h2>Three days, six speakers, 55 students</h2>
                <p className="events-archive-lead">{demystifyingAiWorkshop.lead}</p>
                <dl className="events-archive-details">
                  <div><dt>Organised by</dt><dd>{demystifyingAiWorkshop.organiser}</dd></div>
                  <div><dt>Dates</dt><dd>{demystifyingAiWorkshop.dates} · {demystifyingAiWorkshop.timing}</dd></div>
                  <div><dt>Venue</dt><dd>{demystifyingAiWorkshop.venue}</dd></div>
                  <div><dt>Participation</dt><dd>{demystifyingAiWorkshop.participants} · {demystifyingAiWorkshop.fee}</dd></div>
                </dl>
              </div>
            </article>

            <div className="events-archive-days">
              {demystifyingAiWorkshop.days.map((day) => (
                <article key={day.label}>
                  <header><span>{day.label}</span><b>{day.date}</b></header>
                  <ol>
                    {day.sessions.map((session) => (
                      <li key={session.title}>
                        <span className="events-archive-days__kind">{session.kind}</span>
                        <h3>{session.title}</h3>
                        <strong>{session.speaker}</strong>
                        <em>{session.affiliation}</em>
                        <p>{session.note}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>

            <div className="events-archive-gallery">
              {demystifyingShots.map((shot) => (
                <button type="button" key={shot.caption} onClick={() => setActiveMedia({ type: "image", src: shot.src, title: shot.caption })}>
                  <img src={shot.src} alt={shot.caption} loading="lazy" />
                  <small>{shot.caption}</small>
                </button>
              ))}
            </div>

            <div className="events-archive-report-note">
              <div><span>DOCX</span><strong>Workshop Report — Demystifying Artificial Intelligence</strong></div>
              <p>The day-by-day report is summarised above for reading and search. The original document is retained here as the source record.</p>
              <a href={demystifyingReportUrl} download>Download the original report</a>
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
        poster={activeMedia?.poster}
      />
    </>
  );
}

export default EventsArchivePage;
