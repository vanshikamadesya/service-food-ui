import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import cn from "classnames";
import React, { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

import { TimelineProps } from "../types";

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  const handleYearClick = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index, 500);
    }
  };

  return (
    <div className="bg-[#EFEBE7]  px-4 md:px-8 py-10 relative w-full  mx-auto">
      <div className="flex justify-center mb-6">
        <h1 className="text-[#3A342B] text-3xl font-bold text-center mb-6 pb-3 border-b-4 border-[#3A342B]">
          Our History
        </h1>
      </div>

      {/* Timeline with years */}
      <div className="relative flex items-center justify-between w-full">
        <div className="absolute top-[55%] left-0 w-full h-0.5 bg-gray-300 translate-y-3" />

        {items.map((item, index) => (
          <div
            key={item.year}
            className="relative flex flex-col items-center cursor-pointer transition-all duration-300"
            onClick={() => handleYearClick(index)}
            style={{ width: `${100 / items.length}%` }}
          >
            {/* Year Label */}
            <div
              className={cn(
                "font-bold mb-2 transition-all duration-300",
                index === activeIndex
                  ? "text-[#A97F41] text-2xl transform translate-y-[-30px]"
                  : "text-gray-500 text-sm"
              )}
            >
              {item.year}
            </div>

            {/* Circle Indicator */}
            <div className="relative flex items-center justify-center">
              <div
                className={cn(
                  "w-6 h-6 flex items-center justify-center rounded-full ring-4 shrink-0",
                  index === activeIndex
                    ? "bg-[#A97F41] ring-[#A97F41]"
                    : "bg-gray-300 ring-gray-400"
                )}
              >
                <span
                  className={cn(
                    "w-3 h-3 rounded-full",
                    index === activeIndex ? "bg-white" : "bg-gray-500"
                  )}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper content */}
      <div className="relative overflow-hidden mt-8">
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full"
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={1.5}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={item.year}
              className={cn(
                "flex justify-center transition-opacity duration-300",
                index === activeIndex
                  ? "opacity-100 bg-transparent"
                  : "opacity-50 bg-[#EFEBE733]"
              )}
            >
              <div className="flex flex-col lg:flex-row items-stretch p-6 max-w-5xl mx-auto">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-full">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* Text Content Section */}
                <div className="w-full md:w-1/2 bg-white p-6 shadow-lg  flex flex-col justify-center">
                  <h2 className="text-[#86704D] text-2xl md:text-3xl lg:text-4xl font-bold">
                    {item.year}
                  </h2>

                  <p className="text-[#86704D] mt-4 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}

      <div className="flex justify-end gap-6 mt-3 right-7">
        <button
          onClick={() => swiperInstance?.slidePrev()}
          className="text-[#3A342B] p-3 bg-transparent border-none cursor-pointer"
        >
          <HiArrowNarrowLeft className="w-8 h-8 md:w-10 md:h-10" />
        </button>
        <button
          onClick={() => swiperInstance?.slideNext()}
          className="text-[#3A342B] p-3 bg-transparent border-none cursor-pointer"
        >
          <HiArrowNarrowRight className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div>
    </div>
  );
};

export default Timeline;
