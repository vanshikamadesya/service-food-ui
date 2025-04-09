import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import videos from "../../data/ourVideoData";
import VideoCard from "./VideoCards";
import TitleSection from "../TitleSection";
import SwiperNavigation from "../SwiperNavigation";

interface VideoSectionProps {
  mainTitle: string;
  showDivider?: boolean;
  titleAlignment?: "left" | "center" | "right";
  titlePosition?: "top" | "bottom";
  arrowAlignment?: "left" | "center" | "right";
  arrowPosition?: "top" | "bottom";
}

const VideoSection = ({
  mainTitle,
  showDivider = true,
  titleAlignment = "center",
  titlePosition = "top",
  arrowAlignment = "right",
  arrowPosition = "top",
}: VideoSectionProps) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlay = (index: number) => {
    setPlayingIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white w-full min-h-screen py-12 text-[#3A342B] relative md:pl-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Title Section - Rendered conditionally based on position */}
        {titlePosition === "top" && (
          <TitleSection
            title={mainTitle}
            showDivider={showDivider}
            titleAlignment={titleAlignment}
            titlePosition={titlePosition}
            className="text-[#3A342B] md:mt-4"
          />
        )}

        {/* Navigation Arrows - Rendered conditionally based on position */}
        {arrowPosition === "top" && (
          <div className="relative mb-6">
            <SwiperNavigation
              arrowAlignment={arrowAlignment}
              arrowPosition={arrowPosition}
              className="text-[#3A342B]"
            />
          </div>
        )}
      </div>

      {/* Swiper Section - Full width */}
      <div className="relative">
        <div className="px-0 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            className="w-full"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index} className="py-4">
                <VideoCard
                  videoSrc={video.src}
                  title={video.title}
                  description={video.description}
                  isPlaying={playingIndex === index}
                  onTogglePlay={() => togglePlay(index)}
                  buttonPosition={{ horizontal: "left", vertical: "top" }}
                  textPosition={{ horizontal: "left", vertical: "bottom" }}
                  textOrder={["title", "description"]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Title Section - When positioned at bottom */}
        {titlePosition === "bottom" && (
          <TitleSection
            title={mainTitle}
            showDivider={showDivider}
            titleAlignment={titleAlignment}
            titlePosition={titlePosition}
            className="text-[#3A342B] mt-10"
          />
        )}

        {/* Navigation Arrows - When positioned at bottom */}
        {arrowPosition === "bottom" && (
          <div className="relative mt-6">
            <SwiperNavigation
              arrowAlignment={arrowAlignment}
              arrowPosition={arrowPosition}
              className="text-[#3A342B]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;