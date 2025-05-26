import React, { useState, lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import LazyLoadSection from "./Components/LazyLoadSection";
import Gallery from "./PageComponents/Gallery";
import Bookings from "./PageComponents/Bookings";

// lazy-loaded page bits
const Coaching = lazy(() => import("./PageComponents/Coaching"));
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
  const [MobileNavOpen, SetMobileNavOpen] = useState(false);
  const [Scrolled, SetScrolled] = useState(false);
  const [CurrentView, SetCurrentView] = useState("main");

  useEffect(() => {
    function handleScroll() {
      SetScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav whenever navigation occurs
  function navigateTo(View, SectionId = null) {
    SetCurrentView(View);
    if (MobileNavOpen) {
      SetMobileNavOpen(false);
    }
    if (SectionId) {
      setTimeout(() => scrollToSection(SectionId), 0);
    }
  }

  // scroll to bottom when switching to gallery
  useEffect(() => {
    if (CurrentView === "gallery" || CurrentView === "bookingsPage") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  }, [CurrentView]);

  function toggleMobileNav() {
    SetMobileNavOpen((prev) => !prev);
  }

  function scrollToSection(Id) {
    const target = document.getElementById(Id);
    if (!target) return;
    const headerHeight = document.querySelector(".header").offsetHeight;
    const y =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <>
      <Helmet>
        <title>Ice Skating Lessons Slough</title>
        <meta
          name="description"
          content="Private ice skating lessons in Slough. Join Chantelle A' Court for expert coaching at Slough Ice Arena. Beginners & advanced skaters welcome!"
        />
        <meta
          name="keywords"
          content="ice-skating, iceskating, skating, slough ice arena, slough ice skating, coaching, slough, slough everyone active, slough ice rink, ice skating coach, ice skating lessons, ISU certification, west london ice skating, west london ice skating lessons"
        />
        <link rel="canonical" href="https://coachchantelle.app" />
        <meta
          property="og:title"
          content="Skating Lessons in Slough, West London | Chantelle A' Court"
        />
        <meta
          property="og:description"
          content="Book ice skating lessons in Slough and West London with Chantelle A' Court. Coaching for all levels at Slough Ice Arena and surrounding areas."
        />
        <meta property="og:url" content="https://coachchantelle.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://coachchantelle.app/chantelle2.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Skating Lessons in Slough, West London | Chantelle A' Court"
        />
        <meta
          name="twitter:description"
          content="Book ice skating lessons in Slough, West London with Chantelle A' Court. Coaching for all levels at Slough Ice Arena and surrounding areas."
        />
        <meta
          name="twitter:image"
          content="https://coachchantelle.app/chantelle2.jpg"
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            "name": "Ice Skating Lessons",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Slough",
              "addressRegion": "West London",
              "addressCountry": "UK"
            },
            "areaServed": [
              "Slough",
              "West London",
              "Surrounding Areas"
            ],
            "url": "https://coachchantelle.app"
          }`}
        </script>
      </Helmet>
      <div className="app-container">
        <header className={`header ${Scrolled ? "scrolled" : ""}`}>
          <div className="logo">Chantelle A' Court</div>
          <nav className="nav-container">
            <div className={`nav-buttons ${MobileNavOpen ? "open" : ""}`}>
              <button onClick={() => navigateTo("main", "hero")}>Home</button>
              <button onClick={() => navigateTo("main", "about")}>About</button>
              <button onClick={() => navigateTo("main", "new")}>New</button>
              <button onClick={() => navigateTo("main", "coaching")}>
                Coaching
              </button>
              <button onClick={() => navigateTo("bookingsPage")}>
                Bookings
              </button>
              <button onClick={() => navigateTo("gallery")}>Gallery</button>
            </div>
            <button className="burger-menu" onClick={toggleMobileNav}>
              &#9776;
            </button>
          </nav>
        </header>

        <main className="main-content">
          <section id="hero" className="hero-section">
            <div className="hero-overlay">
              <h1>Inspire Your Journey</h1>
              <p>Unlock your potential</p>
              <button onClick={() => navigateTo("main", "about")}>
                Learn ice skating
              </button>
            </div>
          </section>

          <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
            {CurrentView === "main" && (
              <>
                <LazyLoadSection id="about" className="section-container">
                  <About />
                </LazyLoadSection>
                <LazyLoadSection id="new" className="section-container">
                  <New />
                </LazyLoadSection>
                <LazyLoadSection id="coaching" className="section-container">
                  <Coaching OnNavigate={SetCurrentView} />
                </LazyLoadSection>
              </>
            )}

            {CurrentView === "gallery" && (
              <div className="gallery-page">
                <h1 className="gallery-title">Gallery</h1>
                <Gallery Images={IMAGE_ARRAY} Interval={5000} />
              </div>
            )}

            {CurrentView === "bookingsPage" && (
              <div className="section-container">
                <h1 className="section-header">
                  Slough Ice Arena Ice Skating Lessons
                </h1>
                <Bookings />
              </div>
            )}
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default App;
