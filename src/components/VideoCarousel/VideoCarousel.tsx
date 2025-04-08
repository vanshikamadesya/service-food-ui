import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import NavigationArrows from "./NavigationArrows";
import CarouselWrapper from "./CarouselWrapper";
import TitleSection from "../TitleSection";
import { videoData } from "../../data/ourStoriesData";

export interface VideoCarouselProps {
  mainTitle?: string;
  backgroundColor?: string;
  titleAlignment?: "left" | "center" | "right";
  titlePosition?: "top" | "bottom";
  showDivider?: boolean;
  arrowAlignment?: "left" | "center" | "right";
  arrowPosition?: "top" | "bottom";
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  mainTitle = "OUR STORIES",
  backgroundColor = "#EFEBE7",
  titleAlignment = "center",
  titlePosition = "top",
  showDivider = true,
  arrowAlignment = "right",
  arrowPosition = "bottom",
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
      className="pt-10 py-0 md:py-20 px-4 md:px-8 w-full flex flex-col items-center"
      style={{ backgroundColor }}
    >
      {/* Title on Top */}
      {titlePosition === "top" && (
        <TitleSection
          title={mainTitle}
          showDivider={showDivider}
          titleAlignment={titleAlignment}
          titlePosition={titlePosition}
          className="text-[#505050] "
        />
      )}

      {/* Carousel Section */}
      <div className="relative w-full max-w-[1400px] pb-20 md:mt-12">
        {/* Navigation and Carousel */}
        <NavigationArrows
          isMobile={isMobile}
          backgroundColor={backgroundColor}
          arrowAlignment={arrowAlignment}
          arrowPosition={arrowPosition}
        />

        <CarouselWrapper isMobile={isMobile} onSlideChange={handleSlideChange}>
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
              buttonPosition={{ horizontal: 'left', vertical: 'top' }}
              textPosition="bottom"
              contentOrder={['title','description']}
            />
          ))}
        </CarouselWrapper>
      </div>
      {/* Title on Bottom */}
      {titlePosition === "bottom" && (
        <TitleSection
          title={mainTitle}
          showDivider={showDivider}
          titleAlignment={titleAlignment}
          titlePosition={titlePosition}
          className="text-[#505050] -mt-11 -md:mt-5 "
        />
      )}
    </div>
  );
};

export default VideoCarousel;
