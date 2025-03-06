import { useState, useRef, useCallback } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import videoSrc from "../assets/images/video.mp4"; // Import video file
import imageSrc from "../assets/images/Quail eggs.png"; // Import image file (fallback)
import { VideoSectionProps } from "../types";


const VideoSection: React.FC<VideoSectionProps> = ({ isVideo = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  }, [isPlaying]);

  return (
    <section className="relative w-full h-[500px] md:h-96 overflow-hidden">
      {/* Background (Image is default, Video optional) */}
      {isVideo ? (
        <video
          ref={videoRef}
          id="background-video"
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          muted
          loop
        />
      ) : (
        <img
          src={imageSrc}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}


      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="absolute w-full h-full flex items-end justify-center pb-10 md:items-center md:justify-start px-6 sm:px-10 lg:px-16">
        <div className="max-w-[90%] sm:max-w-lg text-white text-center md:text-left">
         
          <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="mt-4 w-[80%] md:w-auto px-5 py-2 bg-white text-black rounded-md shadow-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Play/Pause Button (Only for Video) */}
      {isVideo && (
        <button
          className="absolute right-5 bottom-5 md:right-10 md:top-1/2 md:-translate-y-1/2 
          bg-white/30 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-white/50 transition"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <FaPause className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <FaPlay className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </button>
      )}
    </section>
  );
};

export default VideoSection;
