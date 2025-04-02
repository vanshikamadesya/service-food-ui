import React from "react";

interface TitleSectionProps {
  title: string;
  showDivider?: boolean;
  titleAlignment?: "left" | "center" | "right";
  titlePosition?: "top" | "bottom";
  className?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  showDivider = true,
  titleAlignment = "center",
  titlePosition = "top",
  className = "",
}) => {
  // Determine position-specific classes
  const positionClass =
    titlePosition === "bottom" ? "mt-12 md:mt-8" : "mb-4 md:mb-5";

  return (
    <div
      className={`w-full ${positionClass} text-${titleAlignment} ${className}`}
    >
      <div className={`inline-block px-10 md:px-16 mb-3 md:mb-8`}>
      <h2 className={`text-2xl md:text-3xl font-bold md:mb-3  ${className}`}>
      {title}
        </h2>
        {showDivider && (
          <div className="w-36 md:w-32 h-0.5 mt-2 mx-auto" style={{background: 'currentColor'}} />
        )}
      </div>
    </div>
  );
};

export default TitleSection;
