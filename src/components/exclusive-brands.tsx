import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";

import leftArrow from "../assets/images/arrow left.png";
import rightArrow from "../assets/images/arrow right.png";

import leonardsBg from "../assets/images/leonards-bg.png";
import leonardsLogo from "../assets/images/leonards-logo.png";
import balarsBg from "../assets/images/balars-bg.png";
import balarsLogo from "../assets/images/balars-logo.png";
import rawearthBg from "../assets/images/rawearth-bg.png";
import rawearthLogo from "../assets/images/rawearth-logo.png";

const brands = Array(50).fill(null).map((_, index) => ({
  name: `Brand ${index + 1}`,
  description:
    "Lorem ipsum dolor sit amet consectetur. Accumsan velit leo amet vestibulum.",
  bgImage: [leonardsBg, balarsBg, rawearthBg][index % 3],
  logo: [leonardsLogo, balarsLogo, rawearthLogo][index % 3],
}));

const ExclusiveBrands = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [lastCardVisible, setLastCardVisible] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    const lastIndex = brands.length - 1;
    setLastCardVisible(swiper.activeIndex >= lastIndex - 1);
  };

  return (
    <div className="w-full mx-auto py-10 relative">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-[#3A342B] font-inter">
        EXCLUSIVE BRANDS
      </h2>
      <div className="w-20 h-1 bg-[#3A342B] mt-2 mb-6 mx-auto"></div>

      {/* Swiper Carousel */}
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4.2 },
          }}
          centeredSlides={false}
          modules={[Navigation]}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-[#EFEBE7] shadow-lg rounded-xl overflow-hidden flex flex-col transition-opacity duration-500 ${
                  index === brands.length - 1 ? "opacity-30 blur-sm" : "opacity-100"
                }`}
              >
                <div
                  className="relative h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${brand.bgImage})` }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 object-contain"
                  />
                </div>
                <div className="p-6 text-left flex-grow">
                  <h3 className="text-black text-xl md:text-2xl font-bold mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-black text-sm md:text-base mb-4 line-clamp-2">
                    {brand.description}
                  </p>
                  <button className="w-full bg-[#86704D] text-white py-2 rounded-lg mb-2">
                    Learn More
                  </button>
                  <button className="w-full bg-white border py-2 rounded-lg">
                    Download Brochure
                  </button>
                  <button className="w-full bg-white border py-2 rounded-lg mt-2">
                    Order Online
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute right-4 bottom-[-60px] flex gap-4 p-2">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <img src={leftArrow} alt="Previous" className="w-8 h-8 cursor-pointer" />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <img src={rightArrow} alt="Next" className="w-8 h-8 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default ExclusiveBrands;
