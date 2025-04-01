import React from 'react';
import { Brand, SlideContentItem } from './TitleSection';

interface SlideContentProps {
  brand: Brand;
  contentOrder: SlideContentItem[];
  swiperTitleAlignment: "left" | "center" | "right";
  imagePosition: "top" | "bottom";
}

const SlideContent: React.FC<SlideContentProps> = ({ 
  brand, 
  contentOrder, 
  swiperTitleAlignment, 
  imagePosition 
}) => {
  // Function to render a content item based on type
  const renderContentItem = (type: SlideContentItem, brand: Brand) => {
    switch (type) {
      case "title":
        return (
          <h3
            key="title"
            className="text-black text-xl md:text-3xl font-bold mb-6"
          >
            {brand.name}
          </h3>
        );
      case "description":
        return (
          <p key="description" className="text-black md:text-sm md:mb-10 font-normal">
            {brand.description}
          </p>
        );
      case "learnMoreButton":
        return (
          <button
            key="learnMoreButton"
            className="w-full bg-[#86704D] text-white py-2 rounded-lg mb-2 text-sm"
          >
            Learn More
          </button>
        );
      case "brochureButton":
        return (
          <button
            key="brochureButton"
            className="w-full bg-white border py-2 rounded-lg text-sm mb-2"
          >
            Download Brochure
          </button>
        );
      case "orderButton":
        return (
          <button
            key="orderButton"
            className="w-full bg-white border py-2 rounded-lg text-sm"
          >
            Order Online
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex bg-[#EFEBE7] shadow-lg mt-8 rounded-xl overflow-hidden flex-col transition-opacity duration-500 font-inter ">
        {imagePosition === "top" && (
          <div
            className="relative h-52 bg-cover bg-center"
            style={{ backgroundImage: `url(${brand.bgImage})` }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 object-contain"
            />
          </div>
        )}

        <div
          className={`p-9 text-${swiperTitleAlignment} flex-grow font-semibold mb-2`}
        >
          {contentOrder.map((item) => renderContentItem(item, brand))}
        </div>

        {imagePosition === "bottom" && (
          <div
            className="relative h-52 bg-cover bg-center"
            style={{ backgroundImage: `url(${brand.bgImage})` }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 object-contain"
            />
          </div>
        )}
      </div>

      {/* Mobile View - partial card design */}
      <div className="md:hidden bg-white shadow-md rounded-md overflow-hidden flex flex-col transition-opacity duration-500 font-inter">
        {imagePosition === "top" && (
          <div
            className="relative h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${brand.bgImage})` }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain"
            />
          </div>
        )}

        <div className={`px-4 py-3 text-${swiperTitleAlignment} flex-grow bg-[#EFEBE7]`}>
          <h3 className="text-[#847F7F] text-xl font-bold mb-4 mt-3">
            {brand.name}
          </h3>
          <p className="text-[#847F7F] text-sm mb-3  ">
            {brand.description}
          </p>
        </div>

        {imagePosition === "bottom" && (
          <div
            className="relative h-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${brand.bgImage})` }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 object-contain"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default SlideContent;