# Theme

## Compact token summary

- Product style: dark AI/research interface with restrained cyber accents and subtle glass panels.
- Backgrounds: `#050505` primary, `#0f1014` secondary, `#1a1b21` card.
- Brand colors: cyan `#00f0ff`, electric purple `#7000ff`, accent magenta `#ff0055`.
- Text: white `#ffffff`, secondary gray `#a1a1aa`, muted `#52525b`.
- Font: Inter with system sans-serif fallback; normal body line-height `1.6`.
- Layout: maximum width `1200px`, standard container width `90%`, fixed header `80px`.
- Radius: `12px`; cards commonly use subtle translucent borders and cyan/purple glow on hover.
- Motion: `0.2s` fast and `0.3s` normal transitions; animated scan/glow language in header.
- Breakpoint: primary mobile breakpoint at `768px`.

## Raw global source: `src/App.css`

```css
:root {
  /* Color Palette - Modern AI/Tech Theme */
  --bg-primary: #050505;
  --bg-secondary: #0f1014;
  --bg-card: #1a1b21;
  --primary: #00f0ff;
  --primary-glow: rgba(0, 240, 255, 0.4);
  --secondary: #7000ff;
  --accent: #ff0055;
  --text-primary: #ffffff;
  --text-secondary: #a1a1aa;
  --text-muted: #52525b;
  --header-height: 80px;
  --max-width: 1200px;
  --border-radius: 12px;
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { text-decoration: none; color: inherit; transition: var(--transition-fast); }
ul { list-style: none; }
img { max-width: 100%; display: block; }
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb { background: var(--bg-card); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }
.container { width: 90%; max-width: var(--max-width); margin: 0 auto; }
.gradient-text {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.section-padding { padding: 80px 0; }
```

There is no Tailwind configuration or theme provider. Component styles are colocated as vanilla `.css` files.
