import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

// You would need to import your actual SVG icons
// These are placeholders for the imports
import CreativityIcon from "../assets/images/our-values/v-1.svg";
import CollaborationIcon from "../assets/images/our-values/v-2.svg";
import InclusivityIcon from "../assets/images/our-values/v-3.svg";
import ResilienceIcon from "../assets/images/our-values/v-4.svg";
import WorkEthicIcon from "../assets/images/our-values/v-5.svg";
import HumilityIcon from "../assets/images/our-values/v-6.svg";

const values = [
  {
    title: "Cretivity",
    description:
      "We deliver solutions, not problems, are always learning, and never settle for average or the status quo",
    icon: CreativityIcon,
  },
  {
    title: "Collaboration",
    description:
      "We communicate honestly, listen empathetically, and help each other whenever needed.",
    icon: CollaborationIcon,
  },
  {
    title: "Inclusivity",
    description:
      "We are welcoming, open-minded, and respectful of others' ideas, points of view, and preferences.",
    icon: InclusivityIcon,
  },
  {
    title: "Resilience",
    description:
      "We are adaptive, perseverant, and passionate about our industry and work.",
    icon: ResilienceIcon,
  },
  {
    title: "Work Ethic",
    description: "We have integrity, are reliable, and get things done.",
    icon: WorkEthicIcon,
  },
  {
    title: "Humility",
    description: "We stay modest and appreciative regardless of our success.",
    icon: HumilityIcon,
  },
];

const OurValues = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Unique class names for navigation buttons
  const prevButtonClass = "values-prev-btn";
  const nextButtonClass = "values-next-btn";

  useEffect(() => {
    // Function to check if screen is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkMobile();

    // Initialize Swiper navigation
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Individual value card (used in both mobile and desktop)
  const ValueCard = ({ value, index }: { value: any, index: number }) => (
  <div key={index} className="flex flex-col items-center my-6">
    <div className="bg-[#86704D] w-16 h-16 rounded-full flex items-center justify-center mb-4">
      <img src={value.icon} alt={value.title} className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-[#847F7F] text-xl font-medium mb-2">{value.title}</h3>
    <p className="text-[#847F7F] text-center text-sm max-w-xs">
      {value.description}
    </p>
  </div>
);

  // Mobile view with Swiper
  const MobileView = () => (
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: `.${prevButtonClass}`,
          nextEl: `.${nextButtonClass}`,
        }}
        className="w-full"
      >
        {values.map((value, index) => (
          <SwiperSlide key={index} className="flex justify-center py-6">
            <ValueCard value={value} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        className={`${prevButtonClass} absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-[#3A342B]`}
        aria-label="Previous slide"
      >
        <HiArrowNarrowLeft size={24} />
      </button>
      <button
        className={`${nextButtonClass} absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-[#3A342B]`}
        aria-label="Next slide"
      >
        <HiArrowNarrowRight size={24} />
      </button>
    </div>
  );

  // Desktop view with grid layout and vertical dividers
  const DesktopView = () => (
    <div className="grid grid-cols-3 gap-8">
      {/* Top row */}
      <div className="relative">
        <ValueCard value={values[0]} index={0} />
        {/* Vertical divider */}
        <div className="absolute top-0 right-0 h-full w-px bg-[#3A342B] opacity-30 transform translate-x-4"></div>
      </div>

      <div className="relative">
        <ValueCard value={values[1]} index={1} />
        {/* Vertical divider */}
        <div className="absolute top-0 right-0 h-full w-px bg-[#3A342B] opacity-30 transform translate-x-4"></div>
      </div>

      <ValueCard value={values[2]} index={2} />

      {/* Horizontal divider */}
      <div className="col-span-3 h-px bg-[#3A342B] opacity-30 my-6"></div>

      {/* Bottom row */}
      <div className="relative">
        <ValueCard value={values[3]} index={3} />
        {/* Vertical divider */}
        <div className="absolute top-0 right-0 h-full w-px bg-[#3A342B] opacity-30 transform translate-x-4"></div>
      </div>

      <div className="relative">
        <ValueCard value={values[4]} index={4} />
        {/* Vertical divider */}
        <div className="absolute top-0 right-0 h-full w-px bg-[#3A342B] opacity-30 transform translate-x-4"></div>
      </div>

      <ValueCard value={values[5]} index={5} />
    </div>
  );

  return (
    <div className="w-full bg-[#EFEBE7] py-10 px-4 md:px-8 lg:px-16">
      {/* Title Section */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-lg md:text-2xl font-semibold uppercase tracking-widest text-[#3A342B]">
          OUR VALUES
        </h2>
        <div className="w-16 md:w-24 h-0.5 bg-[#3A342B] mx-auto mt-2"></div>
      </div>

      {/* Content Section - Conditional Rendering */}
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default OurValues;
