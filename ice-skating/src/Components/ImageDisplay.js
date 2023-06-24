import React, { useState, useEffect } from "react";

export default function ImageDisplay({ image, className, alt, onClick }) {
  const [displayImage, SetdisplayImage] = useState("Loading...");

  useEffect(() => {
    SetdisplayImage(image);
  });

  if (!image) {
    return <div>Image failed to load.</div>;
  }
  if (displayImage) {
    return (
      <img
        src={displayImage}
        className={className}
        alt={alt}
        onClick={onClick}
      ></img>
    );
  }
}
