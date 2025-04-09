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
import ArticleCard from "../ContentHubArticle/ArticleCard";

export type NavigationPosition = "left" | "center" | "right";
export type VerticalPosition = "top" | "middle" | "bottom";
export type HorizontalPosition = "left" | "center" | "right";
export type ElementType = "title" | "carousel" | "navigation";
export type ElementOrder = [ElementType, ElementType, ElementType];

interface MoreArticlesProps {
  navigationPosition?: NavigationPosition;
  navigationSpacing?: number; // Space in pixels between navigation and top
  titlePosition?: {
    horizontal: HorizontalPosition;
    vertical: VerticalPosition;
  };
  elementsOrder?: ElementOrder;
  cardButtonSize?: string; // Custom class for card buttons
}

function MoreArticles({
  navigationPosition = "right",
  navigationSpacing = 0, // Default value
  titlePosition = { horizontal: "center", vertical: "top" },
  elementsOrder = ["title", "carousel", "navigation"],
}: MoreArticlesProps) {
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

  // Determine navigation position classes
  const getNavigationPositionClass = () => {
    const baseClasses = `absolute flex gap-6 lg:gap-12 z-20 items-center px-4 sm:px-6 md:px-0`;

    // Horizontal positioning
    const horizontalClasses = {
      left: "left-0 md:left-8 lg:left-16 justify-start",
      center: "left-1/2 transform -translate-x-1/2 justify-center",
      right: "right-0 md:right-8 lg:right-16 justify-end",
    }[navigationPosition];

    // Calculate vertical position based on spacing
    // We assume bottom as default, but add spacing from top if specified
    const verticalClasses = `bottom-8 ${
      navigationSpacing > 0 ? `mt-${navigationSpacing}` : ""
    }`;

    return `${baseClasses} ${horizontalClasses} ${verticalClasses}`;
  };

  // Get title position classes
  const getTitlePositionClasses = () => {
    // Vertical positioning - Reduced spacing between title and carousel
    const verticalClasses = {
      top: "pt-8 lg:pt-12 pb-2 lg:pb-4", // Reduced bottom padding
      middle: "py-8 lg:py-12", // Reduced padding
      bottom: "pt-12 lg:pt-16 pb-4", // Reduced padding
    }[titlePosition.vertical];

    // Horizontal positioning
    const horizontalClasses = {
      left: "text-left ml-4 md:ml-8 lg:ml-16",
      center: "text-center",
      right: "text-right mr-4 md:mr-8 lg:mr-16",
    }[titlePosition.horizontal];

    // Adjust underline position based on horizontal alignment
    const underlineClasses = {
      left: "ml-0",
      center: "mx-auto",
      right: "ml-auto",
    }[titlePosition.horizontal];

    return {
      container: `${verticalClasses} ${horizontalClasses}`,
      underline: underlineClasses,
    };
  };

  // Render title section
  const renderTitle = () => {
    const titleClasses = getTitlePositionClasses();

    return (
      <div className={titleClasses.container}>
        <h2
          className={`text-2xl lg:text-4xl font-bold uppercase tracking-wide font-inter ${getAlignmentClass(
            titlePosition.horizontal
          )}`}
          style={{ color: TEXT_COLOR_ARTICLE_HEAD }}
        >
          MORE ARTICLES
        </h2>
        <div
          className={`w-24 lg:w-36 h-[3px] mt-3 ${titleClasses.underline}`}
          style={{ backgroundColor: TEXT_COLOR_ARTICLE_HEAD }}
        />
      </div>
    );
  };

  // Render carousel section
  const renderCarousel = () => {
    return (
      <div className="relative w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-0 lg:pl-40 pt-2 lg:pt-8">
        {" "}
        {/* Reduced top padding */}
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
            {articles.map((article: Article, index: number) => (
              <SwiperSlide key={article.id} className="flex justify-center">
                <ArticleCard
                  article={{
                    ...article,
                    mediaSrc: article.mediaUrl,
                    isVideo: article.mediaType === "video",
                  }}
                  index={index}
                  cardElementsOrder={["title", "description", "button"]}
                  titleAlignment="left"
                  descriptionAlignment="left"
                  buttonAlignment="left"
                  cardVerticalPosition="start"
                  videoControlPosition="topLeft"
                />
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
    );
  };

  // Render navigation section
  const renderNavigation = () => {
    return (
      <div
        className={getNavigationPositionClass()}
        style={{
          top: navigationSpacing > 0 ? `${navigationSpacing}px` : undefined,
        }}
      >
        <button
          onClick={prevSlide}
          className="cursor-pointer hover:text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ color: TEXT_COLOR_ARTICLE_HEAD }}
          aria-label="Previous slide"
          disabled={isBeginning}
        >
          <HiArrowNarrowLeft className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />{" "}
          {/* Original size */}
        </button>
        <button
          onClick={nextSlide}
          className="cursor-pointer hover:text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ color: TEXT_COLOR_ARTICLE_HEAD }}
          aria-label="Next slide"
          disabled={isEnd}
        >
          <HiArrowNarrowRight className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />{" "}
          {/* Original size */}
        </button>
      </div>
    );
  };

  // Render elements based on order
  const renderElements = () => {
    const elements = {
      title: renderTitle(),
      carousel: renderCarousel(),
      navigation: renderNavigation(),
    };

    return elementsOrder.map((element) => (
      <div key={element}>{elements[element]}</div>
    ));
  };

  return (
    <div
      className="relative h-auto lg:h-full w-full font-inter pb-20"
      style={{ backgroundColor: BG_COLOR_ARTICLE_SECTION }}
    >
      {renderElements()}
    </div>
  );
}

export default MoreArticles;
