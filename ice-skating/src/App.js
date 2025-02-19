import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import LazyLoadSection from "./Components/LazyLoadSection";

// Lazy load the page components
const Coaching = lazy(() => import("./PageComponents/Coaching"));
const Bookings = lazy(() => import("./PageComponents/Bookings"));
const Contact = lazy(() => import("./PageComponents/Contact"));
const New = lazy(() => import("./PageComponents/New"));
const About = lazy(() => import("./PageComponents/About"));
const Gallery = lazy(() => import("./PageComponents/Gallery"));

const IMAGE_ARRAY = [
  { src: "/Media/chantelle3.jpg", alt: "New starters learning" },
  { src: "/Media/chantelle2.jpg", alt: "Ice skating basics" },
  { src: "/Media/Ice-Arena-photo.jpg", alt: "Group coaching session" },
];

const App = () => {
  const [MOBILE_NAV_OPEN, SET_MOBILE_NAV_OPEN] = useState(false);

  const TOGGLE_MOBILE_NAV = () => {
    SET_MOBILE_NAV_OPEN((prev) => !prev);
  };

  const scrollToSection = (ID) => {
    const TARGET = document.getElementById(ID);
    if (TARGET) {
      // Get the height of the header
      const HEADER_HEIGHT = document.querySelector(".header").offsetHeight;
      // Calculate the position of the target element
      const TARGET_POSITION =
        TARGET.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
      window.scrollTo({
        top: TARGET_POSITION,
        behavior: "smooth",
      });
    }
    // Close mobile nav if open
    if (MOBILE_NAV_OPEN) {
      SET_MOBILE_NAV_OPEN(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">Chantelle A' Court</div>
        <nav className="nav-container">
          <div className={`nav-buttons ${MOBILE_NAV_OPEN ? "open" : ""}`}>
            <button onClick={() => scrollToSection("hero")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("new")}>New</button>
            <button onClick={() => scrollToSection("coaching")}>
              Coaching
            </button>
            <button onClick={() => scrollToSection("bookings")}>
              Bookings
            </button>
            <button onClick={() => scrollToSection("gallery")}>Gallery</button>
          </div>
          <button className="burger-menu" onClick={TOGGLE_MOBILE_NAV}>
            &#9776;
          </button>
        </nav>
      </header>
      <main className="main-content">
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-overlay">
            <h1>Inspire Your Journey</h1>
            <p>Unlock your potential</p>
            <button onClick={() => scrollToSection("about")}>
              Learn ice skating
            </button>
          </div>
        </section>

        <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
          <LazyLoadSection id="about" className="section-container">
            <About />
          </LazyLoadSection>

          <LazyLoadSection id="new" className="section-container">
            <New />
          </LazyLoadSection>

          <LazyLoadSection id="coaching" className="section-container">
            <Coaching />
          </LazyLoadSection>

          <LazyLoadSection id="bookings" className="section-container">
            <Bookings />
          </LazyLoadSection>

          <LazyLoadSection id="gallery" className="section-container">
            <h1>Gallery</h1>
            <Gallery Images={IMAGE_ARRAY} Interval={5000} />
          </LazyLoadSection>
          {/*
          <LazyLoadSection id="contact" className="section-container">
            <Contact />
          </LazyLoadSection>
          */}
        </Suspense>
      </main>
    </div>
  );
};

export default App;
