// src/components/Hero.tsx
import React, { useRef, useState } from "react";
import { Instagram, Facebook, Linkedin, Play, Pause } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  className?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  socialLinks,
  className = "",
  children,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Toggle Play/Pause
  const handleVideoToggle = () => {
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
    <section className={`relative w-full ${backgroundVideo ? "h-[70vh]" : "h-screen"} flex items-center justify-center font-inter`}>
      {/* Background Video */}
      {backgroundVideo ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        // Background Image
        backgroundImage && (
          <div
            className="absolute inset-0 w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )
      )}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10 " /> */}

      {/* Content */}
      <div className="relative text-center text-white p-8 z-10 md:mt-48">
      <h1 className={`text-4xl md:text-7xl font-bold mb-4 ${className}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg lg:text-2xl mb-6  ${className}`}>{subtitle}</p>
        )}

        {/* Render Children Here */}
        {children}

        {/* Social Media Icons */}
        <div className={`flex gap-6 mt-44 justify-end  ${className}`}>
          {socialLinks?.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <Instagram size={28} />
            </a>
          )}
          {socialLinks?.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <Facebook size={28} />
            </a>
          )}
          {socialLinks?.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <Linkedin size={28} />
            </a>
          )}
        </div>
      </div>

      {/* Play/Pause Button - Only Visible if Video Exists */}
      {backgroundVideo && (
        <button
          onClick={handleVideoToggle}
          className={`absolute bottom-8 right-8 bg-white bg-opacity-80 p-3 rounded-full shadow-md hover:bg-opacity-100 transition ${className}`}
        >
          {isPlaying ? (
            <Pause size={24} className="text-black" />
          ) : (
            <Play size={24} className="text-black" />
          )}
        </button>
      )}
    </section>
  );
};

export default Hero;
