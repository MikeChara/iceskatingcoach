import React, { useState, lazy, Suspense, useEffect } from "react";
import "./App.css";
import LazyLoadSection from "./Components/LazyLoadSection";
import Gallery from "./PageComponents/Gallery";
import Bookings from "./PageComponents/Bookings";
import CoachingLicence from "./PageComponents/CoachingLicence";
import SEO from "./Components/SEO";
import Chantelle from "./Media/chantelle-ice-skating-lessons.jpg";
import Licence from "./Media/chantelle-coach-licence.jpg";

// lazy-loaded page bits
const Coaching = lazy(() => import("./PageComponents/Coaching"));
const New = lazy(() => import("./PageComponents/New"));
const About = lazy(() => import("./PageComponents/About"));

const IMAGE_ARRAY = importAllImages(
  require.context("./Media", false, /\.(png|jpe?g|svg)$/),
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
    if (
      CurrentView === "gallery" ||
      CurrentView === "bookingsPage" ||
      CurrentView === "coachinglicence"
    ) {
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
      <SEO />
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
              <button onClick={() => navigateTo("coachinglicence")}>
                Licence
              </button>
              <button onClick={() => navigateTo("gallery")}>Gallery</button>
            </div>
            {/* This random number is the unicode value for a burger-menu icon. Stop deleting it, it's not a typo. */}
            <button className="burger-menu" onClick={toggleMobileNav}>
              &#9776;
            </button>
          </nav>
        </header>

        <main className="main-content">
          <section id="hero" className="hero-section" fetchpriority="high">
            <img
              src={Chantelle}
              alt="Chantelle Ice Skating Lessons"
              className="visually-hidden"
              aria-hidden="false"
              fetchpriority="high"
            />
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
                <LazyLoadSection
                  id="about"
                  className="section-container"
                  title="Ice skating lessons in Slough"
                >
                  <About OnNavigate={SetCurrentView} />
                </LazyLoadSection>
                <LazyLoadSection
                  id="new"
                  className="section-container"
                  title="New to the ice rink? No problem"
                >
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
                <title className="section-header">
                  Slough Ice Rink Ice Skating Lessons
                </title>
                <Bookings />
              </div>
            )}
            {CurrentView === "coachinglicence" && (
              <div className="section-container">
                <title className="section-header">Coaching Licence</title>
                <CoachingLicence Licence={Licence} />
              </div>
            )}
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default App;
