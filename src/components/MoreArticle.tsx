import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { SwiperInstance, articles } from "../data/moreArticles";

import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

function MoreArticle() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isRightBlurred, setIsRightBlurred] = useState(true); // Default show right blur

  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.activeIndex);

    // For the first slide, left is not blurred
    if (swiper.activeIndex === 0) {
      setIsRightBlurred(true);
      return;
    }

    // For the last visible slide, right is not blurred
    if (swiper.activeIndex >= totalSlides - getVisibleSlidesCount()) {
      setIsRightBlurred(false);
      return;
    }

    // Blur direction logic
    const previousIndex = swiper.activeIndex - 1 || 0;

    if (swiper.activeIndex > previousIndex) {
      // Moving right, blur should be on right
      setIsRightBlurred(true);
    } else if (swiper.activeIndex < previousIndex) {
      // Moving left, blur should be on left
      setIsRightBlurred(false);
    }
  };

  const nextSlide = () => {
    if (swiper && swiper.slideNext) {
      swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiper && swiper.slidePrev) {
      swiper.slidePrev();
    }
  };

  // Calculate visible slide indices based on breakpoints
  const getVisibleSlidesCount = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width >= 1280) return 5;
      if (width >= 1024) return 4;
      if (width >= 768) return 3;
      if (width >= 640) return 2;
      return 1;
    }
    return 5; // Default for SSR
  };

  return (
    <div className="h-auto lg:h-full w-full bg-[#EFEBE7] font-inter pb-20">
      {/* Heading - Maintaining original styling for large screens */}
      <div className="text-center pt-8 lg:pt-16 pb-6 lg:pb-12">
        <h2 className="text-[#505050] text-2xl lg:text-4xl font-bold uppercase tracking-wide font-inter">
          MORE ARTICLES
        </h2>
        <div className="w-24 lg:w-36 h-[3px] bg-[#505050] mx-auto mt-3"></div>
      </div>

      {/* Main container - Adjusting padding only for small screens */}
      <div className="relative w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-0 lg:pl-40 pt-6 lg:pt-20">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={false}
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            onInit={(swiper) => {
              setTotalSlides(swiper.slides.length);
            }}
            className="pb-24" // Increased bottom padding to make room for navigation
            breakpoints={{
              480: { slidesPerView: 1.5, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
              1280: { slidesPerView: 5, spaceBetween: 24 },
            }}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id} className="flex justify-center">
                <div className="w-full transition-all duration-300">
                  {/* Image container - Fixed height for small screens */}
                  <div className="h-[220px] md:h-[280px] lg:h-[350px] overflow-hidden rounded-lg mb-3 lg:mb-5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Text styling - Responsive for small screens, original size for large */}
                  <h3 className="text-xl lg:text-2xl font-semibold uppercase mb-2 lg:mb-3 font-inter">
                    {article.title}
                  </h3>
                  <p className="text-sm lg:text-base text-black mb-4 lg:mb-8 leading-relaxed line-clamp-3 lg:line-clamp-4 font-inter">
                    {article.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right edge blur overlay */}
          <div
            className={`absolute top-0 right-0 w-1/5 lg:w-1/6 h-[calc(100%-120px)] lg:h-[calc(100%-100px)] bg-gradient-to-l from-[#EFEBE7] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
              isRightBlurred ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          {/* Navigation Buttons - Positioned relative to the Swiper container */}
          <div className="absolute bottom-[-20] right-0 md:right-8 lg:right-16 flex justify-end gap-6 lg:gap-12 z-20">
            <button
              onClick={prevSlide}
              className="text-[#505050] cursor-pointer hover:text-gray-700 transition-colors"
              aria-label="Previous slide"
            >
              <HiArrowNarrowLeft className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            </button>
            <button
              onClick={nextSlide}
              className="text-[#505050] cursor-pointer hover:text-gray-700 transition-colors"
              aria-label="Next slide"
            >
              <HiArrowNarrowRight className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreArticle;
