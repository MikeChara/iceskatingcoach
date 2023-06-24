import React, { useState, useEffect } from "react";
import chantelleImage from "./Media/chantelle1.jpg";
import "./App.css";
import ImageDisplay from "./Components/ImageDisplay";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      {showLanding ? (
        <div className="landing-page">{/* Landing page content */}</div>
      ) : (
        <div className="main-content">
          <div className="chantelle-splash-container">
            <ImageDisplay
              image={chantelleImage}
              className="Chantelle-Splash"
              alt="Chantelle A'Court"
              onClick={handleClick}
            />
          </div>
          <div className="welcome-message">
            <p>Chantelle A'Court Ice Skating.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
