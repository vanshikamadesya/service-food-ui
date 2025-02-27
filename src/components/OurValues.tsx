import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import leftArrow from "../assets/arrows/arrow left.png";
import rightArrow from "../assets/arrows/arrow right.png";

const values = [
  { title: "Creativity", description: "We Deliver Solutions, Not Problems, Are Always Learning, And Never Settle For Average Or The Status Quo." },
  { title: "Resilience", description: "We Are Adaptive, Perseverant, And Passionate About Our Industry And Work." },
  { title: "Inclusivity", description: "We Are Welcoming, Open-Minded, And Respectful Of Others’ Ideas, Points Of View, And Preferences." },
  { title: "Collaboration", description: "We Communicate Honestly, Listen Empathetically, And Help Each Other Whenever Needed." },
  { title: "Work Ethic", description: "We Have Integrity, Are Reliable, And Get Things Done." },
  { title: "Humility", description: "We Stay Modest And Appreciative Regardless Of Our Success." }
];

const OurValues = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full min-h-[45vh] flex flex-col items-center justify-center overflow-hidden text-center bg-[#EFEBE7] px-4 md:px-">
      {/* Title */}
      <h2 className="text-lg md:text-2xl font-inter font-semibold uppercase tracking-widest text-[#3A342B] md:mt-2">
        OUR VALUES
      </h2>
      <div className="w-16 md:w-24 h-0.7 bg-[#3A342B] mx-auto my-2"></div>

      {/* Swiper Component */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        className="w-full"
      >
        {values.map((value, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-center text-center pt-6 md:pt-14 px-4 md:px-10 mr-0.5">
            <h3 className="text-2xl md:text-4xl font-extrabold text-[#86704D]">{value.title}</h3>
            <p className="mt-4 text-base md:text-xl text-[#080A0B] max-w-xs md:max-w-lg mx-auto font-inter font-regular">
              {value.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 h-[20px] w-[30px] md:h-[25px] md:w-[40px] z-10">
        <img src={leftArrow} alt="Previous" className="filter brightness-0" />
      </button>
      <button className="next-btn absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 h-[20px] w-[30px] md:h-[25px] md:w-[40px] z-10">
        <img src={rightArrow} alt="Next" className="filter brightness-0" />
      </button>
    </div>
  );
};

export default OurValues;
