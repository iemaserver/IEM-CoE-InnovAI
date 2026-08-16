# Route Map

Framework: React 18 with React Router 6 inside a Vite SPA.

| Route | Component | Shared layout | Summary |
|---|---|---|---|
| `/` | Inline home composition in `src/App.jsx` | `Header`, `Footer` | Hero, vision, research, faculty, events, gallery, partnerships, contact |
| `/events/impetus` | `src/components/ImpetusPage.jsx` | `Header`, `Footer` | IMPETUS 2026 post-event report with stats, overview, highlights, gallery and acknowledgements |

## Full router configuration: `src/App.jsx`

```jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Partnerships1 from "./components/Partnerships1";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import CustomCursor from "./components/CustomCursor";
import ImpetusPage from "./components/ImpetusPage";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="app">
      {!isLoaded ? <Loading /> : <>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<><Header /><main><Hero /><Vision /><Events /><Gallery /><Partnerships1 /></main><Footer /></>} />
          <Route path="/events/impetus" element={<ImpetusPage />} />
        </Routes>
      </>}
    </div>
  );
}

export default App;
```
