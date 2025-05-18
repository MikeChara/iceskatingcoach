import React, { useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
import LazyLoadSection from "./Components/LazyLoadSection";
import Gallery from "./PageComponents/Gallery";

// lazy-loaded page bits
const Coaching = lazy(() => import("./PageComponents/Coaching"));
const Bookings = lazy(() => import("./PageComponents/Bookings"));
const New = lazy(() => import("./PageComponents/New"));
const About = lazy(() => import("./PageComponents/About"));

const IMAGE_ARRAY = importAllImages(
  require.context("./Media", false, /\.(png|jpe?g|svg)$/)
);

function importAllImages(r) {
  return r.keys().map((fileName) => {
    const src = r(fileName);
    const alt = fileName
      .replace("./", "")
      .replace(/\.[^/.]+$/, "")
      .replace(/-/g, " ");
    return { src, alt };
  });
}

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState("main");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll to bottom when switching to gallery
  useEffect(() => {
    if (currentView === "gallery") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [currentView]);

  function toggleMobileNav() {
    setMobileNavOpen((prev) => !prev);
  }

  function showMainAndScroll(sectionId) {
    if (currentView !== "main") {
      setCurrentView("main");
      setTimeout(() => scrollToSection(sectionId), 0);
    } else {
      scrollToSection(sectionId);
    }
    if (mobileNavOpen) setMobileNavOpen(false);
  }

  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (!target) return;
    const headerHeight = document.querySelector(".header").offsetHeight;
    const y =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <div className="app-container">
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">Chantelle A' Court</div>
        <nav className="nav-container">
          <div className={`nav-buttons ${mobileNavOpen ? "open" : ""}`}>
            <button onClick={() => showMainAndScroll("hero")}>Home</button>
            <button onClick={() => showMainAndScroll("about")}>About</button>
            <button onClick={() => showMainAndScroll("new")}>New</button>
            <button onClick={() => showMainAndScroll("coaching")}>
              Coaching
            </button>
            <button onClick={() => setCurrentView("bookingsPage")}>
              Bookings
            </button>
            <button onClick={() => setCurrentView("gallery")}>Gallery</button>
          </div>
          <button className="burger-menu" onClick={toggleMobileNav}>
            &#9776;
          </button>
        </nav>
      </header>

      <main className="main-content">
        {/* Always render hero */}
        <section id="hero" className="hero-section">
          <div className="hero-overlay">
            <h1>Inspire Your Journey</h1>
            <p>Unlock your potential</p>
            <button
              onClick={() =>
                currentView === "gallery"
                  ? setCurrentView("main")
                  : showMainAndScroll("about")
              }
            >
              Learn ice skating
            </button>
          </div>
        </section>

        <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
          {currentView === "main" && (
            <>
              <LazyLoadSection id="about" className="section-container">
                <About />
              </LazyLoadSection>

              <LazyLoadSection id="new" className="section-container">
                <New />
              </LazyLoadSection>

              <LazyLoadSection id="coaching" className="section-container">
                <Coaching OnNavigate={setCurrentView} />
              </LazyLoadSection>
            </>
          )}

          {currentView === "gallery" && (
            <div className="gallery-page">
              <h1 className="gallery-title">Gallery</h1>
              <Gallery Images={IMAGE_ARRAY} Interval={5000} />
            </div>
          )}

          {currentView === "bookingsPage" && (
            <div className="bookings-page">
              <h1 className="page-title">Bookings</h1>
              <Bookings />
            </div>
          )}
        </Suspense>
      </main>
    </div>
  );
};

export default App;
