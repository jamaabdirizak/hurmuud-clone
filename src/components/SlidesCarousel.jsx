import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'; // Import the icons you want to use

// Import your custom slide components
import Home from '../pages/Home'; // Adjust path if Home is in pages/
import Plus from '../pages/Plus'; // Adjust path if Plus is in pages/

const SlidesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Define your slides as an array of components
  const slides = [
    <Home />,
    <Plus />,
    // Add more slides here if you have them, e.g.:
    // <div>Slide 3 Content</div>,
    // <div>Slide 4 Content</div>,
    // <div>Slide 5 Content</div>,
  ];
  const totalSlides = slides.length; // Dynamically get total slides from the array

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Optional: Auto-play functionality (can be removed if not desired)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]); // Added totalSlides to dependencies, though not strictly needed here if slides array doesn't change dynamically

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative min-h-[500px] overflow-hidden rounded-lg md:min-h-[650px]">
        {slides.map((slideContent, index) => (
          <div
            key={index} // Important for React list rendering
            className={`${currentSlide === index ? 'block' : 'hidden'} duration-700 ease-in-out absolute inset-0`}
            // data-carousel-item is usually for external JS libraries like Flowbite, not strictly needed for this React-only logic
          >
            {slideContent}
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[...Array(totalSlides).keys()].map((index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-400'}`}
            aria-current={currentSlide === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaAngleLeft className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaAngleRight className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default SlidesCarousel;