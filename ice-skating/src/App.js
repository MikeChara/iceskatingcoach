import React, { useState, useEffect } from "react";
import chantelleImage from "./Media/chantelle3.jpg";
import chantelleEdgeFade from "./Media/chantelle1Fade.jpg";
import "./App.css";
import ImageDisplay from "./Components/ImageDisplay";
import Button from "./Components/Button.js";
import About from "./PageComponents/About";
import Bookings from "./PageComponents/Bookings.js";
import Coaching from "./PageComponents/Coaching";
import Contact from "./PageComponents/Contact";
import New from "./PageComponents/New";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [currentComponent, setCurrentComponent] = useState(null); // Start with no component selected
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const switchComponent = (componentName) => {
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentComponent(componentName);
      setIsFlipping(false);
    }, 1000); // This delay should match the flip animation duration
  };

  return (
    <div className="App">
      {showLanding ? (
        <div className="landing-page">{/* Landing page video goes here */}</div>
      ) : (
        <div className="main-content">
          <div className="menu">
            <Button
              onClick={() => switchComponent("Book Lessons")}
              text={window.innerWidth <= 768 ? "Bookings" : "Book Lessons"}
              className={
                currentComponent === "Book Lessons"
                  ? "blue-button"
                  : "menu-button"
              }
            />
            <Button
              onClick={() => switchComponent("New?")}
              text={
                window.innerWidth <= 768 ? "Beginners" : "New to ice-skating?"
              }
              className={
                currentComponent === "New?" ? "blue-button" : "menu-button"
              }
            />
            <Button
              onClick={() => switchComponent("Coaching")}
              text="Coaching"
              className={
                currentComponent === "Coaching" ? "blue-button" : "menu-button"
              }
            />
            <Button
              onClick={() => switchComponent("About")}
              text={window.innerWidth <= 768 ? "Chantelle" : "About Chantelle"}
              className={
                currentComponent === "About" ? "blue-button" : "menu-button"
              }
            />
            <Button
              onClick={() => switchComponent("Contact")}
              text="Contact"
              className={
                currentComponent === "Contact" ? "blue-button" : "menu-button"
              }
            />
          </div>
          <div className="render-area">
            <ImageDisplay
              image={chantelleEdgeFade}
              className="chantelle-splash"
              alt="Chantelle A'Court"
            />
            <div className="page-content-holder">
              <div className="slide-bounce-mobile-container">
                {currentComponent === "Book Lessons" && (
                  <Bookings textDivision="slide-bounce" />
                )}
                {currentComponent === "New?" && (
                  <New textDivision="slide-bounce" />
                )}
                {currentComponent === "Coaching" && (
                  <Coaching textDivision="slide-bounce" />
                )}
                {currentComponent === "About" && (
                  <About textDivision="slide-bounce" />
                )}
                {currentComponent === "Contact" && (
                  <Contact textDivision="slide-bounce" />
                )}
                {/* Conditionally render Chantelle image if no component is selected */}
                {!currentComponent && (
                  <div className="chantelle-image-container">
                    <img
                      src={chantelleImage}
                      alt="Chantelle"
                      className="chantelle-main-image"
                    />
                  </div>
                )}
              </div>
            </div>
            <ImageDisplay
              image={chantelleEdgeFade}
              className="chantelle-splash-right"
              alt="Chantelle A'Court"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
