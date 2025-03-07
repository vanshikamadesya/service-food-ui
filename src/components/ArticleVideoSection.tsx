import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from "react-icons/fa";

interface ArticleVideoSectionProps {
  title: string;
  image?: string;
  video?: string;
  subtitles?: string;
  description1: string;
  description2: string;
  buttonText: string;
}

const ArticleVideoSection: React.FC<ArticleVideoSectionProps> = ({
  title,
  image,
  video,
  subtitles,
  description1,
  description2,
  buttonText
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
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-[#3A342B] text-3xl font-medium text-center mb-8">
        {title}
      </h2>
      
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
            alt="First Catch Seafood Logo" 
            className="w-full h-auto rounded-lg"
          />
        )}
      </div>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-[#3A342B] font-light leading-relaxed">
          {description1}
        </p>
        
        <p className="text-[#3A342B] font-light leading-relaxed">
          {description2}
        </p>
        
        <div className="text-center pt-4">
          <button className="bg-[#86704D] text-white px-8 py-3 rounded hover:bg-[#6e5c3b] transition-colors">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleVideoSection; 