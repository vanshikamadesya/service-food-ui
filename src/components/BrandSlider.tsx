import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useRef, useEffect, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

interface Brand {
  name: string;
  description: string;
  bgImage: string;
  logo: string;
}

interface BrandSliderProps {
  brands: Brand[];
}

const BrandSlider: React.FC<BrandSliderProps> = ({ brands }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Function to handle blur effect
  const updateBlur = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      const containerRect = swiper.el.getBoundingClientRect();

      swiper.slides.forEach((slide) => {
        const slideRect = slide.getBoundingClientRect();

        const fullyVisible =
          slideRect.left >= containerRect.left - 1 &&
          slideRect.right <= containerRect.right + 1;

        const partiallyVisible =
          (slideRect.left < containerRect.left &&
            slideRect.right > containerRect.left) ||
          (slideRect.right > containerRect.right &&
            slideRect.left < containerRect.right);

        if (fullyVisible) {
          slide.style.opacity = "1";
          slide.style.filter = "blur(0)";
        } else if (partiallyVisible) {
          slide.style.opacity = "0.7";
          slide.style.filter = "blur(2px)";
        } else {
          slide.style.opacity = "0.4";
          slide.style.filter = "blur(5px)";
        }
      });
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      updateBlur();

      swiper.on("slideChange", updateBlur);
      swiper.on("transitionEnd", updateBlur);

      return () => {
        swiper.off("slideChange", updateBlur);
        swiper.off("transitionEnd", updateBlur);
      };
    }
  }, []);

  return (
    <div className="relative w-full mx-auto md:pl-16 pr-0 mb-7">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={80}
        slidesPerView={3.3}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2.3, spaceBetween: 30 },
          1024: { slidesPerView: 3.3, spaceBetween: 50 },
        }}
        modules={[Navigation]}
        className="pb-10"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#EFEBE7] shadow-lg mt-8 rounded-xl overflow-hidden flex flex-col transition-opacity duration-500">
              <div
                className="relative h-52 bg-cover bg-center"
                style={{ backgroundImage: `url(${brand.bgImage})` }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 object-contain"
                />
              </div>
              <div className="p-6 text-left flex-grow font-inter font-semibold">
                <h3 className="text-black text-xl md:text-2xl font-bold mb-2">
                  {brand.name}
                </h3>
                <p className="text-black md:text-sm mb-4">
                  {brand.description}
                </p>
                <button className="w-full bg-[#86704D] text-white py-2 rounded-lg mb-2 text-sm">
                  Learn More
                </button>
                <button className="w-full bg-white border py-2 rounded-lg text-sm">
                  Download Brochure
                </button>
                <button className="w-full bg-white border py-2 rounded-lg mt-2 text-sm">
                  Order Online
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Positioned Bottom Right */}
      <div className="absolute mr-20 mt-10 right-16 flex gap-4 justify-end text-[#3A342B]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={!swiperRef.current}
          className="p-2 rounded-full transition duration-300"
        >
          <HiArrowNarrowLeft size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          disabled={!swiperRef.current}
          className="p-2 rounded-full  transition duration-300"
        >
          <HiArrowNarrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BrandSlider;
