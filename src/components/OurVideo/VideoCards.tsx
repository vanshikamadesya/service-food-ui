import { useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface VideoCardProps {
  videoSrc: string;
  title: string;
  description: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
  buttonPosition?: {
    horizontal: "left" | "right";
    vertical: "top" | "bottom";
  };
  textPosition?: {
    horizontal: "left" | "center" | "right";
    vertical: "top" | "bottom";
  };
  textOrder?: ("title" | "description")[];
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoSrc,
  title,
  description,
  isPlaying,
  onTogglePlay,
  buttonPosition = { horizontal: "left", vertical: "top" },
  textPosition = { horizontal: "left", vertical: "bottom" },
  textOrder = ["title", "description"],
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Function to get button position classes
  const getButtonPositionClasses = () => {
    let classes = "absolute ";
    
    // Vertical position
    if (buttonPosition.vertical === "top") {
      classes += "top-3 ";
    } else {
      classes += "bottom-3 ";
    }
    
    // Horizontal position
    if (buttonPosition.horizontal === "left") {
      classes += "left-3 ";
    } else {
      classes += "right-3 ";
    }
    
    return classes + "bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition";
  };

  // Function to get text container position classes
  const getTextContainerClasses = () => {
    let classes = "absolute ";
    
    // Vertical position
    if (textPosition.vertical === "top") {
      classes += "top-4 ";
    } else {
      classes += "bottom-4 ";
    }
    
    // Horizontal position
    classes += "left-4 right-4 text-white ";
    
    return classes;
  };

  // Function to get text alignment class
  const getTextAlignmentClass = () => {
    switch (textPosition.horizontal) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  // Render text elements based on textOrder
  const renderTextElement = (element: "title" | "description") => {
    switch (element) {
      case "title":
        return (
          <h3
            key="title"
            className={`text-lg font-semibold uppercase tracking-wide ${getTextAlignmentClass()}`}
          >
            {title}
          </h3>
        );
      case "description":
        return (
          <p
            key="description"
            className={`text-sm opacity-90 mt-1 ${getTextAlignmentClass()}`}
          >
            {description}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="object-cover rounded-lg"
        controls={false} // Disable default controls
      />

      {/* Play/Pause Button - positioned based on buttonPosition prop */}
      <button
        className={getButtonPositionClasses()}
        onClick={onTogglePlay}
      >
        {isPlaying ? (
          <FaPause className="text-sm" />
        ) : (
          <FaPlay className="text-sm" />
        )}
      </button>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 pointer-events-none"></div>

      {/* Text Overlay - positioned based on textPosition prop */}
      <div className={getTextContainerClasses()}>
        {/* Render title and description based on textOrder */}
        {textOrder.map(item => renderTextElement(item))}
      </div>
    </div>
  );
};

export default VideoCard;