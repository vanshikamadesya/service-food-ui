// ImageSwiper.tsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import slides from "../data/homeSwiperData"; 

const ImageSwiper: React.FC = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[350px] hidden sm:block">
      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 999999999,
          disableOnInteraction: true,
          stopOnLastSlide: true,
          enabled: false,
        }}
        allowTouchMove={false}
        speed={500}
        simulateTouch={false}
        watchSlidesProgress={false}
        navigation={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center px-8 sm:px-16 bg-black/40 ">
                <div className="w-[650px] text-white font-inter italic tracking-wider pl-12 sm:pl-44 leading-relaxed">
                  <p className="text-lg sm:text-xl">{slide.quote}</p>
                  <p className="text-sm mt-4">{slide.author}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="absolute bottom-10 right-20  sm:right-6 flex items-center gap-6 z-10">
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-white hover:text-gray-300 transition cursor-pointer w-20 h-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="w-full h-full"
          >
            <line x1="45" y1="12" x2="10" y2="12" />
            <polyline points="18,4 10,12 18,20" />
          </svg>
        </div>
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className="text-white hover:text-gray-300 transition cursor-pointer w-20 h-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="w-full h-full"
          >
            <line x1="5" y1="12" x2="40" y2="12" />
            <polyline points="32,4 40,12 32,20" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageSwiper;
