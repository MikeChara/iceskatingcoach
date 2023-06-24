import React, { useState, useEffect } from "react";
import chantelleImage from "./Media/chantelle1.jpg";
import "./App.css";
import ImageDisplay from "./Components/ImageDisplay";
import Button from "./Components/Button.js";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      {showLanding ? (
        <div className="landing-page">{/* Landing page video goes here */}</div>
      ) : (
        <div className="main-content">
          <div className="chantelle-splash-container">
            <ImageDisplay
              image={chantelleImage}
              className="chantelle-splash"
              alt="Chantelle A'Court"
              onClick={handleClick}
            />
            <div className="menu">
              <Button
                onClick={handleClick}
                text="Book Lessons"
                className="menu-button"
              />
              <Button
                onClick={handleClick}
                text="New to ice-skating?"
                className="menu-button"
              />
              <Button
                onClick={handleClick}
                text="Coaching Style"
                className="menu-button"
              />
              <Button
                onClick={handleClick}
                text="About Chantelle"
                className="menu-button"
              />
              <Button
                onClick={handleClick}
                text="Contact"
                className="menu-button"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
