import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useRef, useEffect } from "react";
import { Swiper as SwiperType } from "swiper";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

interface Brand {
  name: string;
  description: string;
  bgImage: string;
  logo: string;
}

interface BrandSliderProps {
  brands: Brand[];
}

const BrandSlider: React.FC<BrandSliderProps> = ({ brands }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const updateBlur = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      const activeIndex = swiper.realIndex;
      
      // Only apply blur effect on desktop (≥640px)
      if (window.innerWidth >= 640) {
        swiper.slides.forEach((slide) => {
          const slideRect = slide.getBoundingClientRect();
          const containerRect = swiper.el.getBoundingClientRect();
          const fullyVisible = slideRect.left >= containerRect.left - 1 &&
            slideRect.right <= containerRect.right + 1;
          
          slide.style.opacity = fullyVisible ? "1" : "0.5";
          slide.style.filter = fullyVisible ? "blur(0)" : "blur(3px)";
        });
      } else {
        // For mobile, only adjust opacity without blur
        swiper.slides.forEach((slide) => {
          // Get the data-swiper-slide-index attribute to handle looped slides correctly
          const slideIndex = parseInt(slide.getAttribute('data-swiper-slide-index') || '0');
          const isActive = slideIndex === activeIndex;
          
          slide.style.opacity = isActive ? "1" : "0.5";
          slide.style.filter = "none"; // No blur on mobile
          
          // Add a scale effect to emphasize the active slide
          slide.style.transform = isActive ? "scale(1)" : "scale(0.95)";
          slide.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        });
      }
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;
      updateBlur();

      swiper.on("slideChange", updateBlur);
      swiper.on("transitionEnd", updateBlur);
      swiper.on("sliderMove", updateBlur);
      window.addEventListener("resize", updateBlur);

      return () => {
        swiper.off("slideChange", updateBlur);
        swiper.off("transitionEnd", updateBlur);
        swiper.off("sliderMove", updateBlur);
        window.removeEventListener("resize", updateBlur);
      };
    }
  }, []);

  return (
    <div className="relative w-full mx-auto md:pl-16 pr-0 mb-7">
      <div className="px-0 sm:px-0">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(updateBlur, 100);
          }}
          spaceBetween={15}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          breakpoints={{
            640: { slidesPerView: 2.3, spaceBetween: 30, centeredSlides: false },
            1024: { slidesPerView: 3.3, spaceBetween: 50, centeredSlides: false },
          }}
          modules={[Navigation]}
          className="pb-10"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content transition-all duration-300">
                <div className="bg-[#EFEBE7] shadow-lg mt-8 rounded-xl overflow-hidden flex flex-col mx-0 md:mx-0">
                  <div
                    className="relative h-40 sm:h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url(${brand.bgImage})` }}
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 object-contain"
                    />
                  </div>
                  <div className="p-4 text-left flex-grow font-inter font-semibold">
                    <h3 className="text-black text-lg md:text-2xl font-bold mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-black text-xs md:text-base mb-4 leading-tight">
                      {brand.description}
                    </p>
                    <div className="hidden sm:flex sm:flex-col sm:gap-2">
                      <button className="w-full bg-[#86704D] text-white py-2 rounded-lg text-xs md:text-sm">
                        Learn More
                      </button>
                      <button className="w-full bg-white border border-gray-300 py-2 rounded-lg text-xs md:text-sm">
                        Download Brochure
                      </button>
                      <button className="w-full bg-white border border-gray-300 py-2 rounded-lg text-xs md:text-sm">
                        Order Online
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop-only Navigation Buttons */}
      <div className="hidden md:flex absolute mr-20 mt-10 right-16 gap-4 justify-end text-[#3A342B]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 rounded-full transition duration-300 hover:bg-gray-100"
        >
          <HiArrowNarrowLeft size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 rounded-full transition duration-300 hover:bg-gray-100"
        >
          <HiArrowNarrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default BrandSlider;