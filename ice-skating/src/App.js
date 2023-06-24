import React from "react";
import chantelleImage from "./Media/chantelle1.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Chantelle-Splash-Container">
          <img
            src={chantelleImage}
            className="Chantelle-Splash"
            alt="Chantelle A'Court"
          />
        </div>
        <p>Chantelle A'Court Ice Skating.</p>
      </header>
    </div>
  );
}

export default App;
