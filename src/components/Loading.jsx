import React, { useEffect, useState } from "react";
import "./Loading.css";
import Load1 from "../assets/Load1.mp4"; // Video for Desktop
import Load2 from "../assets/Load2.mp4"; // Video for Mobile

function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the device is mobile using both screen width and user agent
    const checkDevice = () => {
      const isSmallScreen = window.innerWidth <= 768; // Breakpoint for mobile
      const isUserAgentMobile =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobile/i.test(
          navigator.userAgent
        );
      setIsMobile(isSmallScreen || isUserAgentMobile); // If either condition matches
    };

    checkDevice(); // Initial check
    window.addEventListener("resize", checkDevice); // Update on resize

    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      window.removeEventListener("resize", checkDevice);
      clearTimeout(timer);
    };
  }, []);

  return isVisible ? (
    <div className="loading-screen">
      <video autoPlay muted loop className="loading-video">
        <source src={isMobile ? Load2 : Load1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : null;
}

export default Loading;
