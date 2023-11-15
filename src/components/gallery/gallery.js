import React, { useState } from "react";
import "./gallery.css";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animateGrid, setAnimateGrid] = useState(true);

  const handleCategoryChange = (category) => {
    setAnimateGrid(true);
    setSelectedCategory(category);
  };
  const handleAnimationEnd = () => {
    setAnimateGrid(false);
  };

  const images = [
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      category: "All",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      category: "Cuts",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      category: "SnoBalls",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      category: "Lot7",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      category: "Coffee",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      category: "Cuts",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      category: "SnoBalls",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      category: "Lot7",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      category: "Coffee",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      category: "Cuts",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
      category: "SnoBalls",
    },
    {
      url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
      category: "Lot7",
    },
  ];

  const categoryMappings = {
    All: { label: "Full Gallery", images: images },
    Cuts: {
      label: "Cuts",
      images: images.filter((image) => image.category === "Cuts"),
    },
    SnoBalls: {
      label: "SnoBalls",
      images: images.filter((image) => image.category === "SnoBalls"),
    },
    Lot7: {
      label: "Lot7",
      images: images.filter((image) => image.category === "Lot7"),
    },
    Coffee: {
      label: "Coffee",
      images: images.filter((image) => image.category === "Coffee"),
    },
  };

  const selectedCategoryInfo = categoryMappings[selectedCategory];

  return (
    <div id="galleryComponent">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap galleryButtons">
        {Object.keys(categoryMappings).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={`text-gray-900 border border-ivory hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-ivory rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white  ${
              selectedCategory === category ? "bg-gray-900 text-white" : ""
            }`}
          >
            {categoryMappings[category].label}
          </button>
        ))}
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${
          animateGrid ? "animate__animated animate__fadeIn" : ""
        }`}
        onAnimationEnd={handleAnimationEnd}
      >
        {selectedCategoryInfo.images.map((image, index) => (
          <div key={`${selectedCategory}-${index}`}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.url}
              alt={`Image ${index + 1}`}
              key={`${selectedCategory}-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
