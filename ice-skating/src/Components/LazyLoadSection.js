import React, { useEffect, useRef, useState } from "react";

const LazyLoadSection = ({ id, className, children }) => {
  const REF = useRef(null);
  const [IS_VISIBLE, SET_IS_VISIBLE] = useState(false);

  useEffect(() => {
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
      className={`${className} lazy-section ${IS_VISIBLE ? "visible" : ""}`}
    >
      {children}
    </section>
  );
};

export default LazyLoadSection;
