import React, { useEffect, useRef } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

import EssentialImg from "../assets/images/essentials-logo 1.png";
import LeonardImg from "../assets/images/Leonard.png";
import BalarsImg from "../assets/images/balars-logo 1.png";
import BalarsImgWhite from "../assets/images/balars-logo-wite.png";
import FirstCatchImg from "../assets/images/first-catch-logo .png";
import RawEarthImg from "../assets/images/RawEarth.png";
import FarmFreshImg from "../assets/images/Farm fresh logo2 1.png";
import WildcareImg from "../assets/images/Wildcare.png";
import DairyImg from "../assets/images/the-dairy-press-logo 1.png";

import Promo1 from "../assets/images/promo1.png";
import Promo2 from "../assets/images/promo2.png";

const ExclusiveBrands = () => {
  const brands = [
    { name: "Leonards", logo: LeonardImg },
    { name: "Balars Whole Foods", logo: BalarsImg },
    { name: "Raw Earth", logo: RawEarthImg },
    { name: "First Catch", logo: FirstCatchImg },
    { name: "Farm Fresh", logo: FarmFreshImg },
    { name: "Wild Acre Farms", logo: WildcareImg },
    { name: "Essentials", logo: EssentialImg },
    { name: "The Dairy Shed", logo: DairyImg },
  ];

  const promoCards = [
    { id: 1, image: Promo1, logo: LeonardImg },
    { id: 2, image: Promo2, logo: BalarsImgWhite },
    { id: 3, image: Promo1, logo: DairyImg },
    { id: 4, image: Promo1, logo: LeonardImg },
    { id: 5, image: Promo2, logo: BalarsImgWhite },
    { id: 6, image: Promo1, logo: DairyImg },
    { id: 7, image: Promo1, logo: LeonardImg },
    { id: 8, image: Promo2, logo: BalarsImgWhite },
    { id: 9, image: Promo1, logo: DairyImg },
  ];

  // Refs for Navigation Buttons
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Ensuring Swiper re-renders and picks up buttons
    const swiperInstance = document.querySelector(".swiper")?.swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full h-full mx-auto pl-40 pt-20">
      {/* Exclusive Brands Section */}
      <h2 className="text-3xl font-bold text-center">EXCLUSIVE BRANDS</h2>
      <div className="w-16 h-1 bg-black mx-auto mt-2 mb-6"></div>

      {/* Brands Row */}
      <div className="flex flex-wrap justify-center gap-8">
        {brands.map((brand, index) => (
          <img key={index} src={brand.logo} alt={brand.name} className="h-12 object-contain" />
        ))}
      </div>

      {/* Promo Cards Slider */}
      <div className="relative mt-10">
        <Swiper 
          modules={[Navigation]}
          spaceBetween={37}
          slidesPerView={2.3}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {promoCards.map((promo) => (
            <SwiperSlide key={promo.id}>
              <div className="relative  w-[600px] rounded-lg overflow-hidden shadow-lg">
                <img src={promo.image} alt="Promo" className="w-full h-[370px] object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                  {/* Promo Logo */}
                  <div className="absolute top-6 left-6">
                    <img src={promo.logo} alt="Brand Logo" className="h-14 object-contain" />
                  </div>
                  {/* Promo Text */}
                  <p className="text-white text-lg font-medium mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  {/* Learn More Button */}
                  <button className="bg-white text-black px-6 py-3 rounded-md font-semibold text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="hidden md:flex justify-end mt-16 gap-6 mr-24  mb-24">
          <button ref={prevRef} className="swiper-prev text-[#505050] text-xl  cursor-pointer">
            <HiArrowNarrowLeft size={28} />
          </button>
          <button ref={nextRef} className="swiper-next text-[#505050] text-xl cursor-pointer">
            <HiArrowNarrowRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBrands;
