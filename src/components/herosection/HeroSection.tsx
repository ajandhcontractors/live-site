'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import InfoSection from './InfoSection';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images and headings array
  const slides = [
    {
      image: '/slider-2.jpg',
      headingSmall: { text: 'THINKING ON TOP', color: '#800000' },
      headingLarge: { text: 'BUILDING DREAMS', color: 'white' },
    },
    {
      image: '/slider-1.jpg',
      headingSmall: { text: 'INNOVATIVE SOLUTIONS', color: '#800000' },
      headingLarge: { text: 'TRANSFORMING SPACES', color: 'white' },
    },
    {
      image: '/slider-3.jpg',
      headingSmall: { text: 'QUALITY YOU TRUST', color: '#800000' },
      headingLarge: { text: 'EXPERT SERVICES', color: 'white' },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform scale-105">
          <Image
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex}`}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-1000 ease-in-out transform hover:scale-110"
            priority
          />
        </div>

        {/* Headings with animations */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col text-center px-4 py-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold transition-all duration-1000 ease-in-out"
            style={{
              color: slides[currentIndex].headingSmall.color,
              transform: 'translateY(-20px)',
            }}
          >
            {slides[currentIndex].headingSmall.text}
          </h2>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transition-all duration-1000 ease-in-out mt-4"
            style={{
              color: slides[currentIndex].headingLarge.color,
              transform: 'translateY(20px)',
            }}
          >
            {slides[currentIndex].headingLarge.text}
          </h1>
        </div>

        {/* Left Arrow */}
        <div
          onClick={prevImage}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer bg-black p-4 rounded-full text-white hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        {/* Right Arrow */}
        <div
          onClick={nextImage}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer bg-black p-4 rounded-full text-white hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </section>

      {/* Info Section */}
      <InfoSection />
    </>
  );
};

export default HeroSection;
