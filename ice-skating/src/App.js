import React from "react";
import chantelleImage from "./Media/chantelle1.jpg";
import "./App.css";
import ImageDisplay from "./Components/ImageDisplay";

function App() {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Chantelle-Splash-Container">
          <ImageDisplay
            image={chantelleImage}
            className="Chantelle-Splash"
            alt="Chantelle A'Court"
            onClick={handleClick}
          />
        </div>
        <p>Chantelle A'Court Ice Skating.</p>
      </header>
    </div>
  );
}

export default App;
