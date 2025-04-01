import React from 'react';
import { CategoryButton } from './CategoryButton';
import type { CategoryData } from './CategoryButton';

export interface CategoryCardProps extends CategoryData {
  index: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  title,
  description,
  buttonText,
  buttonLink = '#',
  titleAlignment = 'left',
  descriptionAlignment = 'left',
  buttonAlignment = 'left',
  index,
  imagePosition,
  contentOrder = ['title', 'description', 'button'], // Default order
}) => {
  const getAlignmentClass = (alignment: 'left' | 'center' | 'right') => {
    switch (alignment) {
      case 'left': return 'text-left';
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-left';
    }
  };
  const isImageRight = imagePosition ? imagePosition === 'right' : index % 2 === 0;
  const imageOrderClass = isImageRight ? 'md:order-2' : 'md:order-1';
  const contentOrderClass = isImageRight ? 'md:order-1' : 'md:order-2';

  // Create a map of content elements with individual alignment
  const contentElements = {
    title: (
      <h3
        key="title-element"
        className={`text-3xl md:text-6xl font-bold text-[#86704D] md:mb-9 mb-4 -mt-5 font-inter tracking-[-1px]  ${getAlignmentClass(titleAlignment)}`}
      >
        {title}
      </h3>
    ),
    
    description: (
      <p
        key="description-element"
        className={`text-sm md:text-[17px] text-black font-normal font-inter ${getAlignmentClass(descriptionAlignment || titleAlignment)}`}
      >
        {description}
      </p>
    ),
    
    button: (
      <div
        key="button-element"
        className={`mt-8 md:mt-12 ${getAlignmentClass(buttonAlignment || titleAlignment)}`}
      >
        <CategoryButton
          text={buttonText}
          link={buttonLink}
          className=" md:py-3 px-1 md:px-4 text-sm md:text-lg rounded-lg md:w-[340px] w-[220px] font-inter mb-3 md:mb-0  "
        />
      </div>
    )
  };

  // Render the content elements in the specified order
  const renderContent = () => {
    return contentOrder.map((elementType) => {
      return contentElements[elementType];
    });
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 w-full"
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden ${imageOrderClass}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-60 md:h-[480px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div
        className={`p-6  flex flex-col justify-center ${contentOrderClass} md:p-20`}
      >
        {renderContent()}
      </div>
    </div>
  );
};
