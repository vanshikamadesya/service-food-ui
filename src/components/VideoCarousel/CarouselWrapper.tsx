import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface CarouselWrapperProps {
  children: React.ReactNode[];
  isMobile: boolean;
  onSlideChange: () => void;
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  children,
  isMobile,
  onSlideChange,
}) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={isMobile ? 1.4 : 1.2}
      centeredSlides={isMobile}
      initialSlide={isMobile ? 1 : 0}
      breakpoints={{
        480: { slidesPerView: 1.5, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 16, centeredSlides: false },
        768: { slidesPerView: 3, spaceBetween: 16, centeredSlides: false },
        1024: { slidesPerView: 4, spaceBetween: 16, centeredSlides: false },
      }}
      navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
      className="pb-8 md:pb-10 "
      onSlideChange={onSlideChange}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className={isMobile ? "w-[100%] transform scale-[0.9] active:scale-100 transition-transform duration-300" : "w-full"}>
            {child}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselWrapper;