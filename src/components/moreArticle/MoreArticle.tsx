// src/components/MoreArticles.tsx - A responsive article carousel component

import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { articles } from "../../data/moreArticles";
import {
  SwiperInstance,
  getAlignmentClass,
  BG_COLOR_ARTICLE_SECTION,
  TEXT_COLOR_ARTICLE_HEAD,
  Article,
} from "../../types/articleUtils";
import ArticleCard from "./ArticleCard";

function MoreArticles() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isRightBlurred, setIsRightBlurred] = useState(true);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const getVisibleSlidesCount = useCallback(() => {
    if (typeof window === "undefined") return 5;

    const width = window.innerWidth;
    if (width >= 1280) return 5;
    if (width >= 1024) return 4;
    if (width >= 768) return 3;
    if (width >= 640) return 2;
    return 1;
  }, []);

  const handleSwiperUpdate = useCallback(
    (swiperInstance: SwiperInstance) => {
      const slidesCount = swiperInstance.slides?.length ?? 0;
      if (totalSlides !== slidesCount) setTotalSlides(slidesCount);

      const visibleCount = getVisibleSlidesCount();
      const currentIsBeginning =
        swiperInstance.isBeginning ?? swiperInstance.activeIndex === 0;
      const currentIsEnd =
        swiperInstance.isEnd ??
        swiperInstance.activeIndex >= slidesCount - visibleCount;

      setIsBeginning(currentIsBeginning);
      setIsEnd(currentIsEnd);
      setIsRightBlurred(!currentIsEnd && slidesCount > visibleCount);
    },
    [getVisibleSlidesCount, totalSlides]
  );

  const nextSlide = useCallback(() => swiper?.slideNext(), [swiper]);
  const prevSlide = useCallback(() => swiper?.slidePrev(), [swiper]);

  return (
    <div
      className="relative h-auto lg:h-full w-full font-inter pb-20"
      style={{ backgroundColor: BG_COLOR_ARTICLE_SECTION }}
    >
      {/* Section heading */}
      <div className="text-center pt-8 lg:pt-16 pb-6 lg:pb-12">
        <h2
          className={`text-2xl lg:text-4xl font-bold uppercase tracking-wide font-inter ${getAlignmentClass(
            "center"
          )}`}
          style={{ color: TEXT_COLOR_ARTICLE_HEAD }}
        >
          MORE ARTICLES
        </h2>
        <div
          className="w-24 lg:w-36 h-[3px] mx-auto mt-3"
          style={{ backgroundColor: TEXT_COLOR_ARTICLE_HEAD }}
        />
      </div>

      {/* Carousel container */}
      <div className="relative w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-0 lg:pl-40 pt-6 lg:pt-20">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1.2}
            onSwiper={(swiperInstance) => {
              setSwiper(swiperInstance);
              handleSwiperUpdate(swiperInstance);
            }}
            onSlideChange={handleSwiperUpdate}
            className="pb-10"
            breakpoints={{
              480: { slidesPerView: 1.5, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
              1280: { slidesPerView: 5, spaceBetween: 24 },
            }}
          >
            {articles.map((article: Article) => (
              <SwiperSlide key={article.id} className="flex justify-center">
                <ArticleCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right edge fade effect */}
          <div
            className={`absolute top-0 right-0 w-1/5 lg:w-1/6 h-full bg-gradient-to-l from-[#EFEBE7] to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
              isRightBlurred ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-8 right-0 md:right-8 lg:right-16 flex gap-6 lg:gap-12 z-20 justify-end items-center px-4 sm:px-6 md:px-0">
        <button
          onClick={prevSlide}
          className="cursor-pointer hover:text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ color: TEXT_COLOR_ARTICLE_HEAD }}
          aria-label="Previous slide"
          disabled={isBeginning}
        >
          <HiArrowNarrowLeft className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </button>
        <button
          onClick={nextSlide}
          className="cursor-pointer hover:text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ color: TEXT_COLOR_ARTICLE_HEAD }}
          aria-label="Next slide"
          disabled={isEnd}
        >
          <HiArrowNarrowRight className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </button>
      </div>
    </div>
  );
}

export default MoreArticles;
