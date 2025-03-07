import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export interface VideoSectionData {
  title: string;
  subtitle: string;
  mainVideo: string;
  description1: string;
  description2: string;
  previewThumbnail: {
    src: string;
    alt: string;
  };
  secondaryThumbnail: {
    src: string;
    alt: string;
  };
  imgDescription1: string;
  imgDescription2: string;
}

const VideoSection: React.FC<VideoSectionData> = ({
  title,
  subtitle,
  mainVideo,
  description1,
  description2,
  previewThumbnail,
  secondaryThumbnail,
  imgDescription1,
  imgDescription2,
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

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 right-7 py-10 text-[#3A342B] font-inter">
      {/* Heading (Centered) */}
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#4C3525]">
          {title}
        </h1>
      </div>

      <p className="mt-6 md:px-72 md:mb-20 sm:px-3 md:tracking-widest w-full text-sm md:text-base text-left opacity-80">
        {subtitle}
      </p>

      {/* Main Video Section */}
      <div className="relative mt-6 w-full">
        <video ref={videoRef} className="w-full rounded-lg" src={mainVideo} />
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isPlaying ? (
            <FaPause className="text-white text-3xl md:text-5xl bg-black bg-opacity-50 p-3 rounded-full" />
          ) : (
            <FaPlay className="text-white text-3xl md:text-5xl bg-black bg-opacity-50 p-3 rounded-full" />
          )}
        </button>
      </div>

      {/* Video Descriptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <p className="text-sm md:text-base  text-left lg:pl-28 py-6 tracking-wide">
          {description1}
        </p>
        <p className="text-sm md:text-base text-left px-8 py-6 lg:pr-24 tracking-wide">
          {description2}
        </p>
      </div>

      {/* Video Thumbnails */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-[85%] mx-auto">
        <div className="relative w-full">
          <img src={previewThumbnail.src} alt={previewThumbnail.alt} className="w-full rounded-lg" />
          <button className="absolute inset-0 flex items-center justify-center">
            <FaPlay className="text-white text-3xl md:text-5xl bg-black bg-opacity-50 p-3 rounded-full" />
          </button>
        </div>
        <div className="relative w-full">
          <img src={secondaryThumbnail.src} alt={secondaryThumbnail.alt} className="w-full rounded-lg" />
          <button className="absolute inset-0 flex items-center justify-center">
            <FaPlay className="text-white text-3xl md:text-5xl bg-black bg-opacity-50 p-3 rounded-full" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 font-light italic md:grid-cols-2 gap-6 mt-1">
        <p className="text-sm md:text-base  text-left lg:pl-28  tracking-wide">
          {imgDescription1}
        </p>
        <p className="text-sm md:text-base text-left px-8  lg:pr-24 tracking-wide">
          {imgDescription2}
        </p>
      </div>
    </div>
  );
};

export default VideoSection;