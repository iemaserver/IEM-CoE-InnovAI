// import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Vision from "./components/Vision";
// import Footer from "./components/Footer";
// import Loading from "./components/Loading";
// import "./App.css";

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   // useEffect(() => {
//   //   setTimeout(() => setIsLoaded(true), 3000); // Show loading for 3s
//   // }, []);
//   useEffect(() => {
    
//     console.log('Loading started');
//     setTimeout(() => {
//       console.log('Loading finished');
//       setIsLoaded(true);
//     }, 3000); 
//   }, []);
  
//   return (
//     <div className="app">
//       {!isLoaded ? <Loading /> : (
//         <>
//           <Header />
//           <main>
//             <Hero />
//             <Vision />
//             {/* Add other sections like Mission, Research, etc. here */}
//           </main>
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Events from "./components/Events"; // Only keep this single import for Events
import Partnerships1 from "./components/Partnerships1"; // Import Partnerships1
import Footer from "./components/Footer";
import Loading from "./components/Loading";

import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log('Loading started');
    setTimeout(() => {
      console.log('Loading finished');
      setIsLoaded(true);
    }, 3000); // Show loading for 3 seconds
  }, []);
  
  return (
    <div className="app">
      {!isLoaded ? <Loading /> : (
        <>
          <Header />
          <main>
            <Hero />
            <Vision />
            <Events /> {/* Only one instance of Events */}
            <Partnerships1 /> {/* Add Partnerships1 here */}
            {/* Add other sections here as needed */}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
