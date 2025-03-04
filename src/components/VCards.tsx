import { useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface VideoCardProps {
  videoSrc: string;
  title: string;
  description: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoSrc,
  title,
  description,
  isPlaying,
  onTogglePlay,
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

  return (
    <div className="relative w-full h-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="object-cover rounded-lg"
        controls={false} // Disable default controls
      />

      {/* Play/Pause Button */}
      <button
        className="absolute top-3 left-3 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
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

      {/* Text Overlay */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-semibold uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-sm opacity-90 mt-1 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;