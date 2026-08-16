# InnovAI Website Design System

## Product context

InnovAI is the Centre of Excellence for Innovation in AI at the Institute of Engineering & Management. The site communicates institutional credibility across research, innovation, national outreach, industry collaboration and sustainable solutions. Its audience includes students, faculty, academic partners, industry collaborators, conference participants and college leadership.

Core pages are the long-form home page, an IMPETUS 2026 event report, and the proposed Impact & Reports page. The new page must turn a dense institutional infographic into accessible, web-native storytelling without changing or inventing source figures.

## Visual identity

- Keep the existing dark AI/research visual language.
- Use Inter only, with system sans-serif fallback.
- Primary background: `#050505`.
- Secondary surface: `#0f1014`.
- Elevated card surface: `#1a1b21` or translucent equivalents over the primary background.
- Primary accent: cyber cyan `#00f0ff`.
- Secondary accent: electric purple `#7000ff`.
- Limited data-series accent: magenta `#ff0055`.
- Supporting chart colors may use cyan-purple interpolation plus amber `#f5a524` and teal `#00b8a9`, but never pastel or unrelated brand colors.
- Primary text: `#ffffff`; secondary text: `#a1a1aa`; muted text: `#71717a`.
- Borders: `rgba(255,255,255,0.08)` normally; cyan/purple tinted borders for emphasized cards.
- Corners: 12–18px. Avoid excessive pill shapes except labels and badges.
- Shadows: low-opacity black depth plus restrained cyan/purple glow. Avoid heavy neon everywhere.

## Typography

- Display headings: Inter, 700–800, compact tracking, responsive `clamp()` sizing.
- Section headings: Inter, 650–750.
- Body: Inter, 400, relaxed 1.6 line-height.
- KPI numerals: tabular numerals where possible, 700–800, high contrast.
- Labels: uppercase tracking may be used sparingly for eyebrow text and chart legends.

## Layout and spacing

- Fixed shared header: 80px.
- Content maximum width: 1200px, 90% viewport width.
- Section spacing: 72–96px desktop, 48–64px mobile.
- Card gaps: 16–24px.
- Use an editorial dashboard rhythm: large narrative blocks alternate with dense but readable data panels.
- Desktop grids collapse to one column below 768px.
- All charts must remain understandable at 320px width and must have textual values outside the graphic.

## Components

- Shared fixed translucent Header with InnovAI/IEM logo and responsive navigation.
- Shared Footer with contact content.
- KPI cards: short label, prominent number, one-line qualifier, optional icon or micro-trend.
- Data panels: title, explanatory subtitle, chart, visible legend, and a source/period note.
- Report cards: category, title, date range, concise summary, metadata and clear View/Download action.
- Timeline nodes: year, milestone, compact description.
- Badges: outlined cyan/purple labels for `2023–2026`, `Up to June 2026`, `Post-event report`.

## Impact & Reports page content contract

Hero:
- Eyebrow: `Evidence of progress · 2023–2026`.
- Heading: `Impact, measured.`
- Summary should describe InnovAI's research, academic outreach, collaboration and self-sustained activities without overstating causality.
- Primary action: explore the data; secondary action: view reports.

KPI overview:
- Established: 23 December 2023.
- Total publications: 55 from 2023 through June 2026.
- SCI/SCIE publications: 4.
- Participants impacted: 421+.
- Teams: 236.
- Total managed funding: ₹1,32,374.
- Self-sustained revenue: ₹17,700.
- IIT Kharagpur collaboration: Active.

Charts:
- Publication growth bar chart: 2023 = 8, 2024 = 15, 2025 = 28, 2026 = 4+ through June. Clearly mark 2026 as YTD; total = 55.
- Revenue donut: ISI Workshop ₹16,500 / 93.22%; Faculty Development Programme ₹1,200 / 6.78%; total ₹17,700.
- Funding donut/segmented ring: Ground Survey Support ₹22,984 / 17.3%; Workshop Activities ₹34,340 / 26.0%; XAI Workshop ₹40,000 / 30.2%; IMPETUS Hackathon ₹35,050 / 26.5%; total ₹1,32,374.
- Activities: 3 conferences, 2 workshops, 1 bootcamp, 1 faculty development programme, 1 hackathon; total 8. The August 2026 conference must not be labelled upcoming without verification.
- Outreach: 17 Indian states/UTs plus Nigeria; 236 teams; 421+ participants.

Research translation:
- Geological Survey of India dark-room facility: spectral signature analysis training and scientific instrument exposure.
- Henry Island, Sundarbans IoT deployment: IoT-enabled environmental monitoring and ground-truth collection.
- Describe these as initiatives/supporting work, not as audited outcomes unless more evidence is supplied.

Journey:
- 2023: InnovAI established, 23 December 2023.
- 2024: research ecosystem development.
- 2025: national outreach and publication expansion.
- 2026: SCI/SCIE publications, global participation and active collaboration.

Reports:
- Full InnovAI impact infographic, 2023–2026, retained as a source visual.
- GDG on Campus IEM event report, covering August–October 2025. Treat it as a partner/community report unless InnovAI authorship is confirmed.
- IMPETUS 2026 report, already available in the site.

Data integrity rules:
- Never add percentages, totals, growth rates or causal claims not present in the source.
- Do not sum the GDG report's 388 attendees with the infographic's 421+ participants; the scopes may overlap.
- Label partial-period data explicitly.
- Use `₹1,32,374` Indian number formatting in visible content.
- Provide textual values and accessible labels for every chart; charts must not rely only on color.

## Motion and interaction

- Reveal sections with restrained opacity/translate transitions.
- Animate bars/rings only once on entrance and respect `prefers-reduced-motion`.
- Hover states may add border glow and a 2–4px lift.
- Report image previews may open in a lightbox or new tab; downloads must remain explicit.
- Avoid continuous chart animation and decorative motion that competes with data.

## Responsive and accessibility requirements

- Minimum body text 16px and readable line lengths.
- WCAG-conscious contrast on dark surfaces.
- Keyboard-visible focus rings using cyan.
- Semantic headings, lists, figures, figcaptions and accessible links.
- SVG charts require an accessible name; all data must also appear as visible labels or tables.
- The original infographic is supporting material only, never the sole carrier of information.
- The image-only PDF must be accompanied by an HTML summary.

## Prohibited drift

- Do not introduce new fonts, light-theme sections, generic corporate blue, glassmorphism overload or unrelated gradients.
- Do not use placeholder statistics.
- Do not invent logos, awards, publications or partner claims.
- Do not make the page look like a financial trading dashboard; this is an academic impact narrative.
