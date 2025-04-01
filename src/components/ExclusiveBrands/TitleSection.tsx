import React from 'react';

export interface Brand {
  name: string;
  description: string;
  bgImage: string;
  logo: string;
}

// Define the possible content elements in a slide
export type SlideContentItem =
  | "title"
  | "description"
  | "learnMoreButton"
  | "brochureButton"
  | "orderButton";

export interface BrandSliderProps {
  brands: Brand[];
  title?: string;
  showDivider?: boolean;
  titleAlignment?: "left" | "center" | "right";
  titlePosition?: "top" | "bottom";
  navAlignment?: "left" | "center" | "right";
  navPosition?: "top" | "bottom";
  contentOrder?: SlideContentItem[];
  className?: string;
  swiperTitleAlignment?: "left" | "center" | "right";
  imagePosition?: "top" | "bottom";
}
interface TitleSectionProps {
  title: string;
  showDivider: boolean;
  titleAlignment: "left" | "center" | "right";
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, showDivider, titleAlignment }) => (
  <div className={`w-full mb-4 md:mb-5 mt-12 md:mt-24 text-${titleAlignment}`}>
    <div className={`inline-block px-16 mb-3 md:mb-0`}>
      <h2 className="text-lg md:text-3xl font-bold text-[#3A342B]  md:mb-3">
        {title}
      </h2>
      {showDivider && (
        <div className="w-20 md:w-32 h-1 bg-[#3A342B] mt-2 mx-auto" />
      )}
    </div>
  </div>
);

export default TitleSection;