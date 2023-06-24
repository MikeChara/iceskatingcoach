import React, { useState, useEffect } from "react";
import chantelleImage from "./Media/chantelle1.jpg";
import "./App.css";
import ImageDisplay from "./Components/ImageDisplay";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  //show the landing page for x seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  //make sure main content loads after landing has finished cd
  useEffect(() => {
    if (!showLanding) {
      setShowMainContent(true);
    }
  }, [showLanding]);

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      {showLanding ? (
        <div className="landing-page">{/* Landing page content */}</div>
      ) : (
        <div className={`main-content ${showMainContent ? "fade-in" : ""}`}>
          <div className="Chantelle-Splash-Container">
            <ImageDisplay
              image={chantelleImage}
              className="Chantelle-Splash"
              alt="Chantelle A'Court"
              onClick={handleClick}
            />
          </div>
          <div>
            <p>Chantelle A'Court Ice Skating.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
