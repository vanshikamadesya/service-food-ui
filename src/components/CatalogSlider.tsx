import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

interface CatalogItem {
  title: string;
  image: string;
  category: string;
}

interface CatalogSliderProps {
  categories: string[];
  catalogs: CatalogItem[];
}

const CatalogSlider: React.FC<CatalogSliderProps> = ({ categories, catalogs }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL CATALOGUES");

  const filteredCatalogs =
    selectedCategory === "ALL CATALOGUES"
      ? catalogs
      : catalogs.filter((catalog) => catalog.category === selectedCategory);

  return (
    <div className="bg-gray-800 text-white py-16 md:py-24 md:pb-40 tracking-wide w-full overflow-hidden">
      {/* Section Heading */}
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl sm:text-2xl font-semibold mb-2 text-white uppercase">
          OUR CATALOGUES
        </h2>
        <div className="w-20 h-0.5 bg-white mx-auto mb-8"></div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 md:mb-12">
          {/* Small Screen Dropdown */}
          <div className="block sm:hidden w-full max-w-xs">
            <select
              className="w-full px-4 py-3 rounded-full bg-transparent text-white border border-white text-center appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\")", 
                       backgroundPosition: "right 0.75rem center", 
                       backgroundRepeat: "no-repeat",
                       backgroundSize: "1.5em 1.5em",
                       paddingRight: "2.5rem" }}
            >
              {categories.map((category, index) => (
                <option key={index} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Large Screen Filters */}
          <div className="hidden sm:flex items-center justify-center text-xs md:text-sm uppercase tracking-widest">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center">
                <button
                  className={`relative cursor-pointer py-2 hover:opacity-80 transition-opacity
                    ${selectedCategory === category ? "font-semibold" : "font-normal"}
                  `}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                  {selectedCategory === category && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-white"></div>
                  )}
                </button>
                {index !== categories.length - 1 && (
                  <div className="h-4 w-px bg-white mx-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Slider Container - Using opacity instead of gradients */}
        <div className="relative overflow-visible">
          {/* Mobile View: Centered Large Slide with Partial Side Slides */}
          <div className="block sm:hidden">
            <Swiper
              spaceBetween={-80}
              slidesPerView={1.8}
              centeredSlides={true}
              loop={filteredCatalogs.length > 1}
              className="px-4 pt-4 pb-6"
              breakpoints={{
                320: { slidesPerView: 1.5 },
                480: { slidesPerView: 1.6 }
              }}
            >
              {filteredCatalogs.map((catalog, index) => (
                <SwiperSlide key={index} className="swiper-slide-opacity">
                  <div className="flex flex-col items-center transition-opacity duration-300 swiper-slide-content">
                    <div 
                      className="relative overflow-hidden rounded-lg shadow-lg mx-auto"
                      style={{ width: '200px', height: '300px' }}
                    >
                      <img
                        src={catalog.image}
                        alt={catalog.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        <p className="text-white font-bold text-lg uppercase tracking-wide text-center">
                          {catalog.title}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-medium text-center tracking-wider">
                      {catalog.category}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom CSS to handle opacity for partial slides in mobile view */}
            <style jsx global>{`
              .swiper-slide-opacity:not(.swiper-slide-active) {
                opacity: 0.4;
                transition: opacity 0.3s ease;
              }
            `}</style>
          </div>

          {/* Desktop View: With opacity for partial slides */}
          <div className="hidden sm:block">
            <Swiper
              spaceBetween={30}
              slidesPerView={5}
              loop={false}
              navigation={{
                nextEl: ".custom-swiper-next",
                prevEl: ".custom-swiper-prev",
              }}
              modules={[Navigation]}
              className="px-4 pt-4 pb-8 desktop-swiper"
              centerInsufficientSlides={false}
              allowTouchMove={true}
              breakpoints={{
                640: { slidesPerView: 2.15, spaceBetween: 20 },
                768: { slidesPerView: 3.15, spaceBetween: 20 },
                1024: { slidesPerView: 4.15, spaceBetween: 20 },
                1280: { slidesPerView: 5.15, spaceBetween: 20 },
              }}
            >
              {filteredCatalogs.map((catalog, index) => (
                <SwiperSlide key={index} style={{ width: '220px' }} className="desktop-slide">
                  <div className="flex flex-col items-center">
                    <div 
                      className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
                      style={{ width: '200px', height: '280px' }}
                    >
                      <img
                        src={catalog.image}
                        alt={catalog.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Logo badge or overlay can be added here if needed */}
                      <div className="absolute top-0 right-0 p-2">
                        {/* Add your logo badge here if needed */}
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:text-base font-medium text-center tracking-wider">
                      {catalog.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom CSS for desktop view partial slides */}
            <style jsx global>{`
              /* First and last visible slides in desktop view get opacity effect */
              .desktop-swiper .swiper-slide-visible:first-child,
              .desktop-swiper .swiper-slide-visible:last-child {
                opacity: 0.4;
                transition: opacity 0.3s ease;
              }
              
              /* For edge cases with partial visibility */
              .desktop-swiper .swiper-slide {
                transition: opacity 0.3s ease;
              }
              
              /* Add opacity to slides at the right edge that are partially visible */
              .desktop-swiper .swiper-slide-visible.desktop-slide:nth-last-child(-n+1):not(.swiper-slide-active) {
                opacity: 0.4;
              }
            `}</style>

            {/* Navigation Arrows */}
            <div className="flex absolute mt-8 bottom-0 right-16 transform translate-y-10 items-center gap-4 z-20">
              <button className="custom-swiper-prev text-white text-2xl p-1">
                <HiArrowNarrowLeft />
              </button>
              <button className="custom-swiper-next text-white text-2xl p-1">
                <HiArrowNarrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogSlider;