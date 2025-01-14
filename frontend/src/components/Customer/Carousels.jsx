import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slogans = [
    "🌱 Plant a seed of hope, watch it grow into a forest.",
    "🌳 Your kindness today will shade the world tomorrow.",
    "🌿 Every plant you donate breathes life into the planet.",
    "🌍 Be the change you wish to see—plant a tree!",
    "💚 Green hearts give back to the Earth. Thank you!",
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Automatically transition between slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % slogans.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slogans.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentPage((prev) => (prev + 1) % slogans.length);
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentPage((prev) => (prev - 1 + slogans.length) % slogans.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % slogans.length);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + slogans.length) % slogans.length);

  return (
    <div
      className="relative mx-3 my-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Content Box */}
      <div className="bg-gradient-to-r from-green-200 via-green-100 to-green-200 text-green-800 text-center p-8 rounded-xl shadow-lg min-h-[150px] flex items-center justify-center transform transition-all duration-500 ease-in-out">
        <p className="text-2xl font-semibold">{slogans[currentPage]}</p>
      </div>

      {/* Navigation Arrows and Dots */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        {/* Left Arrow */}
        <button
          onClick={prevPage}
          className="text-green-500 hover:text-green-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Page Indicators */}
        <div className="flex space-x-2">
          {slogans.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage ? "bg-green-500 scale-110" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextPage}
          className="text-green-500 hover:text-green-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
