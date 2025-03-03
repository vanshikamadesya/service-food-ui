import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import videoFile from "../assets/images/video.mp4"; 
import v1 from "../assets/images/v-1.png"; 
import v2 from "../assets/images/v-2.png"; 

export default function VideoContent() {
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
          Lorem ipsum dolor sit
        </h1>
      </div>

      <p className="mt-6 md:px-72 md:mb-20 sm:px-3 md:tracking-widest   w-full text-sm md:text-base text-left opacity-80 ">
      Lorem ipsum dolor sit amet consectetur. Volutpat sodales arcu dui est duis consectetur purus. Porta sit praesent sed interdum. Volutpat augue dolor mauris aliquam sit a ut. Odio turpis pharetra in amet semper. Ut nisl ante
      </p>

      {/* Main Video Section */}
      <div className="relative mt-6 w-full">
        <video ref={videoRef} className="w-full rounded-lg" src={videoFile} />
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
        <p className="text-sm md:text-base text-left px-8 py-6 tracking-wide">
        Lorem ipsum dolor sit amet consectetur. Lacus pretium a mauris eget risus aliquet fermentum molestie pellentesque. Massa purus tempor pulvinar turpis aliquam consectetur luctus.
        </p>
        <p className="text-sm md:text-base text-left px-8 py-6 tracking-wide">
        Lorem ipsum dolor sit amet consectetur. Lacus pretium a mauris eget risus aliquet fermentum molestie pellentesque. Massa purus tempor pulvinar turpis aliquam consectetur luctus.
        </p>
      </div>

      {/* Video Thumbnails */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="relative w-full">
          <img src={v1} alt="Thumbnail 1" className="w-full rounded-lg" />
          <button className="absolute inset-0 flex items-center justify-center">
            <FaPlay className="text-white text-3xl md:text-5xl bg-black bg-opacity-50 p-3 rounded-full" />
          </button>
        </div>
        <div className="relative w-full">
          <img src={v2} alt="Thumbnail 2" className="w-full rounded-lg" />
          <button className="absolute inset-0 flex items-center justify-center">
            <FaPlay className="text-white text-3xl md:text-5xl bg-black bg-opacity-50 p-3 rounded-full" />
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <p className="mt-6 text-sm md:text-base text-left px-8 py-6 tracking-wide">
        Lorem ipsum dolor sit amet consectetur. Dui porttitor ac diam morbi in sed. Turpis elit consequat a ut. Lacinia eget sodales aliquet venenatis urna libero quam. Neque non et mi aliquet nullam quis faucibus. Sed rhoncus sit sed elementum orci at non facilisis lobortis. Risus tortor sit venenatis pretium tempor lorem duis habitant facilisi.
      </p>
    </div>
  );
}
