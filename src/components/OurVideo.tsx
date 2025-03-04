import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import VideoCard from "./VideoCard"; // Ensure VideoCard is imported
import video from "../assets/images/video.mp4";

const videos = [
  {
    src: video,
    title: "Lorem Lpsum Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec vitae viverra est varius suspendisse suscipit nam. Et erat in accumsan nam leo facilisi congue. Nisl ultricies.",
  },
  {
    src: video,
    title: "Lorem Lpsum Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec vitae viverra est varius suspendisse suscipit nam. Et erat in accumsan nam leo facilisi congue. Nisl ultricies.",
  },
  {
    src: video,
    title: "Lorem Lpsum Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec vitae viverra est varius suspendisse suscipit nam. Et erat in accumsan nam leo facilisi congue. Nisl ultricies.",
  },
  {
    src: video,
    title: "Lorem Lpsum Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec vitae viverra est varius suspendisse suscipit nam. Et erat in accumsan nam leo facilisi congue. Nisl ultricies.",
  },
  {
    src: video,
    title: "Lorem Lpsum Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec vitae viverra est varius suspendisse suscipit nam. Et erat in accumsan nam leo facilisi congue. Nisl ultricies.",
  },
  {
    src: video,
    title: "Lorem Lpsum Lorem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nec vitae viverra est varius suspendisse suscipit nam. Et erat in accumsan nam leo facilisi congue. Nisl ultricies.",
  },
];

const OurVideos = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlay = (index: number) => {
    setPlayingIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white w-full h-screen py-12 text-justify relative">
      <div className="mx-auto px-8 md:px-12 lg:px-16">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-center text-[#3A342B]  uppercase tracking-wide">
          Our Videos
        </h2>
        <div className="border-[2px] border-[#3A342B] w-20 mx-auto mb-28"></div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={50} // Adjusted for better spacing
          slidesPerView={1}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          breakpoints={{
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.2 },
          }}
          className="w-full"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <VideoCard
                videoSrc={video.src}
                title={video.title}
                description={video.description}
                isPlaying={playingIndex === index}
                onTogglePlay={() => togglePlay(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <div className="absolute mr-32 py-28 right-10 flex gap-6">
        <button className="prev-btn  p-2 ">
          <HiArrowNarrowLeft className="w-14 h-14 text-[#3A342B] " />
        </button>
        <button className="next-btn   ">
          <HiArrowNarrowRight className="w-14 h-14 text-[#3A342B] " />
        </button>
      </div>
    </section>
  );
};

export default OurVideos;
