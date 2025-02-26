import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState, useRef, useEffect } from "react";
import { Swiper as SwiperType } from "swiper";

import leftArrow from "../assets/images/arrow left.png";
import rightArrow from "../assets/images/arrow right.png";

import leonardsBg from "../assets/images/leonards-bg.png";
import leonardsLogo from "../assets/images/leonards-logo.png";
import balarsBg from "../assets/images/balars-bg.png";
import balarsLogo from "../assets/images/balars-logo.png";
import rawearthBg from "../assets/images/rawearth-bg.png";
import rawearthLogo from "../assets/images/rawearth-logo.png";

// Dynamically generating brands
const brands = Array(7)
  .fill(null)
  .map((_, index) => ({
    name: `Brand ${index + 1}`,
    description:"Lorem ipsum dolor sit amet consectetur. Accumsan velit leo amet vestibulum. Urna enim lectus netus dui senectus aliquam. Eget maecenas dictum adipiscing vivamus diam. Eu dolor tincidunt nullam pellentesque odio quis velit tellus. ",
    bgImage: [leonardsBg, balarsBg, rawearthBg][index % 3],
    logo: [leonardsLogo, balarsLogo, rawearthLogo][index % 3],
  }));

const ExclusiveBrands = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
          slide.style.opacity = "0.7"; // Adjust this for better transition
          slide.style.filter = "blur(2px)";
        } else {
          slide.style.opacity = "0.4"; // More blur for fully hidden cards
          slide.style.filter = "blur(5px)";
        }
      });
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      updateBlur(); // Ensure blur updates on initial load
  
      swiper.on("slideChange", updateBlur);
      swiper.on("transitionEnd", updateBlur);
  
      return () => {
        swiper.off("slideChange", updateBlur);
        swiper.off("transitionEnd", updateBlur);
      };
    }
  }, []);
  
  return (
    <div className="w-full mx-auto py-10 relative  ">
      <h2 className="text-2xl md:text-3xl font-bold md:mt-6 text-center text-[#3A342B] font-inter ">
        EXCLUSIVE BRANDS
      </h2>
      <div className="w-20 h-[2px] bg-[#3A342B] mt-2 mb-6 mx-auto"></div>

      {/* Swiper Carousel */}
      <div className="relative w-full mx-auto md:pl-16 pr-0 mb-7 ">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.activeIndex);
            swiper.on("slideChange", () => setActiveIndex(swiper.activeIndex));
          }}
          spaceBetween={80}
          slidesPerView={3.3} // Adjusts visibility of the partial slide
          breakpoints={{
            0:{slidesPerView:1, spaceBetween:20},
            640: { slidesPerView: 2.3, spaceBetween:30 },
            1024: { slidesPerView: 3.3, spaceBetween: 50 },
          }}
          modules={[Navigation]}
          className="pb-10"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-[#EFEBE7] shadow-lg mt-8 rounded-xl overflow-hidden flex flex-col transition-opacity duration-500`}
              >
                <div
                  className="relative h-52 bg-cover bg-center "
                  style={{ backgroundImage: `url(${brand.bgImage})` }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 object-contain"
                  />
                </div>
                <div className="p-6 text-left flex-grow font-inter font-semibold">
                  <h3 className="text-black text-xl md:text-2xl font-bold mb-2 font-inter">
                    {brand.name}
                  </h3>
                  <p className="text-black md:text-sm mb-4 ">
                    {brand.description}
                  </p>
                  <button className="w-full bg-[#86704D] text-white py-2 rounded-lg mb-2 text-sm ">
                    Learn More
                  </button>
                  <button className="w-full bg-white border py-2 rounded-lg text-sm ">
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
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-[-50px] right-44 py-10 flex gap-11 text-[#3A342B] ">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <img
            src={leftArrow}
            alt="Previous"
            className="w-10 h-5 cursor-pointer"
          />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <img src={rightArrow} alt="Next" className="w-10 h-5 cursor-pointer text-[#3A342B] " />
        </button>
      </div>
    </div>
  );
};

export default ExclusiveBrands;
