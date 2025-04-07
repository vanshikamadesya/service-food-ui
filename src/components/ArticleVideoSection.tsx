import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface ArticleVideoSectionProps {
  title: string;
  image?: string;
  video?: string;
  subtitles?: string;
  description1: string;
  description2: string;
  buttonText: string;
  titlePosition?: "left" | "center" | "right";
  titlePlacement?: "top" | "bottom";
  description1Alignment?: "left" | "center" | "right";
  description2Alignment?: "left" | "center" | "right";
  buttonAlignment?: "left" | "center" | "right";
  descriptionPosition?: "left" | "center" | "right";
}

const ArticleVideoSection: React.FC<ArticleVideoSectionProps> = ({
  title,
  image,
  video,
  description1,
  description2,
  buttonText,
  titlePosition = "center",
  titlePlacement = "top",
  description1Alignment = "left",
  description2Alignment = "left",
  buttonAlignment = "center",
  descriptionPosition = "center",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Simple class mapping for text alignments
  const titleClasses = `text-[#3A342B] text-3xl font-medium mb-8 text-${titlePosition}`;
  const description1Classes = `text-[#3A342B] font-light leading-relaxed text-${description1Alignment}`;
  const description2Classes = `text-[#3A342B] font-light leading-relaxed text-${description2Alignment}`;
  const buttonContainerClasses = `pt-4 text-${buttonAlignment}`;

  // Position mapping for the description block
  const getDescriptionContainerClasses = () => {
    const baseClasses = "space-y-6 ";
    switch (descriptionPosition) {
      case "left":
        return baseClasses + "mr-auto ml-0";
      case "right":
        return baseClasses + "ml-auto mr-0";
      default:
        return baseClasses + "mx-auto";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Title at top if specified */}
      {titlePlacement === "top" && <h2 className={titleClasses}>{title}</h2>}

      {/* Video or image section */}
      <div className="relative mb-8">
        {video ? (
          <>
            <video
              ref={videoRef}
              src={video}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="text-white text-3xl md:text-5xl bg-black bg-opacity-50 p-3 rounded-full">
                {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
              </div>
            </button>
          </>
        ) : (
          <img
            src={image}
            alt="Section image"
            className="w-full h-auto rounded-lg"
          />
        )}
      </div>

      {/* Description and button - with positioning */}
      <div className={`max-w-2xl ${getDescriptionContainerClasses()}`}>
        <p className={description1Classes}>{description1}</p>
        <p className={description2Classes}>{description2}</p>

        <div className={buttonContainerClasses}>
          <button className="bg-[#86704D] text-white px-8 py-3 rounded hover:bg-[#6e5c3b] transition-colors">
            {buttonText}
          </button>
        </div>
      </div>

      {/* Title at bottom if specified */}
      {titlePlacement === "bottom" && <h2 className={titleClasses}>{title}</h2>}
    </div>
  );
};

export default ArticleVideoSection;
