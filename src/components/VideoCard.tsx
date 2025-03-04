import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface VideoCardProps {
  videoSrc: string;
  title: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, title, description }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-full max-w-[320px] h-[380px] rounded-lg overflow-hidden shadow-lg">
      {/* Video */}
      <video ref={videoRef} src={videoSrc} className="w-full h-full object-cover rounded-lg" />

      {/* Play/Pause Button */}
      <button className="absolute top-3 left-3 bg-black/50 text-white p-2 rounded-full" onClick={togglePlay}>
        {isPlaying ? <FaPause className="text-xs" /> : <FaPlay className="text-xs" />}
      </button>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 pointer-events-none"></div>

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 py-6 px-4 text-white">
        <h3 className="text-lg font-semibold uppercase">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
