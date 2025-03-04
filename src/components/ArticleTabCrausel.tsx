import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import your assets
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import sampleImage1 from '../assets/images/ArticleP/Meatballs Banner.png'; // Replace with your actual image paths
import sampleImage2 from '../assets/images/ArticleP/Meatballs Banner.png';
import sampleImage3 from '../assets/images/ArticleP/Meatballs Banner.png';
// Sample data for slider items
const sliderData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    subtitle: "Posuere nibh lorem feugiat nisl magna amet turpis adipiscing. Facilisi sed vitae.",
    description: "This slide demonstrates content positioned at the left side with an image on the right taking up 30% of the screen width.",
    image: sampleImage1,
    position: "left",
    author: "Renato",
    quote: "Lorem ipsum dolor sit amet consectetur. Morbi sagittis in orci vulputate lacus tristique posuere eu."
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    subtitle: "Posuere nibh lorem feugiat nisl magna amet turpis adipiscing. Facilisi sed vitae.",
    description: "This slide has centered content with images on both the left and right sides, each taking up 30% of the screen width.",
    imageLeft: sampleImage2,
    imageRight: sampleImage3,
    position: "center",
    author: "Renato",
    quote: "Lorem ipsum dolor sit amet consectetur. Morbi sagittis in orci vulputate lacus tristique posuere eu."
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    subtitle: "Posuere nibh lorem feugiat nisl magna amet turpis adipiscing. Facilisi sed vitae.",
    description: "This slide demonstrates content positioned at the right side with an image on the left taking up 30% of the screen width.",
    image: sampleImage1,
    position: "right",
    author: "Renato",
    quote: "Lorem ipsum dolor sit amet consectetur. Morbi sagittis in orci vulputate lacus tristique posuere eu."
  }
];
interface CarouselSliderProps {
  className?: string;
}
const CarouselSlider: React.FC<CarouselSliderProps> = ({ className }) => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const goPrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };
  const goNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  const renderSlide = (item: typeof sliderData[0]) => {
    if (item.position === 'left') {
      return (
        <div className="flex flex-row w-full h-[60vh]">
          {/* Content - Left aligned */}
          <div className="w-[70%] bg-[#D9D9D959] flex items-center place-content-end pr-20 text-right">
          <div className="ml-[15%] max-w-xl text-right">
              <h1 className="text-4xl font-medium text-[#3A342B] mb-4 text-right leading-tight">
                {item.title}
              </h1>
              <p className="text-xl text-gray-700  mb-6">
                {item.subtitle}
              </p>
              <div className="mt-8 text-right">
                <p className="text-lg font-medium">{item.author}</p>
                <p className="text-sm italic">{item.quote}</p>
              </div>
            </div>
          </div>
          {/* Image - right side (30% width) */}
          <div className="w-[30%]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );
    } else if (item.position === 'center') {
      return (
        <div className="flex flex-row w-full h-[60vh]">
          {/* Image - left side (30% width) */}
          <div className="w-[30%]">
            <img
              src={item.imageLeft}
              alt={`${item.title} left`}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content - center (40% width) */}
          <div className="w-[40%] bg-gray-100 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-4xl font-medium text-gray-800 mb-4 leading-tight">
                {item.title}
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                {item.subtitle}
              </p>
              <div className="mt-8">
                <p className="text-lg font-medium">{item.author}</p>
                <p className="text-sm italic max-w-md mx-auto">{item.quote}</p>
              </div>
            </div>
          </div>
          {/* Image - right side (30% width) */}
          <div className="w-[30%]">
            <img
              src={item.imageRight}
              alt={`${item.title} right`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-row w-full h-[60vh]">
          {/* Image - left side (30% width) */}
          <div className="w-[30%] text-[#3A342B]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content - right aligned */}
          <div className="w-[70%] bg-gray-100 flex items-center">
            <div className="ml-[10%] mr-[15%] max-w-xl">
              <h1 className="text-4xl font-medium text-gray-800 mb-4 leading-tight">
                {item.title}
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                {item.subtitle}
              </p>
              <div className="mt-8">
                <p className="text-lg font-medium">{item.author}</p>
                <p className="text-sm italic">{item.quote}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className={`${className}`}>
      {/* Carousel container */}
      <div className="w-full relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSwiper={setSwiperRef}
          onSlideChange={handleSlideChange}
          className="w-full"
        >
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              {renderSlide(item)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* White bar below carousel with navigation */}
      <div className="w-full h-16 bg-white flex items-center justify-end px-16">
        {/* Navigation arrows on the right side */}
        <div className="flex justify-end space-x-6">
          <button onClick={goPrev} className="focus:outline-none" aria-label="Previous slide">
            <HiArrowNarrowLeft className="w-20 h-16" />
          </button>
          <button onClick={goNext} className="focus:outline-none" aria-label="Next slide">
            <HiArrowNarrowRight className="w-20 h-16" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CarouselSlider;