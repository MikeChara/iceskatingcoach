import React, { useEffect, useState } from "react";

const ImageScroll = () => {
  const [images, setImages] = useState([
    "chantelle1.jpg",
    "chantelle2.jpg",
    "chantelle3.jpg",
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight) {
      loadNextImage();
    }
  };

  const loadNextImage = () => {
    if (currentImageIndex < images.length) {
      const img = new Image();
      img.src = `/chantelle${currentImageIndex + 1}.jpg`;
      setCurrentImageIndex(currentImageIndex + 1);
      img.onload = () => {
        const gallery = document.getElementById("image-gallery");
        if (gallery) {
          gallery.appendChild(img);
        }
      };
    }
  };

  return (
    <div>
      <div id="image-gallery"></div>
    </div>
  );
};

export default ImageScroll;
