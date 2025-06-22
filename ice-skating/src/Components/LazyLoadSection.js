import React, { useEffect, useRef, useState } from "react";

const LazyLoadSection = ({ id, className, children }) => {
  const REF = useRef(null);
  const [IS_VISIBLE, SET_IS_VISIBLE] = useState(false);

  useEffect(() => {
    const CURRENT = REF.current; // <-- Snapshot ref

    const OBSERVER = new IntersectionObserver(
      (ENTRIES, OBSERVER_INSTANCE) => {
        ENTRIES.forEach((ENTRY) => {
          if (ENTRY.isIntersecting) {
            SET_IS_VISIBLE(true);
            OBSERVER_INSTANCE.unobserve(ENTRY.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (CURRENT) {
      OBSERVER.observe(CURRENT);
    }

    return () => {
      if (CURRENT) {
        OBSERVER.unobserve(CURRENT);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={REF}
      className={`${className} lazy-section ${IS_VISIBLE ? "visible" : ""}`}
    >
      {children}
    </section>
  );
};

export default LazyLoadSection;
