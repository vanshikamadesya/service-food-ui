import React from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

interface SwiperNavigationProps {
  arrowAlignment?: 'left' | 'center' | 'right';
  arrowPosition?: 'top' | 'bottom';
  className?: string;
}

const SwiperNavigation: React.FC<SwiperNavigationProps> = ({
  arrowAlignment = 'right',
  arrowPosition = 'bottom',
  className = ''
}) => {
  // Get arrow alignment class
  const getArrowAlignmentClass = () => {
    switch (arrowAlignment) {
      case 'left': return 'left-16';
      case 'center': return 'left-1/2 -translate-x-1/2';
      default: return 'right-16';
    }
  };

  // Get arrow position class
  const getArrowPositionClass = () => {
    return arrowPosition === 'top' 
      ? 'top-0 -translate-y-16' 
      : 'bottom-0 translate-y-16';
  };

  return (
    <div className={`flex absolute ${getArrowPositionClass()} ${getArrowAlignmentClass()} items-center gap-4 z-20 ${className}`}>
      <button className="custom-swiper-prev text-2xl p-1">
        <HiArrowNarrowLeft />
      </button>
      <button className="custom-swiper-next text-2xl p-1">
        <HiArrowNarrowRight />
      </button>
    </div>
  );
};

export default SwiperNavigation;