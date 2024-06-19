import React, { useState, useEffect } from "react";
import "./gallery.css";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animateGrid, setAnimateGrid] = useState(true);
  const [shuffledImages, setShuffledImages] = useState([]);

  const images = [
    { url: require("../../photos/haircut9.jpg"), category: "Cuts" },
    { url: require("../../photos/haircut10.jpg"), category: "Cuts" },
    { url: require("../../photos/haircut3.jpg"), category: "Cuts" },
    { url: require("../../photos/haircut4.jpg"), category: "Cuts" },
    { url: require("../../photos/haircut5.jpg"), category: "Cuts" },
    { url: require("../../photos/haircut6.jpg"), category: "Cuts" },
    { url: require("../../photos/haircut7.jpg"), category: "Cuts" },
    { url: require("../../photos/haircut8.jpg"), category: "Cuts" },

    { url: require("../../photos/lot1.jpg"), category: "Lot7" },
    { url: require("../../photos/lot2.jpg"), category: "Lot7" },
    { url: require("../../photos/lot3.jpg"), category: "Lot7" },
    { url: require("../../photos/lot4.jpg"), category: "Lot7" },
    { url: require("../../photos/lot5.jpg"), category: "Lot7" },
    { url: require("../../photos/lot6.jpg"), category: "Lot7" },
    { url: require("../../photos/lot7.jpg"), category: "Lot7" },

    { url: require("../../photos/coffee1.jpg"), category: "Coffee" },
    { url: require("../../photos/coffee2.jpg"), category: "Coffee" },
    { url: require("../../photos/coffee3.jpg"), category: "Coffee" },
    { url: require("../../photos/coffee4.jpg"), category: "Coffee" },
    { url: require("../../photos/coffee5.jpg"), category: "Coffee" },
    { url: require("../../photos/coffee6.jpg"), category: "Coffee" },
    { url: require("../../photos/coffee7.jpg"), category: "Coffee" },

    { url: require("../../photos/snoball1.jpg"), category: "Snoballs" },
    { url: require("../../photos/snoball2.jpg"), category: "Snoballs" },
    { url: require("../../photos/snoball3.jpg"), category: "Snoballs" },
    { url: require("../../photos/snoball4.jpg"), category: "Snoballs" },
    { url: require("../../photos/snoball5.jpg"), category: "Snoballs" },
    { url: require("../../photos/snoball6.jpg"), category: "Snoballs" },
    { url: require("../../photos/snoball7.jpg"), category: "Snoballs" },
  ];

  useEffect(() => {
    const shuffled = shuffle([...images]);
    console.log("Shuffled Images:", shuffled);
    setShuffledImages(shuffled);
  }, []);

  const handleCategoryChange = (category) => {
    setAnimateGrid(true);
    setSelectedCategory(category);
  };

  const handleAnimationEnd = () => {
    setAnimateGrid(false);
  };

  const categoryMappings = {
    All: { label: "Full Gallery", images: shuffledImages },
    Cuts: {
      label: "Cuts",
      images: shuffledImages.filter((image) => image.category === "Cuts"),
    },
    SnoBalls: {
      label: "SnoBalls",
      images: shuffledImages.filter((image) => image.category === "Snoballs"),
    },
    Lot7: {
      label: "Lot7",
      images: shuffledImages.filter((image) => image.category === "Lot7"),
    },
    Coffee: {
      label: "Coffee",
      images: shuffledImages.filter((image) => image.category === "Coffee"),
    },
  };

  const selectedCategoryInfo = categoryMappings[selectedCategory];

  console.log("Selected Category:", selectedCategory);
  console.log("Filtered Images:", selectedCategoryInfo.images);

  return (
    <div id="galleryComponent">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap galleryButtons">
        {Object.keys(categoryMappings).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            className={`text-gray-900 border border-ivory hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-ivory rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white ${
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
          <div key={`${image.url}-${index}`}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.url}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
