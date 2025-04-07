// src/components/ArticleCard.tsx - Individual article card for the carousel

import React from "react";
import {
  getAlignmentClass,
  TEXT_COLOR_DESC,
  MEDIA_PLACEHOLDER_BG,
} from "../../types/articleUtils";

// Define the Article interface based on the data structure
interface ArticleProps {
  article: {
    id: string | number;
    title: string;
    description: string;
    mediaUrl: string;
    mediaType: "image" | "video" | string;
  };
}

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="w-full transition-all duration-300">
      {/* Media container */}
      <div
        className={`h-[220px] md:h-[280px] lg:h-[350px] overflow-hidden rounded-lg mb-3 lg:mb-5 ${MEDIA_PLACEHOLDER_BG}`}
      >
        {article.mediaType === "image" ? (
          <img
            src={article.mediaUrl}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : article.mediaType === "video" ? (
          <video
            src={article.mediaUrl}
            className="w-full h-full object-cover"
            controls
            muted
            loop
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Invalid media
          </div>
        )}
      </div>

      {/* Content */}
      <h3
        className={`text-xl lg:text-2xl font-semibold uppercase mb-2 lg:mb-3 font-inter ${getAlignmentClass(
          "left"
        )}`}
      >
        {article.title}
      </h3>
      <p
        className={`text-sm lg:text-base mb-2 lg:mb-2 leading-relaxed line-clamp-3 lg:line-clamp-4 font-inter ${getAlignmentClass(
          "left"
        )}`}
        style={{ color: TEXT_COLOR_DESC }}
      >
        {article.description}
      </p>

      {/* Action button */}
      <button
        style={{
          backgroundColor: "#86704D",
          color: "white",
          padding: "6px 16px",
          fontFamily: "Inter",
          fontSize: "14px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        Send
      </button>
    </div>
  );
};

export default ArticleCard;
