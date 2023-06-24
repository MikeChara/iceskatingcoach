import React from "react";
import chantelleImage from "./Media/chantelle1.jpg";
import "./App.css";
import ImageDisplay from "./Components/ImageDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Chantelle-Splash-Container">
          <ImageDisplay
            images={chantelleImage}
            className="Chantelle-Splash"
            alt="Chantelle A'Court"
            onClick={null}
          />
        </div>
        <p>Chantelle A'Court Ice Skating.</p>
      </header>
    </div>
  );
}

export default App;
