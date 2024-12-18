import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Partnerships1 from "./components/Partnerships1";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import CustomCursor from "./components/CustomCursor"; // Import the custom cursor

import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("Loading started");
    setTimeout(() => {
      console.log("Loading finished");
      setIsLoaded(true);
    }, 3000); // Loading for 3 seconds
  }, []);

  return (
    <div className="app">
      {!isLoaded ? (
        <Loading />
      ) : (
        <>
          <CustomCursor /> {/* Render custom cursor */}
          <Header />
          <main>
            <Hero />
            <Vision />
            <Events />
            <Gallery /> {/* Gallery placed between Events and Partnerships */}
            <Partnerships1 />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
