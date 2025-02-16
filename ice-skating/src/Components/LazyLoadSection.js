import React, { useState, useEffect, useRef } from "react";

const LazyLoadSection = ({ children, id, className = "" }) => {
  const [IsVisible, SET_IS_VISIBLE] = useState(false);
  const REF = useRef(null);

  useEffect(() => {
    const OBSERVER = new IntersectionObserver(
      (ENTRIES) => {
        ENTRIES.forEach((ENTRY) => {
          if (ENTRY.isIntersecting) {
            // Add a 250ms delay before marking as visible so it looks cool
            setTimeout(() => {
              SET_IS_VISIBLE(true);
              OBSERVER.disconnect();
            }, 250);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (REF.current) {
      OBSERVER.observe(REF.current);
    }
    return () => {
      if (REF.current) {
        OBSERVER.unobserve(REF.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={REF}
      className={`${className} lazy-section ${IsVisible ? "visible" : ""}`}
    >
      {IsVisible ? (
        children
      ) : (
        <div className="loading-placeholder">Loading...</div>
      )}
    </section>
  );
};

export default LazyLoadSection;
