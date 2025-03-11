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
  const [activeIndex, setActiveIndex] = useState(0);
  // Track visible slide indexes for desktop view but not for filtering
  const [visibleSlides, setVisibleSlides] = useState<number[]>([]);

  const filteredCatalogs =
    selectedCategory === "ALL CATALOGUES"
      ? catalogs
      : catalogs.filter((catalog) => catalog.category === selectedCategory);
      
  // Handle slide change and update visible slides
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    
    // Calculate which slides are fully visible based on current view
    const fullyVisibleSlides = [];
    const visibleSlidesCount = swiper.params.slidesPerView;
    
    // partially visible slide
    const fullSlides = Math.floor(visibleSlidesCount);
    
    // Add fully visible slides
    for (let i = swiper.activeIndex; i < swiper.activeIndex + fullSlides; i++) {
      if (i < filteredCatalogs.length) {
        fullyVisibleSlides.push(i);
      }
    }
    
    setVisibleSlides(fullyVisibleSlides);
  };

  return (
    <div className="sm:bg-gray-800 bg-gray-700 text-white py-16 md:py-24 md:pb-40 tracking-wide w-full overflow-hidden">
      {/* Section Heading */}
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl sm:text-2xl font-semibold mb-2 text-white uppercase">
          OUR CATEGORIES
        </h2>
        <div className="w-20 h-0.5 bg-white mx-auto mb-8"></div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 md:mb-12">
          {/* Small Screen Dropdown */}
          <div className="block sm:hidden w-full max-w-xs">
            <select
              className="w-full px-4 py-3 rounded-xl bg-transparent text-white border border-white text-center appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E\")",
                backgroundPosition: "right 0.75rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem",
              }}
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

        {/* Slider Container */}
        <div className="relative overflow-visible w-full">
          {/* Mobile View: Multi-Card Layout with Center Focus */}
          <div className="block sm:hidden overflow-visible w-full -mx-4">
            <Swiper
              spaceBetween={-50}
              slidesPerView={1.9}
              centeredSlides={true}
              loop={filteredCatalogs.length > 1}
              className="pb-16 px-0 w-screen"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {filteredCatalogs.map((catalog, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div className="flex flex-col items-center justify-center">
                      <div 
                        className={`relative transition-all duration-300 rounded-lg shadow-md overflow-hidden
                          ${isActive ? "scale-110 z-10" : "scale-90 z-0"}`}
                        style={{ 
                          width: "160px", 
                          height: "220px",
                          margin: "0 auto"
                        }}
                      >
                        <img
                          src={catalog.image}
                          alt={catalog.title}
                          className={`w-full h-full object-cover transition-all duration-300
                            ${isActive ? "" : "blur-sm"}`}
                        />
                      </div>
                      {isActive && (
                        <div className="mt-6 mb-2 text-center">
                          <p className="text-white text-sm font-medium tracking-wider">
                            {catalog.category}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop View: */}
          <div className="hidden sm:block -mx-4 w-screen">
            <Swiper
              spaceBetween={15}
              slidesPerView={5}
              loop={false}
              navigation={{
                nextEl: ".custom-swiper-next",
                prevEl: ".custom-swiper-prev",
              }}
              modules={[Navigation]}
              className="desktop-swiper px-0"
              centerInsufficientSlides={true}
              allowTouchMove={true}
              breakpoints={{
                640: { slidesPerView: 2.5, spaceBetween: 15 },
                768: { slidesPerView: 3.5, spaceBetween: 15 },
                1024: { slidesPerView: 4.5, spaceBetween: 15 },
                1280: { slidesPerView: 5.5, spaceBetween: 15 },
              }}
              onSlideChange={handleSlideChange}
              onInit={handleSlideChange}
            >
              {filteredCatalogs.map((catalog, index) => (
                <SwiperSlide
                  key={index}
                  style={{ width: "220px" }}
                  className="desktop-slide"
                >
                  {({ isVisible }) => {
                    // A slide is fully visible if its index is in the visibleSlides array
                    const isFullyVisible = visibleSlides.includes(index);
                    
                    // Only apply blur for navigation (not for filtering)
                    const shouldBlur = selectedCategory === "ALL CATALOGUES" && !isFullyVisible;
                    
                    return (
                      <div className="flex flex-col items-center">
                        <div
                          className="relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
                          style={{ width: "200px", height: "280px" }}
                        >
                          <img
                            src={catalog.image}
                            alt={catalog.title}
                            className={`w-full h-full object-cover transition-all duration-300
                              ${shouldBlur ? "opacity-40 blur-sm" : ""}`}
                          />
                        </div>
                        <p className="mt-4 text-sm md:text-base font-medium text-center tracking-wider">
                          {catalog.title}
                        </p>
                      </div>
                    );
                  }}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="flex absolute mt-8 bottom-0 right-16 transform translate-y-16 items-center gap-4 z-20">
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