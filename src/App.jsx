import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Partnerships1 from "./components/Partnerships1";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import CustomCursor from "./components/CustomCursor";
import ImpetusPage from "./components/ImpetusPage"; // Import the new page

import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Keep a slight delay for the "Boot Sequence" effect to finish
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {!isLoaded ? (
        <Loading />
      ) : (
        <>
          <CustomCursor />
          {/* Main Routes Setup */}
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <main>
                  <Hero />
                  <Vision />
                  <Events />
                  <Gallery /> 
                  <Partnerships1 />
                </main>
                <Footer />
              </>
            } />
            
            {/* Dedicated Event Route */}
            <Route path="/events/impetus" element={<ImpetusPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
