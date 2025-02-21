import React, { useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
import LazyLoadSection from "./Components/LazyLoadSection";

// Lazy load the page components
const Coaching = lazy(() => import("./PageComponents/Coaching"));
const Bookings = lazy(() => import("./PageComponents/Bookings"));
const Contact = lazy(() => import("./PageComponents/Contact"));
const New = lazy(() => import("./PageComponents/New"));
const About = lazy(() => import("./PageComponents/About"));
const Gallery = lazy(() => import("./PageComponents/Gallery"));

const IMAGE_ARRAY = IMPORT_ALL_IMAGES(
  require.context("./Media", false, /\.(png|jpe?g|svg)$/)
);

const App = () => {
  const [MOBILE_NAV_OPEN, SET_MOBILE_NAV_OPEN] = useState(false);
  const [SCROLLED, SET_SCROLLED] = useState(false);

  useEffect(() => {
    const HANDLE_SCROLL = () => {
      SET_SCROLLED(window.scrollY > 0);
    };

    window.addEventListener("scroll", HANDLE_SCROLL);
    return () => window.removeEventListener("scroll", HANDLE_SCROLL);
  }, []);

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
      <header className={`header ${SCROLLED ? "scrolled" : ""}`}>
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
        </Suspense>
      </main>
    </div>
  );
};

// helper function to import all images from a folder
function IMPORT_ALL_IMAGES(R) {
  return R.keys().map((FILE_NAME) => {
    const SRC = R(FILE_NAME);
    // Generate alt text by removing the "./" and file extension, then replace hyphens with spaces
    const ALT = FILE_NAME.replace("./", "")
      .replace(/\.[^/.]+$/, "")
      .replace(/-/g, " ");
    return { src: SRC, alt: ALT };
  });
}

export default App;
