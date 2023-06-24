import React from "react";
import "./button.css";

export default function ImageDisplay({ images, className, alt, onClick }) {
  if (!images) {
    return <div>"Image failed to load "</div>;
  }
  if (!images.length) {
    return (
      <>
        <img
          src={images}
          className={className}
          alt={alt}
          onClick={onClick}
        ></img>
      </>
    );
  }
  if (images.length) {
    return (
      <>
        <img
          src={images}
          className={className}
          alt={alt}
          onClick={onClick}
        ></img>
      </>
    );
  }
}

const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Array of image filenames
const imgElement = document.getElementById("dynamic-image");

let currentIndex = 0;

function changeImage() {
  imgElement.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

// Call the `changeImage` function every 3 seconds
setInterval(changeImage, 3000);
