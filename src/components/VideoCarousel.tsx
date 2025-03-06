import React, { useRef, useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

interface VideoItem {
  videoSrc: string;
  title: string;
  description: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
  mainTitle?: string;
  backgroundColor?: string;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({
  videos,
  mainTitle = "OUR STORIES",
  backgroundColor = "#EFEBE7",
}) => {
  // Use an array to store refs for each video
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Initialize the refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos]);

  // Check if it's mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      // Pause any playing videos on unmount
      if (playingIndex !== null && videoRefs.current[playingIndex]) {
        videoRefs.current[playingIndex]?.pause();
      }
    };
  }, [playingIndex]);

  // Simple function to assign refs - avoid useCallback here as it caused issues
  const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el;
  };

  // Toggle play/pause - simplified for reliability
  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    
    if (!video) return;
    
    // If this video is already playing, pause it
    if (playingIndex === index) {
      video.pause();
      setPlayingIndex(null);
      return;
    }
    
    // Pause currently playing video if any
    if (playingIndex !== null && videoRefs.current[playingIndex]) {
      try {
        videoRefs.current[playingIndex]?.pause();
      } catch (error) {
        console.error("Error pausing previous video:", error);
      }
    }
    
    // Play the new video
    try {
      video.play()
        .then(() => {
          setPlayingIndex(index);
        })
        .catch((error) => {
          console.error("Error playing video:", error);
          setPlayingIndex(null);
        });
    } catch (error) {
      console.error("Error playing video:", error);
    }
  };

  return (
    <div 
      className="py-16 md:py-20 px-4 md:px-6 w-full flex flex-col items-center" 
      style={{ backgroundColor }}
    >
      {/* Heading */}
      <div className="text-center mb-8 md:mb-10 w-full">
        <h2 className="text-[#505050] font-inter text-xl md:text-2xl font-semibold uppercase tracking-wide">{mainTitle}</h2>
        <div className="w-20 h-[2px] bg-[#505050] mx-auto mt-2"></div>
      </div>

      {/* Swiper Slider */}
      <div className="relative w-full max-w-[1400px]">
        {/* Mobile Navigation Arrows */}
        <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
          <button className="prev-button text-[#3A342B] p-2" aria-label="Previous slide">
            <HiArrowNarrowLeft size={32} />
          </button>
        </div>
        <div className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
          <button className="next-button text-[#3A342B] p-2" aria-label="Next slide">
            <HiArrowNarrowRight size={32} />
          </button>
        </div>

        {/* Gradient overlay for mobile */}
        {isMobile && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(270deg, rgba(239, 235, 231, 0) 0%, #EFEBE7 100%)" }}>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, rgba(239, 235, 231, 0) 0%, #EFEBE7 100%)" }}>
            </div>
          </>
        )}

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={isMobile ? 1.4 : 1.2}
          centeredSlides={isMobile}
          initialSlide={isMobile ? 1 : 0}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 16, centeredSlides: false },
            768: { slidesPerView: 3, spaceBetween: 16, centeredSlides: false },
            1024: { slidesPerView: 4, spaceBetween: 16, centeredSlides: false },
          }}
          navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
          className="pb-8 md:pb-10"
          onSlideChange={() => {
            // Pause any playing video when slides change
            if (playingIndex !== null && videoRefs.current[playingIndex]) {
              videoRefs.current[playingIndex]?.pause();
              setPlayingIndex(null);
            }
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className={`relative ${isMobile ? 'w-[260px]' : 'w-full max-w-[320px]'} h-[340px] md:h-[420px] rounded-lg overflow-hidden shadow-lg`}>
                {/* Video */}
                <video
                  ref={(el) => setVideoRef(el, index)}
                  src={video.videoSrc}
                  className="w-full h-full object-cover rounded-lg"
                  preload="metadata"
                  playsInline
                  onEnded={() => {
                    if (playingIndex === index) {
                      setPlayingIndex(null);
                    }
                  }}
                />

                {/* Play/Pause Button */}
                <button
                  className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full z-20"
                  onClick={() => togglePlay(index)}
                  aria-label={playingIndex === index ? "Pause video" : "Play video"}
                >
                  {playingIndex === index ? 
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Desktop Navigation Buttons */}
        <div className="hidden mt-16 mr-10 md:flex justify-end gap-6">
          <button 
            className="prev-button text-[#3A342B] text-4xl cursor-pointer"
            aria-label="Previous slide"
          >
            <HiArrowNarrowLeft />
          </button>
          <button 
            className="next-button text-[#3A342B] text-4xl cursor-pointer"
            aria-label="Next slide"
          >
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;