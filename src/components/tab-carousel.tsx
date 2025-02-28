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
  // Use unique class names for this component's navigation buttons
  const prevButtonClass = "impact-prev-btn";
  const nextButtonClass = "impact-next-btn";

  return (
    <div className="relative w-full h-[90vh] md:h-[90vh] overflow-hidden text-white font-['Inter']">
      {/* Desktop Navigation Elements - Hidden on mobile with CSS */}
      <div className="absolute text-white top-[50px] left-1/2 transform -translate-x-1/2 z-[99] text-center w-full hidden md:block">
        {/* Dynamic Title */}
        <h1 className="text-2xl font-bold uppercase tracking-wide font-['Inter'] text-white">
          {mainTitle}
        </h1>
        <div className="w-28 h-[2px] bg-white mx-auto mt-4"></div>
        
        {/* Navigation Bar */}
        <div className="mt-10 flex justify-center items-center text-base font-['Inter'] font-medium text-gray-300">
          {slides.map((slide, idx) => (
            <div key={idx} className="flex items-center">
              <button
                className={`relative pb-2 px-3 transition-all ${
                  activeIndex === idx ? "text-white font-semibold" : "opacity-70"
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

      {/* Mobile Title - Fixed position, only visible on mobile - Removed shadow */}
      <div className="absolute top-0 left-0 right-0 z-[100] text-center pt-16 pb-6 md:hidden">
        <h1 className="text-xl font-bold uppercase tracking-wide font-['Inter']">
          {mainTitle}
        </h1>
        <div className="w-28 h-[2px] bg-white mx-auto mt-4"></div>
      </div>

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation={{ 
          prevEl: `.${prevButtonClass}`, 
          nextEl: `.${nextButtonClass}` 
        }}
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
              {/* Lighter left-side gradient overlay for both mobile and desktop */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
              
              {/* Mobile Overlay - Shown only on mobile with CSS - Lighter bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 flex flex-col justify-end text-center px-4 font-['Inter'] md:hidden">
                {/* Mobile Content - Updated with more bottom padding/margin */}
                <div className="mb-24 text-left ml-6 max-w-40 mt-32">
                  <h2 className="text-xl font-bold uppercase mb-2 font-['Inter']">
                    {slide.subtitle || slide.title}
                  </h2>
                  <p className="text-sm font-['Inter'] font-normal leading-relaxed">
                    {slide.content || "Default content for this section."}
                  </p>
                  {showDownloadButton && (
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm mt-4 transition hover:bg-gray-200 font-['Inter']">
                      Download Report
                    </button>
                  )}
                </div>
              </div>
              
              {/* Desktop Slide Content - Hidden on mobile with CSS */}
              <div className="absolute top-1/2 left-[10vw] w-[40vw] font-['Inter'] max-w-lg text-left hidden md:block">
                <p className="text-xl font-normal leading-relaxed">
                  {slide.content || "Default content for this section."}
                </p>
                {showDownloadButton && (
                  <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg mt-6 transition hover:bg-gray-200">
                    Download Report
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Using unique class names */}
      <button 
  className={`${prevButtonClass} absolute left-4 md:left-auto md:right-[150px] md:bottom-[50px] md:top-auto top-1/2 transform -translate-y-1/2 h-[30px] w-[40px] md:h-auto md:w-auto z-10`}
  onClick={() => swiperRef.current?.swiper.slidePrev()}
>
  <img src={leftArrow} alt="Previous" className="w-full h-full" style={{ filter: 'brightness(0) saturate(100%) invert(1)' }} />
</button>

<button 
  className={`${nextButtonClass} absolute right-4 md:right-[50px] md:bottom-[50px] md:top-auto top-1/2 transform -translate-y-1/2 h-[30px] w-[40px] md:h-auto md:w-auto z-10`}
  onClick={() => swiperRef.current?.swiper.slideNext()}
>
  <img src={rightArrow} alt="Next" className="w-full h-full" style={{ filter: 'brightness(0) saturate(100%) invert(1)' }} />
</button>





    </div>
  );
};

export default ImpactSection;