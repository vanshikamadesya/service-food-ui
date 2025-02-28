import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

interface CatalogItem {
  title: string;
  image: string;
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
      : catalogs.filter((catalog) => catalog.title.includes(selectedCategory));

  return (
    <div className="bg-gray-700 text-white py-10 md:py-16 tracking-wide w-full overflow-hidden">
      {/* Section Heading */}
      <h2 className="text-center text-lg sm:text-2xl font-semibold mb-2 text-white">
        OUR CATALOGUES
      </h2>
      <div className="w-20 h-0.5 bg-white mx-auto mb-4"></div>

      {/* Category Filter (Dropdown for Small Screens, Inline for Large Screens) */}
      <div className="flex flex-col sm:flex-row items-center justify-center md:gap-10 text-xs sm:text-sm uppercase text-white md:font-semibold tracking-widest md:py-14">
        {/* Small Screen Dropdown */}
        <select
          className="block sm:hidden w-60 px-4 py-2 rounded bg-gray-700 text-white border border-white mb-7 mt-5"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Large Screen Filters */}
        <div className="hidden sm:flex flex-wrap justify-center items-center gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative cursor-pointer pb-2 flex items-center ${
                selectedCategory === category
                  ? "after:w-20 after:h-0.5 after:bg-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {index !== categories.length - 1 && (
                <div className="h-4 w-px bg-white mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="relative pl-11 md:mb-10">
        <Swiper
          spaceBetween={15}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          modules={[Navigation]}
          className="px-5"
          breakpoints={{
            320: { slidesPerView: 1.3 },
            480: { slidesPerView: 2.3, spaceBetween: 10 },
            722: { slidesPerView: 2.5, spaceBetween: 15 },
            768: { slidesPerView: 3.3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1280: { slidesPerView: 5.5, spaceBetween: 40 },
          }}
        >
          {filteredCatalogs.map((catalog, index) => (
            <SwiperSlide key={index} className="snap-start flex justify-center">
              <div className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[250px] flex flex-col items-center">
                <img
                  src={catalog.image}
                  alt={catalog.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <p className="mt-4 text-xs sm:text-sm md:text-lg font-semibold tracking-widest">
                  {catalog.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden sm:flex justify-center sm:justify-end items-center gap-4 mt-4 sm:mt-6 sm:relative sm:bottom-0 sm:right-10 md:pr-16">
        <button className="custom-swiper-prev text-white text-2xl lg:text-4xl">
          <HiArrowNarrowLeft />
        </button>
        <button className="custom-swiper-next text-white text-2xl lg:text-4xl">
          <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default CatalogSlider;
