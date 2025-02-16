import React from "react";
import "./App.css";
import Coaching from "./PageComponents/Coaching";
import Bookings from "./PageComponents/Bookings";
import Contact from "./PageComponents/Contact";
import New from "./PageComponents/New";
import About from "./PageComponents/About";
import NavButtons from "./Components/NavButtons";

const App = () => {
  const scrollToSection = (ID) => {
    const TARGET = document.getElementById(ID);
    if (TARGET) {
      TARGET.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">Chantelle A' Court</div>
        <NavButtons scrollToSection={scrollToSection} />
      </header>
      <main className="main-content">
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-overlay">
            <h1>Inspire Your Journey</h1>
            <p>Empowering you to achieve your highest potential.</p>
            <button onClick={() => scrollToSection("about")}>Learn More</button>
          </div>
        </section>

        {/* Main Sections */}
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
        {/*
        <section id="contact" className="section-container">
          <Contact />
        </section>
        */}
      </main>
    </div>
  );
};

export default App;
