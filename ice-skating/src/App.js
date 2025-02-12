import React from "react";
import "./App.css";
import Coaching from "./PageComponents/Coaching";
import Bookings from "./PageComponents/Bookings";

const App = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      {/* Navigation buttons */}
      <div className="nav-buttons">
        <button onClick={() => scrollToSection("coaching")}>
          Go to Coaching
        </button>
        <button onClick={() => scrollToSection("bookings")}>
          Go to Bookings
        </button>
      </div>

      <section id="coaching">
        <Coaching />
      </section>
      <section id="bookings">
        <Bookings />
      </section>
    </div>
  );
};

export default App;
