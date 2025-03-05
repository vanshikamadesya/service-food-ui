import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useRef, useEffect, useCallback, memo } from "react";
import { Swiper as SwiperType, SwiperEvents } from "swiper";
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

const SLIDER_CONFIG = {
  mobile: {
    slidesPerView: 1.2,
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  },
  desktop: {
    slidesPerView: 3.4,
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    autoplay: false
  }
} as const;

const BrandCard = memo(({ brand }: { brand: Brand }) => (
  <div className="slide-content transition-all duration-300 h-[580px]">
    <div className="bg-[#EFEBE7]  shadow-lg mt-8 rounded-xl overflow-hidden flex flex-col mx-0 md:mx-0">
      <div
        className="relative h-40 sm:h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${brand.bgImage})` }}
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 object-contain"
        />
      </div>
      <div className="p-4 text-left flex-grow font-inter">
        <h3 className="text-black text-lg md:text-xl font-bold mb-2">
          {brand.name}
        </h3>
        <p className="text-black text-xs md:text-sm mb-4 leading-relaxed">
          {brand.description}
        </p>
        <CardActions />
      </div>
    </div>
  </div>
));

const CardActions = memo(() => (
  <div className="hidden sm:flex sm:flex-col sm:gap-2">
    <button className="w-full bg-[#86704D] text-white py-2 rounded-lg text-sm hover:bg-[#75613E] transition-colors">
      Learn More
    </button>
    <button className="w-full bg-white border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
      Download Brochure
    </button>
    <button className="w-full bg-white border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
      Order Online
    </button>
  </div>
));

const NavigationButtons = memo(({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => (
  <div className="hidden md:flex absolute mr-20 right-16 gap-4 justify-end text-[#3A342B]">
    <button
      onClick={onPrev}
      className="p-2 rounded-full transition duration-300 hover:bg-gray-100"
      aria-label="Previous slide"
    >
      <HiArrowNarrowLeft size={24} />
    </button>
    <button
      onClick={onNext}
      className="p-2 rounded-full transition duration-300 hover:bg-gray-100"
      aria-label="Next slide"
    >
      <HiArrowNarrowRight size={24} />
    </button>
  </div>
));

const BrandSlider: React.FC<BrandSliderProps> = ({ brands }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const createOverlay = useCallback(() => {
    const overlay = document.createElement('div');
    overlay.className = 'rightmost-overlay';
    Object.assign(overlay.style, {
      position: 'absolute',
      top: '0',
      right: '0',
      width: '200px',
      height: '100%',
      background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
      pointerEvents: 'none',
      zIndex: '10'
    });
    return overlay;
  }, []);

  const updateBlur = useCallback(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    const container = swiper.el;
    const isDesktop = window.innerWidth >= 640;
    
    const existingOverlay = container?.querySelector('.rightmost-overlay');
    if (existingOverlay) {
      existingOverlay.remove();
    }

    if (isDesktop && !swiper.isEnd && container) {
      container.appendChild(createOverlay());
    } else if (!isDesktop) {
      swiper.slides.forEach((slide) => {
        const slideIndex = parseInt(slide.getAttribute('data-swiper-slide-index') || '0');
        const isActive = slideIndex === swiper.realIndex;
        
        Object.assign(slide.style, {
          opacity: isActive ? "1" : "0.5",
          filter: "none",
          transform: isActive ? "scale(1)" : "scale(0.95)",
          transition: "opacity 0.3s ease, transform 0.3s ease"
        });
      });
    }
  }, [createOverlay]);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const events: (keyof SwiperEvents)[] = ["slideChange", "transitionEnd", "resize"];
    events.forEach(event => swiper.on(event, updateBlur));
    window.addEventListener("resize", updateBlur);

    return () => {
      if (swiper?.el) {
        events.forEach(event => swiper.off(event, updateBlur));
        const overlay = swiper.el.querySelector('.rightmost-overlay');
        if (overlay) {
          overlay.remove();
        }
      }
      window.removeEventListener("resize", updateBlur);
    };
  }, [updateBlur]);

  return (
    <div className="relative w-full mx-auto md:pl-16 pr-0 mb-7">
      <div className="px-0 sm:px-0 relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(updateBlur, 100);
          }}
          {...SLIDER_CONFIG.mobile}
          breakpoints={{
            640: SLIDER_CONFIG.desktop,
            1024: SLIDER_CONFIG.desktop,
          }}
          modules={[Navigation]}
          className="pb-10"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <BrandCard brand={brand} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <NavigationButtons 
        onPrev={() => swiperRef.current?.slidePrev()}
        onNext={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};

export default memo(BrandSlider);