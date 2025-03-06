import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import NavigationArrows from "./NavigationArrows";
import CarouselWrapper from "./CarouselWrapper";
import { videoData } from "../../data/videoData";

export interface VideoItem {
  videoSrc: string;
  title: string;
  description: string;
}

export interface VideoCarouselProps {
  mainTitle?: string;
  backgroundColor?: string;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  mainTitle = "OUR STORIES",
  backgroundColor = "#EFEBE7",
}) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if it's mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleSlideChange = () => {
    // Reset playing state when slides change
    if (playingIndex !== null) {
      setPlayingIndex(null);
    }
  };

  return (
    <div 
      className="py-16 md:py-20 px-4 md:px-6 w-full flex flex-col items-center" 
      style={{ backgroundColor }}
    >
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10 w-full">
        <h2 className="text-[#505050] font-inter text-xl md:text-2xl font-bold uppercase tracking-wide">
          {mainTitle}
        </h2>
        <div className="w-20 h-[2px] bg-[#505050] mx-auto mt-2"></div>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-[1400px] pb-20">
        {/* Navigation and Carousel */}
        <NavigationArrows isMobile={isMobile} backgroundColor={backgroundColor} />
        
        <CarouselWrapper 
          isMobile={isMobile} 
          onSlideChange={handleSlideChange}
        >
          {videoData.map((video, index) => (
            <VideoCard
              key={index}
              video={video}
              index={index}
              isMobile={isMobile}
              isPlaying={playingIndex === index}
              onTogglePlay={(idx) => {
                setPlayingIndex(playingIndex === idx ? null : idx);
              }}
            />
          ))}
        </CarouselWrapper>
      </div>
    </div>
  );
};

export default VideoCarousel;