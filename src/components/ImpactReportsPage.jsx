/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MediaModal from "./MediaModal";
import impactInfographic from "../assets/impact/innovai-impact-2023-2026.jpg";
import impetusPreview from "../assets/new_g1.jpg";
import {
  activityData,
  conferenceData,
  fundingData,
  highlightData,
  impactMetrics,
  journeyData,
  missionStatement,
  publicationData,
  researchDomains,
  revenueData,
  strategicImpactData,
} from "../data/impactData";
import "./ImpactReportsPage.css";

const gdgReportUrl = "/reports/gdg-on-campus-iem-events-2025.pdf";
const impetusReportUrl = "/IMPETUS Report.pdf";

function DonutChart({ data, total, label, ariaLabel }) {
  let current = 0;
  const segments = data.map((item) => {
    const start = current;
    current += item.percentage;
    return `${item.color} ${start}% ${current}%`;
  });

  return (
    <div
      className="impact-donut"
      style={{ "--donut-gradient": `conic-gradient(${segments.join(", ")})` }}
      role="img"
      aria-label={ariaLabel}
    >
      <div className="impact-donut__center">
        <strong>{total}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function DataLegend({ data }) {
  return (
    <ul className="impact-legend">
      {data.map((item) => (
        <li key={item.label}>
          <span className="impact-legend__dot" style={{ backgroundColor: item.color }} aria-hidden="true" />
          <span className="impact-legend__label">{item.label}</span>
          <strong>{item.amount}</strong>
          <span>{item.percentageLabel}</span>
        </li>
      ))}
    </ul>
  );
}

function ImpactReportsPage() {
  const [showGdgReport, setShowGdgReport] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Impact & Reports | InnovAI";
  }, []);

  const maxPublications = Math.max(...publicationData.map((item) => item.value));
  const maxSciPublications = Math.max(...publicationData.map((item) => item.sciValue));

  return (
    <>
      <Header />
      <main className="impact-page">
        <section className="impact-hero">
          <div className="impact-hero__orbit" aria-hidden="true">
            <span className="impact-hero__orbit-ring impact-hero__orbit-ring--one" />
            <span className="impact-hero__orbit-ring impact-hero__orbit-ring--two" />
            <span className="impact-hero__orbit-core">55</span>
          </div>
          <div className="container impact-hero__content">
            <span className="impact-eyebrow">Evidence of progress · 2023–2026</span>
            <h1>Impact, <span>measured.</span></h1>
            <p>
              A transparent view of InnovAI&apos;s research, academic outreach,
              field initiatives and self-sustained activities since establishment.
            </p>
            <div className="impact-actions">
              <a className="impact-button impact-button--primary" href="#impact-data">Explore the data <span aria-hidden="true">↓</span></a>
              <a className="impact-button impact-button--secondary" href="#reports-library">View reports</a>
            </div>
          </div>
        </section>

        <section className="impact-section impact-section--surface" id="impact-data">
          <div className="container">
            <div className="impact-section-heading">
              <div>
                <span className="impact-eyebrow">At a glance</span>
                <h2>The evidence base</h2>
              </div>
              <p>Each figure below is reproduced directly from the supplied InnovAI impact snapshot.</p>
            </div>
            <div className="impact-metrics-grid">
              {impactMetrics.map((metric) => (
                <article className={`impact-metric impact-metric--${metric.tone}`} key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="container impact-publication-layout">
            <article className="impact-panel impact-panel--wide">
              <div className="impact-panel__header">
                <div>
                  <span className="impact-eyebrow">Research output</span>
                  <h2>Publication growth</h2>
                </div>
                <span className="impact-badge">Data through June 2026</span>
              </div>
              <div className="impact-chart-key" aria-hidden="true">
                <span><i className="impact-chart-key__bar" />Total publications</span>
                <span><i className="impact-chart-key__dot" />SCI / SCIE papers</span>
              </div>
              <div className="impact-bar-chart" role="img" aria-label="Total publications: 8 in 2023, 15 in 2024, 28 in 2025 and 4 or more up to June 2026. SCI or SCIE papers: 0 in 2023, 1 in 2024, 1 in 2025 and 2 in 2026.">
                {publicationData.map((item) => (
                  <div className="impact-bar-chart__item" key={item.year}>
                    <strong>{item.displayValue}</strong>
                    <div className="impact-bar-chart__track">
                      <span style={{ height: `${Math.max((item.value / maxPublications) * 100, 14)}%` }} />
                      <em
                        className="impact-bar-chart__sci"
                        style={{ "--sci-position": `${12 + (item.sciValue / maxSciPublications) * 58}%` }}
                      >{item.sciValue}<small>SCI</small></em>
                    </div>
                    <b>{item.year}</b>
                    <small>{item.qualifier || "Full year"}</small>
                  </div>
                ))}
              </div>
              <div className="impact-panel__total">
                <div><strong>55</strong><span>Total output</span></div>
                <div><strong>4</strong><span>High impact SCI/SCIE papers</span></div>
              </div>
            </article>

            <aside className="impact-panel impact-domains">
              <span className="impact-eyebrow">Research domains</span>
              <h3>Applied AI with field relevance</h3>
              <ul>
                {researchDomains.map((domain, index) => <li key={domain}><span>0{index + 1}</span>{domain}</li>)}
              </ul>
            </aside>
          </div>
        </section>

        <section className="impact-section impact-section--surface">
          <div className="container">
            <div className="impact-section-heading">
              <div><span className="impact-eyebrow">Resource stewardship</span><h2>Revenue and utilization</h2></div>
              <p>Visible totals and legends keep the financial charts readable without relying on color alone.</p>
            </div>
            <div className="impact-finance-grid">
              <article className="impact-panel impact-finance-card">
                <div className="impact-panel__header"><div><h3>Self-sustained revenue</h3><p>Academic resource generation</p></div></div>
                <div className="impact-finance-card__body">
                  <DonutChart data={revenueData} total="₹17,700" label="Total revenue" ariaLabel="Revenue: ISI Workshop 16,500 rupees or 93.22 percent; FDP Advanced Intelligence and Data Science 1,200 rupees or 6.78 percent" />
                  <DataLegend data={revenueData} />
                </div>
              </article>
              <article className="impact-panel impact-finance-card">
                <div className="impact-panel__header"><div><h3>Funding utilization</h3><p>₹1,32,374 managed · 100% utilized</p></div></div>
                <div className="impact-finance-card__body">
                  <DonutChart data={fundingData} total="₹1,32,374" label="Total managed" ariaLabel="Funding allocation: Ground Survey Support 22,984 rupees, Workshop Activities 34,340 rupees, XAI Workshop 40,000 rupees and IMPETUS Hackathon 35,050 rupees" />
                  <DataLegend data={fundingData} />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <div className="container impact-outreach-grid">
            <article className="impact-panel impact-activity-panel">
              <span className="impact-eyebrow">Knowledge exchange</span>
              <h2>Eight major activities</h2>
              <div className="impact-activity-list">
                {activityData.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <div><i style={{ width: `${(item.value / 3) * 100}%` }} /></div>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              <div className="impact-conference-breakdown" aria-label="Conference status recorded in the source infographic">
                {conferenceData.map((item) => (
                  <span key={item.date}><strong>{item.date}</strong><small>{item.status}</small></span>
                ))}
              </div>
              <p className="impact-source-note">Total Major Activities Conducted: 8. Conference statuses are reproduced exactly as recorded in the supplied infographic.</p>
            </article>
            <article className="impact-panel impact-reach-panel">
              <div className="impact-reach-panel__visual" aria-hidden="true">
                <span className="impact-reach-panel__ring impact-reach-panel__ring--one" />
                <span className="impact-reach-panel__ring impact-reach-panel__ring--two" />
                <strong>17</strong>
                <small>States / UTs</small>
                <b>Nigeria</b>
              </div>
              <div>
                <span className="impact-eyebrow">National + global outreach</span>
                <h2>Ideas travelled farther</h2>
                <p>IMPETUS 2026 connected 236 teams and 421+ participants across 17 Indian states and union territories, with participation from Nigeria.</p>
                <div className="impact-inline-stats"><span><strong>236</strong> Teams</span><span><strong>421+</strong> Participants</span></div>
              </div>
            </article>
          </div>
        </section>

        <section className="impact-section impact-section--surface">
          <div className="container">
            <div className="impact-section-heading">
              <div><span className="impact-eyebrow">From lab to land</span><h2>Research translation initiatives</h2></div>
              <p>Field learning and scientific exposure connect AI research with environmental and geospatial challenges.</p>
            </div>
            <div className="impact-initiative-grid">
              <article className="impact-initiative impact-initiative--geo">
                <div className="impact-initiative__visual" aria-hidden="true"><span /><i /><b>GSI</b></div>
                <div><span className="impact-badge">Geo-intelligence</span><h3>Geological Survey of India Dark Room Facility</h3><p>Spectral Signature Analysis Training &amp; Scientific Instrument Exposure.</p></div>
              </article>
              <article className="impact-initiative impact-initiative--iot">
                <div className="impact-initiative__visual" aria-hidden="true"><span /><i /><b>IoT</b></div>
                <div><span className="impact-badge">Environmental IoT</span><h3>Henry Island, Sundarbans IoT Deployment</h3><p>IoT-enabled Environmental Monitoring &amp; Ground Truth Collection.</p></div>
              </article>
            </div>
            <p className="impact-translation-note">IoT-Enabled Environmental Intelligence &amp; Spectral Validation <span aria-hidden="true">|</span> Supported by Geological Survey of India</p>
          </div>
        </section>

        <section className="impact-section">
          <div className="container">
            <div className="impact-section-heading">
              <div><span className="impact-eyebrow">Institutional outcomes</span><h2>Strategic impact matrix</h2></div>
              <p>Eight outcomes connect research output, collaboration, national visibility and sustainable academic activity.</p>
            </div>
            <div className="impact-strategy-layout">
              <div className="impact-strategy-grid">
                {strategicImpactData.map((item, index) => (
                  <article key={item.label}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><small>{item.label}</small><strong>{item.value}</strong></div>
                    <i aria-hidden="true" />
                  </article>
                ))}
              </div>
              <aside className="impact-highlights">
                <span className="impact-eyebrow">Highlight achievements</span>
                {highlightData.map((item) => (
                  <article key={item.title}><span aria-hidden="true">✦</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>
                ))}
                <div className="impact-mission"><span>Our mission</span><p>{missionStatement}</p></div>
              </aside>
            </div>
          </div>
        </section>

        <section className="impact-section impact-section--surface">
          <div className="container">
            <div className="impact-section-heading impact-section-heading--center"><div><span className="impact-eyebrow">Our journey</span><h2>Building an innovation ecosystem</h2></div></div>
            <ol className="impact-timeline">
              {journeyData.map((item) => (
                <li key={item.year}><span>{item.year}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="impact-section" id="reports-library">
          <div className="container">
            <div className="impact-section-heading">
              <div><span className="impact-eyebrow">Evidence library</span><h2>Reports and source material</h2></div>
              <p>The web page carries the accessible data; original documents remain available for reference.</p>
            </div>
            <div className="impact-reports-grid">
              <article className="impact-report-card">
                <a href={impactInfographic} target="_blank" rel="noreferrer" className="impact-report-card__preview"><img src={impactInfographic} alt="InnovAI impact infographic for 2023 to 2026" /></a>
                <div><span className="impact-badge">Impact snapshot</span><h3>InnovAI impact infographic</h3><p>The original visual summary behind the charts and metrics on this page.</p><a href={impactInfographic} target="_blank" rel="noreferrer">Open full image <span aria-hidden="true">↗</span></a></div>
              </article>
              <article className="impact-report-card impact-report-card--document">
                <div className="impact-report-card__document-icon" aria-hidden="true"><span>PDF</span><strong>03</strong><small>GDG events</small></div>
                <div><span className="impact-badge">Partner report</span><h3>GDG on Campus IEM events</h3><p>Three community events from August to October 2025, with 388 recorded participants in total.</p><div className="impact-report-card__actions"><button type="button" onClick={() => setShowGdgReport(true)}>View PDF</button><Link to="/events#gdg-events">Read summary</Link></div></div>
              </article>
              <article className="impact-report-card">
                <Link to="/events/impetus" className="impact-report-card__preview"><img src={impetusPreview} alt="IMPETUS 2026 event" /></Link>
                <div><span className="impact-badge">Event report</span><h3>IMPETUS 2026</h3><p>Post-event report for the national open innovation hackathon.</p><div className="impact-report-card__actions"><Link to="/events/impetus">Read story</Link><a href={impetusReportUrl} target="_blank" rel="noreferrer">View PDF</a></div></div>
              </article>
            </div>
          </div>
        </section>

        <section className="impact-source-visual">
          <div className="container">
            <div><span className="impact-eyebrow">Original source visual</span><h2>See the complete snapshot</h2><p>The image is preserved here for visual reference while the data above remains readable, responsive and accessible.</p></div>
            <a href={impactInfographic} target="_blank" rel="noreferrer"><img src={impactInfographic} alt="Complete InnovAI Centre of Excellence impact infographic, 2023 to 2026" /><span>Open full-resolution infographic ↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
      <MediaModal
        isOpen={showGdgReport}
        onClose={() => setShowGdgReport(false)}
        title="GDG on Campus IEM — Event Report 2025"
        type="pdf"
        src={gdgReportUrl}
      />
    </>
  );
}

export default ImpactReportsPage;
