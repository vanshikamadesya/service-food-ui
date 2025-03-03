import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import video from "../assets/images/video.mp4"; // Import video file
import image from "../assets/images/1983.png"; // Import image file (fallback)

const VideoSection = ({ isVideo = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const videoElement = document.getElementById(
      "background-video"
    ) as HTMLVideoElement;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Background (Video or Image) */}
      {isVideo ? (
        <video
          id="background-video"
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          muted
          loop
        />
      ) : (
        <img
          src={image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

      {/* Content - Left Side */}
      <div className="absolute left-5 sm:left-10 top-1/2 transform -translate-y-1/2 text-white max-w-[90%] sm:max-w-md p-4 sm:p-0">
        <p className="text-sm sm:text-lg md:text-xl leading-tight sm:leading-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <button className="mt-3 sm:mt-4 px-4 sm:px-5 py-2 bg-white text-black rounded-md shadow-lg">
          Learn More
        </button>
      </div>

      {/* Play/Pause Button - Right Side (Responsive Positioning) */}
      {isVideo && (
        <button
          className="absolute right-5 sm:right-10  sm:top-1/2 sm:-translate-y-1/2 
          bg-white/30 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-white/50 transition"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <FaPause className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <FaPlay className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      )}
    </section>
  );
};

export default VideoSection;
