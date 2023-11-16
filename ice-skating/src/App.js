import React, { useState, useEffect } from "react";
import chantelleImage from "./Media/chantelle1.jpg";
import "./App.css";
import ImageDisplay from "./Components/ImageDisplay";
import Button from "./Components/Button.js";
import About from "./PageComponents/About";
import BookLessons from "./PageComponents/BookLessons";
import Coaching from "./PageComponents/Coaching";
import Contact from "./PageComponents/Contact";
import New from "./PageComponents/New";

function App() {
  // This state allows a time which sets off the various moving elements
  // when the page is first loaded.
  const [showLanding, setShowLanding] = useState(true);
  // This state sets which component is loaded once the above is finished
  // or a button is clicked.
  const [currentComponent, setCurrentComponent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Function to set the state and therefore switch to a different component.
  const switchComponent = (componentName) => {
    setCurrentComponent(componentName);
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
              text="Book Lessons"
              className="menu-button"
            />
            <Button
              onClick={() => switchComponent("New?")}
              text="New to ice-skating?"
              className="menu-button"
            />
            <Button
              onClick={() => switchComponent("Coaching")}
              text="Coaching"
              className="menu-button"
            />
            <Button
              onClick={() => switchComponent("About")}
              text="About Chantelle"
              className="menu-button"
            />
            <Button
              onClick={() => switchComponent("Contact")}
              text="Contact"
              className="menu-button"
            />
          </div>
          <div className="chantelle-splash-container">
            <ImageDisplay
              image={chantelleImage}
              className="chantelle-splash"
              alt="Chantelle A'Court"
            />
            <div className="page-content-holder">
              <div className="page-content">
                {currentComponent === "Book Lessons" && (
                  <BookLessons h1className="page-content-header" />
                )}
              </div>
              <div className="page-content">
                {currentComponent === "New?" && (
                  <New h1className="page-content-header" />
                )}
              </div>
              <div className="page-content">
                {currentComponent === "Coaching" && (
                  <Coaching h1className="page-content-header" />
                )}
              </div>
              <div className="page-content">
                {currentComponent === "About" && (
                  <About h1className="page-content-header" />
                )}
              </div>
              <div className="page-content">
                {currentComponent === "Contact" && (
                  <Contact h1className="page-content-header" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
