import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import {
  ArticleItem,
  CardElement,
  Alignment,
  VerticalPosition,
  VideoControlPosition,
} from "./article";

interface ArticleCardProps {
  article: ArticleItem;
  index: number;
  cardElementsOrder: CardElement[];
  titleAlignment: Alignment;
  descriptionAlignment: Alignment;
  buttonAlignment: Alignment;
  cardVerticalPosition: VerticalPosition;
  videoControlPosition: VideoControlPosition;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  index,
  cardElementsOrder,
  titleAlignment,
  descriptionAlignment,
  buttonAlignment,
  cardVerticalPosition,
  videoControlPosition,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play/Pause Video
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Get alignment classes for elements
  const getAlignmentClass = (alignment: Alignment) => {
    switch (alignment) {
      case "left":
        return "text-left items-start";
      case "right":
        return "text-right items-end";
      case "center":
        return "text-center items-center";
    }
  };

  // Get vertical position class
  const getVerticalPositionClass = (position: VerticalPosition) => {
    switch (position) {
      case "start":
        return "justify-start";
      case "center":
        return "justify-center";
      case "end":
        return "justify-end";
    }
  };

  // Get video control position class
  const getVideoControlPositionClass = (position: VideoControlPosition) => {
    switch (position) {
      case "topLeft":
        return "top-3 left-3";
      case "topRight":
        return "top-3 right-3";
      case "bottomLeft":
        return "bottom-3 left-3";
      case "bottomRight":
        return "bottom-3 right-3";
      case "top":
        return "top-3 left-1/2 transform -translate-x-1/2";
      case "right":
        return "top-1/2 right-3 transform -translate-y-1/2";
      case "bottom":
        return "bottom-3 left-1/2 transform -translate-x-1/2";
      case "left":
        return "top-1/2 left-3 transform -translate-y-1/2";
      case "center":
        return "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
    }
  };

  // Render a specific card element based on type
  const renderCardElement = (elementType: CardElement) => {
    switch (elementType) {
      case "title":
        return (
          <h3
            className={`text-[#332D25] text-sm sm:text-lg font-bold uppercase ${getAlignmentClass(
              titleAlignment
            )}`}
          >
            {article.title}
          </h3>
        );
      case "description":
        return (
          <p
            className={`text-[#332D25] text-xs sm:text-sm mt-1 ${getAlignmentClass(
              descriptionAlignment
            )}`}
          >
            {article.description}
          </p>
        );
      case "button":
        return (
          <div className={`mt-2 sm:mt-4 ${getAlignmentClass(buttonAlignment)}`}>
            <button className="bg-[#86704D] text-white py-2 px-4 sm:py-2 sm:px-6 rounded-md hover:bg-[#6d5a3a] transition">
              Read More
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Media (Image or Video) */}
      <div className="relative w-full h-[180px] sm:h-[320px] rounded-lg overflow-hidden shadow-lg">
        {article.isVideo ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-lg"
          >
            <source src={article.mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={article.mediaSrc}
            alt={article.title}
            className="w-full h-full object-cover rounded-lg"
          />
        )}

        {/* Play/Pause Button for Video */}
        {article.isVideo && (
          <button
            className={`absolute ${getVideoControlPositionClass(
              videoControlPosition
            )} bg-black/50 text-white p-2 rounded-full`}
            onClick={togglePlay}
          >
            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>
        )}
      </div>

      {/* Card Content (Title, Description, Button) with customizable order and alignment */}
      <div
        className={`mt-2 sm:mt-4 tracking-wide flex flex-col flex-1 ${getVerticalPositionClass(
          cardVerticalPosition
        )}`}
      >
        {cardElementsOrder.map((element, i) => (
          <div key={i}>{renderCardElement(element)}</div>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;
