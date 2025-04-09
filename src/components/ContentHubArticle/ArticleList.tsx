// src/components/ArticleList.tsx
import React from "react";
import ArticleCard from "../ContentHubArticle/ArticleCard";
import { ArticleListProps } from "../ContentHubArticle/article";

const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  mainTitle = "Articles",
  backgroundColor = "#EFEBE7",
  titlePosition = "center",
  cardElementsOrder = ["title", "description", "button"],
  titleAlignment = "left",
  descriptionAlignment = "left",
  buttonAlignment = "left",
  cardVerticalPosition = "start",
  videoControlPosition = "topLeft",
}) => {
  // Map title position to appropriate tailwind classes
  const getTitlePositionClasses = (): string => {
    switch (titlePosition) {
      case "left":
        return "text-left self-start";
      case "right":
        return "text-right self-end";
      case "top":
        return "text-center mb-10";
      case "bottom":
        return "text-center mt-10 order-last";
      case "center":
      default:
        return "text-center";
    }
  };

  // Handle underline position based on title position
  const getUnderlineClasses = (): string => {
    const baseClasses = "w-16 h-[3px] bg-[#3A342B] mt-2";
    switch (titlePosition) {
      case "left":
        return `${baseClasses} ml-0`;
      case "right":
        return `${baseClasses} mr-0 ml-auto`;
      case "top":
      case "bottom":
      case "center":
      default:
        return `${baseClasses} mx-auto`;
    }
  };

  return (
    <div
      className="py-16 px-6 w-full flex flex-col items-center"
      style={{ backgroundColor }}
    >
      {/* Section Title */}
      <div className={`mb-10 py-3 ${getTitlePositionClasses()}`}>
        <h2 className="text-[#3A342B] text-2xl sm:text-3xl font-bold uppercase">
          {mainTitle}
        </h2>
        <div className={getUnderlineClasses()}></div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 max-w-6xl mx-auto">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            index={index}
            cardElementsOrder={cardElementsOrder}
            titleAlignment={titleAlignment}
            descriptionAlignment={descriptionAlignment}
            buttonAlignment={buttonAlignment}
            cardVerticalPosition={cardVerticalPosition}
            videoControlPosition={videoControlPosition}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
