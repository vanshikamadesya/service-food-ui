import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import leftArrow from "../assets/images/arrow left.png";
import rightArrow from "../assets/images/arrow right.png";

interface Slide {
  title: string;
  image: string;
  content?: string;
  subtitle?: string; // Added subtitle for mobile view
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
    <div className="relative w-full h-[90vh] md:h-[90vh] overflow-hidden text-white font-['Inter']">
      {/* Desktop Navigation Elements - Hidden on mobile with CSS */}
      <div className="absolute text-white top-[50px] left-1/2 transform -translate-x-1/2 z-[99] text-center w-full hidden md:block">
        {/* Dynamic Title */}
        <h1 className="text-3xl font-bold uppercase tracking-wide font-['Inter'] text-white">
          {mainTitle}
        </h1>
        <div className="w-28 h-1 bg-white mx-auto mt-4"></div>
        
        {/* Navigation Bar */}
        <div className="mt-10 flex justify-center items-center text-lg font-['Inter'] font-semibold text-gray-300">
          {slides.map((slide, idx) => (
            <div key={idx} className="flex items-center">
              <button
                className={`relative pb-2 px-3 transition-all ${
                  activeIndex === idx ? "text-white font-bold" : "opacity-70"
                }`}
                onClick={() => swiperRef.current?.swiper.slideToLoop(idx)}
              >
                {slide.title}
                {activeIndex === idx && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>
                )}
              </button>
              {idx < slides.length - 1 && <span className="text-white font-['Inter'] px-2">|</span>}
            </div>
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
              className="w-full h-full bg-cover bg-center flex flex-col font-['Inter'] items-center text-white relative"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center"
              }}
            >
              {/* Mobile Overlay - Shown only on mobile with CSS */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between text-center px-4 font-['Inter'] md:hidden">
                <div className="mt-16">
                  <h1 className="text-3xl font-bold uppercase tracking-wide mb-6 font-['Inter']">
                    {mainTitle}
                  </h1>
                  <div className="w-28 h-1 bg-white mx-auto"></div>
                </div>
                
                {/* Mobile Subtitle and Content */}
                <div className="mb-10 text-left ml-6 max-w-40">
                  <h2 className="text-xl font-bold uppercase mb-2 font-['Inter']">
                    {slide.subtitle || slide.title}
                  </h2>
                  <p className="text-base max-w-xs font-['Inter'] font-medium leading-relaxed">
                    {slide.content || "Default content for this section."}
                  </p>
                  {showDownloadButton && (
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold text-sm mt-4 transition hover:bg-gray-200 font-['Inter']">
                      Download Report
                    </button>
                  )}
                </div>
              </div>
              
              {/* Desktop Slide Content - Hidden on mobile with CSS */}
              <div className="absolute top-1/2 left-[10vw] w-[40vw] font-['Inter'] max-w-lg text-left hidden md:block">
                <p className="text-3xl font-medium leading-relaxed">
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

      {/* Navigation Buttons - Different styles for mobile/desktop using CSS */}
      <button className="prev-btn absolute z-[9] md:right-[150px] md:bottom-[50px] md:left-auto md:top-auto left-4 top-1/2 transform md:translate-y-0 -translate-y-1/2" onClick={() => swiperRef.current?.swiper.slidePrev()}>
        <img src={leftArrow} alt="Previous" className="w-8 h-8 md:w-auto md:h-auto" />
      </button>
      <button className="next-btn absolute z-[9] md:right-[50px] md:bottom-[50px] md:left-auto md:top-auto right-4 top-1/2 transform md:translate-y-0 -translate-y-1/2" onClick={() => swiperRef.current?.swiper.slideNext()}>
        <img src={rightArrow} alt="Next" className="w-8 h-8 md:w-auto md:h-auto" />
      </button>
    </div>
  );
};

export default ImpactSection;