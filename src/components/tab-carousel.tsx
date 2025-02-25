import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import leftArrow from "../assets/Impact/arrow left.png";
import rightArrow from "../assets/Impact/arrow right.png";

interface Slide {
  title: string;
  image: string;
  content?: string;
}

interface ImpactSectionProps {
  slides: Slide[];
  mainTitle: string;
  showDownloadButton?: boolean;
}

const ImpactSection: React.FC<ImpactSectionProps> = ({
  slides,
  mainTitle,
  showDownloadButton = true,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden text-white font-['Inter']">
      {/* Title */}
      <div className="absolute text-white top-[50px] left-1/2 transform -translate-x-1/2 z-[99] text-center w-full font-inter">
  {/* Dynamic Title */}
  <h1 className="text-3xl font-bold uppercase tracking-wide text-white">
    {mainTitle}
  </h1>
  <div className="w-28 h-1 bg-white mx-auto mt-4"></div>
  {/* Navigation Bar */}
  <div className="mt-10 flex justify-center space-x-8 text-lg font-semibold text-gray-300">
    {slides.map((slide, idx) => (
      <button
        key={idx}
        className={`relative pb-2 transition-all ${
          activeIndex === idx ? "text-white font-bold" : "opacity-70"
        }`}
        onClick={() => swiperRef.current?.swiper.slideToLoop(idx)}
      >
        {slide.title}
        {activeIndex === idx && (
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>
        )}
      </button>
    ))}
  </div>
</div>


      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex flex-col items-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Slide Content */}
              <div className="absolute top-1/2 left-[10vw] w-[40vw] max-w-lg text-left">
                <p className="text-3xl font-semibold leading-relaxed">
                  {slide.content || "Default content for this section."}
                </p>
                {showDownloadButton && (
                  <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg mt-6 transition hover:bg-gray-200">
                    Download Report
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute right-[150px] bottom-[50px] z-[9]" onClick={() => swiperRef.current?.swiper.slidePrev()}>
        <img src={leftArrow} alt="Previous" />
      </button>
      <button className="next-btn absolute right-[50px] bottom-[50px] z-[9]" onClick={() => swiperRef.current?.swiper.slideNext()}>
        <img src={rightArrow} alt="Next" />
      </button>
    </div>
  );
};

export default ImpactSection;
