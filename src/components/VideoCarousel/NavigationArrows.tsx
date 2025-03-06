import React from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

interface NavigationArrowsProps {
  isMobile: boolean;
  backgroundColor?: string;
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({ 
  isMobile,
  backgroundColor = "#EFEBE7"
}) => {
  return (
    <>
      {/* Mobile Navigation Arrows */}
      <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
        <button className="prev-button text-[#3A342B] p-2" aria-label="Previous slide">
          <HiArrowNarrowLeft size={32} />
        </button>
      </div>
      <div className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
        <button className="next-button text-[#3A342B] p-2" aria-label="Next slide">
          <HiArrowNarrowRight size={32} />
        </button>
      </div>

      {/* Gradient overlay for mobile */}
      {isMobile && (
        <>
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: `linear-gradient(270deg, rgba(239, 235, 231, 0) 0%, ${backgroundColor} 100%)` }}>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: `linear-gradient(90deg, rgba(239, 235, 231, 0) 0%, ${backgroundColor} 100%)` }}>
          </div>
        </>
      )}

      {/* Desktop Navigation Buttons */}
      <div className="hidden md:flex absolute -bottom-16 py-16 right-16 gap-4 justify-end text-[#3A342B]">
        <button 
          className="prev-button text-4xl cursor-pointer hover:opacity-75 transition-opacity"
          aria-label="Previous slide"
        >
          <HiArrowNarrowLeft />
        </button>
        <button 
          className="next-button text-4xl cursor-pointer hover:opacity-75 transition-opacity"
          aria-label="Next slide"
        >
          <HiArrowNarrowRight />
        </button>
      </div>
    </>
  );
};

export default NavigationArrows;