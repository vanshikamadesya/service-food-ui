import React, { useRef, useState, useEffect } from "react";
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
  textAlignment?: "left" | "center" | "right" | "responsive";
  titleWidthPercent?: number; 
  subtitleWidthPercent?: number;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  socialLinks,
  className = "",
  children,
  textAlignment = "responsive",
  titleWidthPercent = 80,
  subtitleWidthPercent = 60,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  // Set initial window width on component mount
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    // Update window width when it changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate dynamic widths based on window size
  const getTitleWidth = () => {
    // Only apply percentage width for medium screens and above (768px+)
    if (windowWidth >= 768) {
      return { maxWidth: `${titleWidthPercent}%` };
    }
    return {}; // Full width on mobile
  };

  const getSubtitleWidth = () => {
    // Only apply percentage width for medium screens and above (768px+)
    if (windowWidth >= 768) {
      return { maxWidth: `${subtitleWidthPercent}%` };
    }
    return {}; // Full width on mobile
  };

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

  // Determine the text alignment classes based on the textAlignment prop
  const getTextAlignmentClasses = () => {
    switch (textAlignment) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "responsive":
      default:
        return "text-left"; // Changed to text-left for all screen sizes
    }
  };

  return (
    <section
      className={`relative w-full ${
        backgroundVideo ? "h-[70vh]" : "h-screen"
      } flex items-end md:items-center justify-center font-inter`}
    >
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
      <div className="absolute inset-0 bg-black bg-opacity-30 " />

      {/* Content */}
      <div
        className={`relative ${getTextAlignmentClasses()} text-white px-14 md:p-8 z-10 mb-10 md:mb-24  ${
          textAlignment === "center" ? "md:mt-80" : "md:mt-80"
        } w-full ${textAlignment === "center" ? "" : "md:pr-16"}`}
      >
        {" "}
        <div
          className={`w-full ${
            textAlignment === "center"
              ? "flex flex-col items-center px-4 md:px-0"
              : "md:pl-36"
          }`}
        >
          <h1
            className={`text-5xl tracking-wide md:tracking-wide md:text-7xl font-semibold mb-7 ${
              textAlignment === "center" ? "pl-1 md:pl-0" : ""
            } ${className}`}
            style={getTitleWidth()}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`text-lg lg:text-[22px] mb-6 tracking-wide ${className}`}
              style={getSubtitleWidth()}
            >
              {subtitle}
            </p>
          )}

          {/* Render Children Here */}
          {children}
        </div>
        {/* Social Media Icons */}
        <div
          className={`flex gap-2 mt-12 md:mt-36 md:mr-20 ${
            textAlignment === "center" ? "justify-end" : "justify-start"
          } ${className}`}
        >
          {socialLinks?.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <Instagram size={20} />
            </a>
          )}
          {socialLinks?.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <Facebook size={20} />
            </a>
          )}
          {socialLinks?.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <Linkedin size={20} />
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
