import React, { useState, useEffect } from "react";

export default function ImageDisplay({ image, className, alt }) {
  const [displayImage, setDisplayImage] = useState("Loading...");

  useEffect(() => {
    setDisplayImage(image);
  }, [image]);

  if (!image) {
    return <div>Image failed to load.</div>;
  }

  if (displayImage) {
    return <img src={displayImage} className={className} alt={alt}></img>;
  }
}
