import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationArrowsProps {
  isMobile: boolean;
  backgroundColor?: string;
  arrowAlignment?: 'left' | 'center' | 'right';
  arrowPosition?: 'top' | 'bottom';
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({ 
  isMobile,
  backgroundColor = "#EFEBE7",
  arrowAlignment = "right",
  arrowPosition = "bottom"
}) => {
  // Generate position classes based on props
  const getDesktopArrowPositionClasses = () => {
    const alignmentClasses = {
      'left': 'left-0 justify-start',
      'center': 'left-1/2 -translate-x-1/2 justify-center',
      'right': 'right-0 justify-end'
    };
    
    const positionClasses = {
      'top': '-top-16 mb-8',
      'bottom': 'bottom-0 mt-8'
    };
    
    return `${alignmentClasses[arrowAlignment]} ${positionClasses[arrowPosition]}`;
  };

  return (
    <>
      {/* Mobile Navigation Arrows */}
      <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
        <button className="prev-button text-[#3A342B] p-2" aria-label="Previous slide">
          <ArrowLeft size={32} />
        </button>
      </div>
      <div className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
        <button className="next-button text-[#3A342B] p-2" aria-label="Next slide">
          <ArrowRight size={32} />
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
      <div className={`hidden md:flex absolute py-4 gap-4 text-[#3A342B] ${getDesktopArrowPositionClasses()}`}>
        <button 
          className="prev-button text-4xl cursor-pointer hover:opacity-75 transition-opacity"
          aria-label="Previous slide"
        >
          <ArrowLeft size={28} />
        </button>
        <button 
          className="next-button text-4xl cursor-pointer hover:opacity-75 transition-opacity"
          aria-label="Next slide"
        >
          <ArrowRight size={28} />
        </button>
      </div>
    </>
  );
};

export default NavigationArrows;
