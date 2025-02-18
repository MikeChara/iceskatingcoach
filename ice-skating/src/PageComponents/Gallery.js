import React, { useState, useEffect } from "react";

const Carousel = ({ Images, Interval = 3000 }) => {
  const [ActiveIndex, SetActiveIndex] = useState(0);

  useEffect(() => {
    const Timer = setInterval(() => {
      SetActiveIndex((PrevIndex) => (PrevIndex + 1) % Images.length);
    }, Interval);
    return () => clearInterval(Timer);
  }, [Images, Interval]);

  return (
    <div className="carousel">
      <h1>Gallery</h1>
      {Images.map((Image, Index) => (
        <div
          key={Index}
          className={`carousel-item ${Index === ActiveIndex ? "active" : ""}`}
        >
          <img src={Image.src} alt={Image.alt || `Slide ${Index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
