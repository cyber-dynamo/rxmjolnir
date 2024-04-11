import React, { useState, useEffect } from 'react';

const images = [
  'carousel1.jpeg',
  'carousel2.jpeg',
  'carousel3.jpeg',
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 px-2 py-1 rounded-full"
        onClick={prevImage}
      >
        &lt;
      </button>
      <img
        className="mx-auto max-w-full max-h-screen"
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 px-2 py-1 rounded-full"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
