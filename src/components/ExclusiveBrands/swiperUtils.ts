import { Swiper as SwiperType } from "swiper";

// Function to update blur effect on slides
export const updateBlur = (swiperRef: React.MutableRefObject<SwiperType | null>) => {
  if (swiperRef.current) {
    const swiper = swiperRef.current;
    if (!swiper.el) return;

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

// Function to get navigation alignment class
export const getNavAlignmentClass = (navAlignment: "left" | "center" | "right") => {
  switch (navAlignment) {
    case "left":
      return "justify-start pl-16";
    case "center":
      return "justify-center";
    case "right":
      return "justify-end pr-16";
    default:
      return "justify-end pr-16";
  }
};