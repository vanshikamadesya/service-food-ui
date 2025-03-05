import React, { useState, useEffect } from 'react';
import Button from './Button'; 
import { Slide } from '../data/home';

interface HomeHeroSectionProps {
  slides: Slide[];
  videoSrc: string;
}

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ slides, videoSrc }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-start items-center pl-10 md:pl-20 lg:pl-32 font-inter">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start text-left text-white max-w-[900px] md:pl-20 md:mt-24">
        {/* Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-7xl font-bold leading-tight mb-3">
          Behind Every <br />
          Great{" "}
          <span className="inline-block mt-4">
            {slides[currentIndex].dynamicTitle}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl mt-4 max-w-[700px]">
          {slides[currentIndex].subtitle
            .split(" ")
            .slice(
              0,
              Math.ceil(slides[currentIndex].subtitle.split(" ").length / 2)
            )
            .join(" ")}
          <br />
          {slides[currentIndex].subtitle
            .split(" ")
            .slice(
              Math.ceil(slides[currentIndex].subtitle.split(" ").length / 2)
            )
            .join(" ")}
        </p>

        {/* Button */}
        <div className="mt-8">
          <Button
            text="Create Account"
            bgColor="bg-white"
            textColor="text-black"
            className="md:py-3 md:px-14 md:text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
