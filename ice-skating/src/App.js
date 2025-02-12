import React from "react";
import "./App.css";
import Coaching from "./PageComponents/Coaching";
import Bookings from "./PageComponents/Bookings";
import Contact from "./PageComponents/Contact";
import New from "./PageComponents/New";
import About from "./PageComponents/About";
import NavButtons from "./Components/NavButtons"; // Import the new component

const App = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <NavButtons scrollToSection={scrollToSection} />

      <section id="about" className="section-container">
        <About />
      </section>
      <section id="new" className="section-container">
        <New />
      </section>
      <section id="coaching" className="section-container">
        <Coaching />
      </section>
      <section id="bookings" className="section-container">
        <Bookings />
      </section>
      <section id="contact" className="section-container">
        <Contact />
      </section>
    </div>
  );
};

export default App;
