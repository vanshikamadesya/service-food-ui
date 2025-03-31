import React from 'react';
import { CategoryCard } from './CategoryCard';
import type { CategoryData } from './CategoryButton';

export interface CategoryListItem extends Partial<CategoryData> {
  type?: 'title';
  showDivider?: boolean;
}

export interface CategoryCardListProps {
  categories: CategoryData[];
  title?: string;
  showDivider?: boolean;
  backgroundColor?: string;
  titleAlignment?: 'left' | 'center' | 'right';
  titlePosition?: 'top' | 'bottom';
}

const CategoryCardList: React.FC<CategoryCardListProps> = ({
  categories,
  title = 'OUR CATEGORIES',
  showDivider = true,
  backgroundColor = 'bg-[#EFEBE7]',
  titleAlignment = 'center',
  titlePosition = 'top',
}) => {
  const getProcessedItems = () => {
    // Create a copy of categories to avoid mutation
    const processedCategories: CategoryListItem[] = categories.map((category) => ({
      ...category,
    }));

    // Insert title based on position
    switch (titlePosition) {
      case 'top':
        return [
          { type: 'title', title, showDivider, titleAlignment },
          ...processedCategories,
        ];
      case 'bottom':
        return [
          ...processedCategories,
          { type: 'title', title, showDivider, titleAlignment },
        ];
      default:
        // Default to top if position is invalid
        return [
          { type: 'title', title, showDivider, titleAlignment },
          ...processedCategories,
        ];
    }
  };

  // Title Section Component
  const TitleSection: React.FC<{
    title: string;
    showDivider: boolean;
    titleAlignment: 'left' | 'center' | 'right';
  }> = ({ title, showDivider, titleAlignment }) => (
    <div className={`w-full -mb-4 md:mb-10  text-${titleAlignment}`}>
      <div className={`inline-block`}>
      <h2 className="text-xl md:text-3xl font-bold text-[#3A342B] mb-4 md:mb-4">
          {title}
        </h2>
        {showDivider && (
          <div className="w-28 h-1 bg-[#3A342B] mt-2 mx-auto" />
        )}
      </div>
    </div>
  );
  
  // Process items with title
  const processedItems = getProcessedItems();

  return (
    <div
      className={`${backgroundColor} min-h-screen flex flex-col items-center py-12 px-5 md:px-8 `}
    >
      <div
        className="w-full max-w-screen-xl flex flex-col gap-16 md:px-0 md:py-4 md:mb-8"
      >
        {processedItems.map((item, index) => {
          // Render title section
          if (item.type === 'title') {
            return (
              <TitleSection
                key={`title-${index}`}
                title={item.title || 'Categories'}
                showDivider={item.showDivider || false}
                titleAlignment={item.titleAlignment || 'center'}
              />
            );
          }

          // Calculate card index, excluding title items
          const cardIndex = processedItems
            .slice(0, index)
            .filter((i) => i.type !== 'title').length;

          // Ensure the item is a valid CategoryData
          const cardProps = item as CategoryData;

          // Render category card
          return (
            <CategoryCard
              key={cardProps.id || `card-${index}`}
              image={cardProps.image}
              title={cardProps.title}
              description={cardProps.description}
              buttonText={cardProps.buttonText}
              buttonLink={cardProps.buttonLink || '#'}
              titleAlignment={cardProps.titleAlignment || 'left'}
              descriptionAlignment={cardProps.descriptionAlignment}
              buttonAlignment={cardProps.buttonAlignment}
              imagePosition={cardProps.imagePosition || (cardIndex % 2 === 0 ? 'right' : 'left')}
              contentOrder={cardProps.contentOrder || ['title', 'description', 'button']}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCardList;
