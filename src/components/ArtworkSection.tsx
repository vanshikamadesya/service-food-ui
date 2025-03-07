import React from 'react';
import { ArtworkSectionData } from '../data/ArtworkSectionData';

const ArtworkSection: React.FC<ArtworkSectionData> = ({
  title,
  subtitle,
  mainImage,
  leftColumnText,
  rightColumnQuote,
  rightColumnAuthor,
  bannerImage,
  artworkDetails
}) => {
  return (
    <div className="bg-[#D9D9D959]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-[#4C3525] text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-[#3A342B] max-w-xl mx-auto font-light">
            {subtitle}
          </p>
        </div>
        
        {/* Main Featured Image */}
        <div className="mb-10">
          <img 
            src={mainImage.src}
            alt={mainImage.alt}
            className="w-full h-[200px] md:h-auto rounded-lg object-cover"
          />
          <p className="text-sm text-[#3A342B] mt-2 font-light italic">
            {mainImage.caption}
          </p>
        </div>
        
        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/2">
            <p className="text-[#3A342B] max-w-sm text-md font-regular">
              {leftColumnText}
            </p>
          </div>
          
          {/* Right Column */}
          <div className="md:w-1/2">
            <p className="text-[#86704D] text-2xl max-w-lg font-bold">
              {rightColumnQuote}
            </p>
            <p className="text-[#3A342B] text-sm mt-2 font-light">
              {rightColumnAuthor}
            </p>
          </div>
        </div>
      </div>
      
      {/* Banner Section - No Bottom Margin */}
      <div className="w-full relative">
        <img
          src={bannerImage.src}
          alt={bannerImage.alt}
          className="w-full h-48 md:h-64 lg:h-80 object-cover"
        />
        <div className="absolute top-0 left-0 p-4 md:p-8 lg:p-12 text-white max-w-6xl mx-auto inset-x-0">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium max-w-sm">
            {bannerImage.text}
          </p>
        </div>
      </div>

      {/* Bottom Section - No Gap */}
      <div className="bg-[#D9D9D959]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2 px-4 md:px-0">
              <img 
                src={artworkDetails.image.src} 
                alt={artworkDetails.image.alt} 
                className="w-full aspect-square md:w-[350px]  lg:ml-40 rounded-lg object-cover"                />
            </div>
            
            <div className="md:w-1/2">
              <p className="text-[#3A342B] max-w-sm font-light leading-relaxed">
                {artworkDetails.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkSection; 