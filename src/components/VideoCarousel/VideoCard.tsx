import React, { useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { VideoItem } from "./index";

interface VideoCardProps {
  video: VideoItem;
  index: number;
  isMobile: boolean;
  isPlaying: boolean;
  onTogglePlay: (index: number) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  index,
  isMobile,
  isPlaying,
  onTogglePlay,
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

      {/* Play/Pause Button */}
      <button
        className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full z-20"
        onClick={handleTogglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? 
          <FaPause className="text-xs" /> : 
          <FaPlay className="text-xs ml-0.5" />
        }
      </button>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 pointer-events-none"></div>

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 py-4 md:py-6 px-4 text-white z-10">
        <h3 className="text-lg font-semibold uppercase tracking-wider">{video.title}</h3>
        <p className="text-sm mt-1">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;