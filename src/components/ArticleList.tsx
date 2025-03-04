import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

interface ArticleItem {
  mediaSrc: string;
  isVideo?: boolean; // Optional flag for video
  title: string;
  description: string;
}

interface ArticleListProps {
  articles: ArticleItem[];
  mainTitle?: string;
  backgroundColor?: string;
}

const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  mainTitle = "Articles",
  backgroundColor = "#EFEBE7",
}) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  // Function to set video reference dynamically
  const setVideoRef = (el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el;
  };

  // Play/Pause Video
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
    <div className="py-16 px-6 w-full flex flex-col items-center" style={{ backgroundColor }}>
      {/* Section Title */}
      <div className="text-center mb-10 py-3">
        <h2 className="text-[#3A342B] text-2xl sm:text-3xl font-bold uppercase ">{mainTitle}</h2>
        <div className="w-16 h-[3px] bg-[#3A342B] mx-auto mt-2"></div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 max-w-6xl mx-auto">
        {articles.map((article, index) => (
          <div key={index} className="flex flex-col">
            {/* Media (Image or Video) */}
            <div className="relative w-full h-[180px] sm:h-[320px] rounded-lg overflow-hidden shadow-lg">
              {article.isVideo ? (
                <video
                  ref={(el) => setVideoRef(el, index)}
                  className="w-full h-full object-cover rounded-lg"
                >
                  <source src={article.mediaSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={article.mediaSrc}
                  alt={article.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}

              {/* Play/Pause Button for Video */}
              {article.isVideo && (
                <button
                  className="absolute top-3 left-3 bg-black/50 text-white p-2 rounded-full"
                  onClick={() => togglePlay(index)}
                >
                  {playingIndex === index ? <FaPause size={14} /> : <FaPlay size={14} />}
                </button>
              )}
            </div>

            {/* Title & Description */}
            <div className="mt-2 sm:mt-4 tracking-wide">
              <h3 className="text-[#332D25] text-sm sm:text-lg font-bold uppercase">
                {article.title}
              </h3>
              <p className="text-[#332D25] text-xs sm:text-sm mt-1">{article.description}</p>
            </div>

            {/* Read More Button */}
            <div className="mt-2 sm:mt-4">
              <button className="bg-[#86704D] text-white py-2 px-4 sm:py-2 sm:px-6 rounded-md hover:bg-[#6d5a3a] transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
