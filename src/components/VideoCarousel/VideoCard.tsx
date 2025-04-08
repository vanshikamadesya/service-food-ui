import React, { useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { VideoItem } from "../../data/ourStoriesData";

interface VideoCardProps {
  video: VideoItem;
  index: number;
  isMobile: boolean;
  isPlaying: boolean;
  onTogglePlay: (index: number) => void;
  buttonPosition?: {
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
  };
  textPosition?: 'top' | 'bottom' | 'center';
  contentOrder?: ('title' | 'description')[];
}

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  index,
  isMobile,
  isPlaying,
  onTogglePlay,
  buttonPosition = { horizontal: 'left', vertical: 'top' },
  textPosition = 'bottom',
  contentOrder = ['title', 'description'],
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Handle play/pause effects
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (isPlaying) {
      try {
        videoElement.play()
          .catch((error) => {
            console.error("Error playing video:", error);
            onTogglePlay(index); // Reset playing state on error
          });
      } catch (error) {
        console.error("Error playing video:", error);
      }
    } else {
      try {
        videoElement.pause();
      } catch (error) {
        console.error("Error pausing video:", error);
      }
    }
  }, [isPlaying, index, onTogglePlay]);

  const handleTogglePlay = () => {
    onTogglePlay(index);
  };

  // Determine button position classes
  const getButtonPositionClasses = () => {
    const horizontalClass = buttonPosition.horizontal === 'left' ? 'left-4' : 'right-4';
    const verticalClass = buttonPosition.vertical === 'top' ? 'top-4' : 'bottom-4';
    return `absolute ${verticalClass} ${horizontalClass}`;
  };

  // Determine text overlay position classes
  const getTextPositionClasses = () => {
    switch (textPosition) {
      case 'top':
        return 'top-0 left-0 right-0 py-4 md:py-6 px-4';
      case 'center':
        return 'top-1/2 left-0 right-0 transform -translate-y-1/2 py-4 md:py-6 px-4';
      case 'bottom':
      default:
        return 'bottom-0 left-0 right-0 py-4 md:py-6 px-4';
    }
  };

  // Render content elements based on contentOrder array
  const renderContentElements = () => {
    return contentOrder.map((elementType) => {
      if (elementType === 'title') {
        return (
          <h3 key="title" className="text-lg font-semibold uppercase tracking-wider">
            {video.title}
          </h3>
        );
      } else if (elementType === 'description') {
        return (
          <p key="description" className="text-sm mt-1">
            {video.description}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className={`relative ${isMobile ? 'w-[260px]' : 'w-full max-w-[320px]'} h-[340px] md:h-[420px] rounded-lg overflow-hidden shadow-lg`}>
      {/* Video */}
      <video
        ref={videoRef}
        src={video.videoSrc}
        className="w-full h-full object-cover rounded-lg"
        preload="metadata"
        playsInline
        onEnded={() => {
          if (isPlaying) {
            onTogglePlay(index);
          }
        }}
      />

      {/* Play/Pause Button with dynamic positioning */}
      <button
        className={`${getButtonPositionClasses()} bg-black/50 text-white p-2 rounded-full z-20`}
        onClick={handleTogglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ?
          <FaPause className="text-xs" /> :
          <FaPlay className="text-xs ml-0.5" />
        }
      </button>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 pointer-events-none"></div>

      {/* Text Overlay with dynamic positioning and content order */}
      <div className={`absolute ${getTextPositionClasses()} text-white z-10`}>
        {renderContentElements()}
      </div>
    </div>
  );
};

export default VideoCard;