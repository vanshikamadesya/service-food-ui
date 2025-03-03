import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Video from "../assets/images/more-video.mp4";

const videoData = [
  { videoSrc: Video, title: "LOREM IPSUM", description: "Lorem Ipsum is simply dummy text of the printing" },
  { videoSrc: Video, title: "LOREM IPSUM", description: "Lorem Ipsum is simply dummy text of the printing" },
  { videoSrc: Video, title: "LOREM IPSUM", description: "Lorem Ipsum is simply dummy text of the printing" },
  { videoSrc: Video, title: "LOREM IPSUM", description: "Lorem Ipsum is simply dummy text of the printing" },
  { videoSrc: Video, title: "LOREM IPSUM", description: "Lorem Ipsum is simply dummy text of the printing" },
  { videoSrc: Video, title: "LOREM IPSUM", description: "Lorem Ipsum is simply dummy text of the printing" },
];

const MoreVideos = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el;
  };

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];

    if (video) {
      if (video.paused) {
        video.play();
        setPlayingIndex(index);
      } else {
        video.pause();
        setPlayingIndex(null);
      }
    }
  };

  return (
    <div className="bg-[#EFEBE7] py-20 px-6 w-full flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-[#505050] text-2xl font-semibold">MORE VIDEOS</h2>
        <div className="w-16 h-[3px] bg-[#505050] md:mb-10 mx-auto mt-2"></div>
      </div>

      {/* Swiper Slider */}
      <div className="relative w-full max-w-[1400px]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 1.5, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          className="pb-10"
        >
          {videoData.map((video, index) => (
            <SwiperSlide key={index} className="flex justify-center md:mb-6">
              <div className="relative w-full max-w-[260px] h-[320px] sm:max-w-[280px] sm:h-[340px] md:max-w-[300px] md:h-[360px] lg:max-w-[320px] lg:h-[380px] rounded-lg overflow-hidden shadow-lg">
                {/* Video */}
                <video
                  ref={(el) => setVideoRef(el, index)}
                  src={video.videoSrc}
                  className="w-full h-full object-cover rounded-lg"
                />
                
                {/* Play/Pause Button */}
                <button
                  className="absolute top-3 left-3 bg-black/50 text-white p-2 rounded-full"
                  onClick={() => togglePlay(index)}
                >
                  {playingIndex === index ? <FaPause className="text-xs" /> : <FaPlay className="text-xs" />}
                </button>
                
                {/* Enhanced Darker Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 pointer-events-none"></div>
                
                {/* Text Overlay with enhanced visibility */}
                <div className="absolute bottom-0 left-0 right-0 py-6 px-4 text-white z-10">
                  <h3 className="text-lg font-semibold uppercase tracking-wider">{video.title}</h3>
                  <p className="text-sm mt-1">{video.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Icons (Hidden on Mobile) */}
        <div className="hidden md:flex justify-end mt-6 gap-6">
          <button className="prev-button text-[#505050] text-xl cursor-pointer">
            <HiArrowNarrowLeft size={28} />
          </button>
          <button className="next-button text-[#505050] text-xl cursor-pointer">
            <HiArrowNarrowRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreVideos;