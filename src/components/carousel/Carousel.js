import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  require("../../photos/haircut1.jpg"),
  require("../../photos/haircut11.jpg"),
  require("../../photos/haircut3.jpg"),
  require("../../photos/haircut4.jpg"),
  require("../../photos/haircut5.jpg"),
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="carousel-container relative overflow-hidden">
      <div
        className="carousel-inner flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-item min-w-full" key={index}>
            <img
              src={image}
              className="w-full h-auto"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
