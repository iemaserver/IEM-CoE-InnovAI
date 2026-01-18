import React, { useEffect, useState } from "react";
import "./Loading.css";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("INITIALIZING CORE SYSTEMS...");

  useEffect(() => {
    const texts = [
      "LOADING NEURAL NETWORKS...",
      "CONNECTING TO DATABASE...",
      "OPTIMIZING ASSETS...",
      "SYSTEM READY"
    ];
    let step = 0;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        
        // Dynamic speed
        const diff = Math.random() * 10;
        const newProgress = Math.min(prev + diff, 100);
        
        if (newProgress > 25 && step === 0) { setText(texts[0]); step++; }
        if (newProgress > 50 && step === 1) { setText(texts[1]); step++; }
        if (newProgress > 75 && step === 2) { setText(texts[2]); step++; }
        if (newProgress === 100) setText(texts[3]);

        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="loader-content">
        <div className="glitch-wrapper">
          <h1 className="brand-name glitch" data-text="innovAI">
            innov<span className="highlight">AI</span>
          </h1>
        </div>
        
        <div className="terminal-loader">
          <div className="terminal-header">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <div className="terminal-window">
            <p className="code-text">
              <span className="prompt">&gt;</span> {text}
            </p>
            <div className="progress-bar-container">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="percentage">{Math.floor(progress)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
