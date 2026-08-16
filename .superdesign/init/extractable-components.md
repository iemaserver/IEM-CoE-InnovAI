# Extractable Components

## Header

- Source: `src/components/Header.jsx`
- Category: layout
- Description: Fixed translucent header with animated InnovAI/IEM logo reveal and responsive navigation.
- Extractable props: none.
- Hardcoded: logo asset, animation states and timing.

## MenuToggle

- Source: `src/components/MenuToggle.jsx`
- Category: layout
- Description: Desktop navigation list that becomes an off-canvas menu on mobile.
- Extractable props: `toggleMenu` callback; future `activeItem` string.
- Hardcoded: existing menu labels and URLs.

## Footer

- Source: `src/components/Footer.jsx`
- Category: layout
- Description: Contact information, copyright and social links.
- Extractable props: none.
- Hardcoded: contact content, author attribution, icons.

## MetricCard

- Source: derived from `src/components/ImpetusPage.jsx` `.stat-card` pattern.
- Category: basic
- Description: Large numerical KPI with a short label.
- Extractable props: `value`, `label`, `accent`.
- Hardcoded: card geometry and typography.

## EventCard

- Source: `src/components/Events.jsx`
- Category: basic
- Description: Image-led event category card with heading and summary.
- Extractable props: `image`, `title`, `description`, `href`.
- Hardcoded: card hover treatment.
