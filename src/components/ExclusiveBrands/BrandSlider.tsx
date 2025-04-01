import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";

import { BrandSliderProps } from "./TitleSection";
import TitleSection from "./TitleSection";
import SlideContent from "./SlideContent";
import { updateBlur, getNavAlignmentClass } from "./swiperUtils";

const BrandSlider: React.FC<BrandSliderProps> = ({
  brands,
  title = "EXCLUSIVE BRANDS",
  showDivider = true,
  titleAlignment = "center",
  titlePosition = "top",
  navAlignment = "right",
  navPosition,
  contentOrder = [
    "title",
    "description",
    "learnMoreButton",
    "brochureButton",
    "orderButton",
  ],
  className,
  swiperTitleAlignment = "left",
  imagePosition = "top",
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // If navPosition is not explicitly provided, position it opposite to the title
  const effectiveNavPosition =
    navPosition || (titlePosition === "top" ? "bottom" : "top");

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      // Initial blur update
      setTimeout(() => updateBlur(swiperRef), 100); // Add small delay to ensure DOM is ready

      // Add event listeners
      const handleBlurUpdate = () => updateBlur(swiperRef);
      
      swiper.on("slideChange", handleBlurUpdate);
      swiper.on("transitionEnd", handleBlurUpdate);
      swiper.on("resize", handleBlurUpdate);

      // Additional events for better responsiveness
      window.addEventListener("resize", handleBlurUpdate);

      return () => {
        swiper.off("slideChange", handleBlurUpdate);
        swiper.off("transitionEnd", handleBlurUpdate);
        swiper.off("resize", handleBlurUpdate);
        window.removeEventListener("resize", handleBlurUpdate);
      };
    }
  }, []);

  return (
    <div className={`relative w-full mx-auto mb-16 md:mb-7 ${className || ""}`}>
      {/* Title Section - Top position */}
      {title && titlePosition === "top" && (
        <TitleSection
          title={title}
          showDivider={showDivider}
          titleAlignment={titleAlignment}
        />
      )}

      {/* Navigation - Top Position */}
      {effectiveNavPosition === "top" && (
        <div className={`hidden md:flex w-full mb-4 ${getNavAlignmentClass(navAlignment)}`}>
          <div className="flex space-x-4 text-[#3A342B] ">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 rounded-full transition duration-300"
            >
              <HiArrowNarrowLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 rounded-full transition duration-300"
            >
              <HiArrowNarrowRight size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Swiper Component */}
      <div className="relative w-full md:px-0 md:pl-20">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Call updateBlur after swiper initialization
            setTimeout(() => updateBlur(swiperRef), 100);
          }}
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={true}
          initialSlide={1}
          breakpoints={{
            0: { slidesPerView: 1.4, spaceBetween: 15, centeredSlides: true },
            640: {
              slidesPerView: 2.3,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3.4,
              spaceBetween: 40,
              centeredSlides: false,
            },
          }}
          modules={[Navigation]}
          className="pb-10"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="md:w-auto w-[85%]">
              <SlideContent 
                brand={brand}
                contentOrder={contentOrder}
                swiperTitleAlignment={swiperTitleAlignment}
                imagePosition={imagePosition}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation - Bottom Position */}
      {effectiveNavPosition === "bottom" && (
        <div className={`hidden md:flex w-full mt-5 md:pb-6 ${getNavAlignmentClass(navAlignment)}`}>
          <div className="flex space-x-4 text-[#3A342B]">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 rounded-full transition duration-300"
            >
              <HiArrowNarrowLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 rounded-full transition duration-300"
            >
              <HiArrowNarrowRight size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Title Section - Bottom Position */}
      {title && titlePosition === "bottom" && (
        <TitleSection
          title={title}
          showDivider={showDivider}
          titleAlignment={titleAlignment}
        />
      )}
    </div>
  );
};

export default BrandSlider;