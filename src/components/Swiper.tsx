import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface SwiperComponentProps {
  mediaData: { mediaType: "image" | "video"; mediaSource: string }[];
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ mediaData }) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[350px]">
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
        {mediaData.map((media, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {media.mediaType === "image" ? (
                <img
                  src={media.mediaSource}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={media.mediaSource}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="absolute bottom-10 right-20 sm:right-6 flex items-center gap-6 z-10">
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

export default SwiperComponent;
