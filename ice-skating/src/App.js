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

      <section id="about">
        <About />
      </section>
      <section id="new">
        <New />
      </section>
      <section id="coaching">
        <Coaching />
      </section>
      <section id="bookings">
        <Bookings />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
