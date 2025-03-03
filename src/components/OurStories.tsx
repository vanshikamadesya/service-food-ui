import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import meatImage from "../assets/images/OurStory-1.png";
import fishImage from "../assets/images/OurStory-2.png";
import boatImage from "../assets/images/OurStory-3.png";
import fruitImage from "../assets/images/OurStory-4.png";

// Sample stories data
const stories = [
  {
    id: 1,
    image: meatImage,
    title: "Lorem Ipsum Lorem Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing",
    author: "By Lorem Ipsum",
    icon: "🔊",
  },
  {
    id: 2,
    image: fishImage,
    title: "Lorem Ipsum Lorem Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing",
    author: "By Lorem Ipsum",
    icon: "⏸",
  },
  {
    id: 3,
    image: boatImage,
    title: "Lorem Ipsum Lorem Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing",
    author: "By Lorem Ipsum",
    icon: "🔊",
  },
  {
    id: 4,
    image: fruitImage,
    title: "Lorem Ipsum Lorem Lorem Ipsum",
    description: "Lorem Ipsum is simply dummy text of the printing",
    author: "By Lorem Ipsum",
    icon: "🔊",
  },
];

const OurStories: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F5F2] py-12 px-6 relative">
      {/* Section Title */}
      <h2 className="text-center text-2xl font-bold text-gray-800 tracking-wide">
        OUR STORIES
      </h2>
      <div className="w-20 h-[2px] bg-gray-700 mx-auto mt-2"></div>

      {/* Swiper Carousel */}
      <div className="mt-10 max-w-7xl mx-auto relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Navigation]}
          className="w-full"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
                {/* Story Image */}
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-[350px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Play/Pause Icon */}
                <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white p-2 rounded-full text-xs">
                  {story.icon}
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{story.title}</h3>
                  <p className="text-sm">{story.description}</p>
                  <p className="text-xs mt-1 opacity-80">{story.author}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Controls */}
        <div className="absolute bottom-6 right-6 flex gap-4">
          <button className="custom-swiper-prev text-gray-800 hover:text-black text-2xl">
            ←
          </button>
          <button className="custom-swiper-next text-gray-800 hover:text-black text-2xl">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStories;
