import React from "react";

// Button component integrated directly into the file
interface ButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  asChild?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  onClick,
  children,
}) => {
  const buttonClasses = `py-2 px-6 rounded-md font-medium ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export type TextAlignment = "left" | "center" | "right";
export type ButtonPosition = "left" | "center" | "right";
export type ElementOrder =
  | "title-content-button"
  | "title-button-content"
  | "content-title-button"
  | "content-button-title"
  | "button-title-content"
  | "button-content-title";

export interface BannerComponentProps {
  backgroundImage?: string;
  backgroundColor?: string;
  title: string;
  content: string;
  buttonText: string;
  buttonUrl?: string;
  onButtonClick?: () => void;
  height?: string;
  textAlignment?: TextAlignment;
  buttonPosition?: ButtonPosition;
  elementOrder?: ElementOrder;
  className?: string;
}

const BannerComponent: React.FC<BannerComponentProps> = ({
  backgroundImage,
  backgroundColor = "#000",
  title,
  content,
  buttonText,
  buttonUrl = "#",
  onButtonClick,
  height = "400px",
  textAlignment = "left",
  buttonPosition = "left",
  elementOrder = "title-content-button",
  className,
}) => {
  const handleButtonClick = (e: React.MouseEvent) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    }
  };

  // Define class strings directly without utility functions
  const textAlignmentClass = `text-${textAlignment}`;
  const buttonPositionClass = `flex ${
    buttonPosition === "left"
      ? "justify-start"
      : buttonPosition === "center"
      ? "justify-center"
      : "justify-end"
  }`;

  const containerClasses = className
    ? `relative overflow-hidden font-inter ${className}`
    : "relative overflow-hidden font-inter";

  // Function to render elements in the specified order
  const renderElements = () => {
    const elements = {
      title: (
        <h1
          key="title"
          className="text-4xl font-bold mb-4 text-white font-inter"
        >
          {title}
        </h1>
      ),
      content: (
        <p
          key="content"
          className="text-lg font-light max-w-auto text-white mb-8 font-inter"
        >
          {content}
        </p>
      ),
      button: (
        <div key="button" className={buttonPositionClass}>
          <Button
            className="bg-white text-black hover:bg-gray-100 border-none font-inter"
            onClick={handleButtonClick}
            asChild={!!buttonUrl}
          >
            {buttonUrl ? <a href={buttonUrl}>{buttonText}</a> : buttonText}
          </Button>
        </div>
      ),
    };

    const orderMap: Record<ElementOrder, Array<keyof typeof elements>> = {
      "title-content-button": ["title", "content", "button"],
      "title-button-content": ["title", "button", "content"],
      "content-title-button": ["content", "title", "button"],
      "content-button-title": ["content", "button", "title"],
      "button-title-content": ["button", "title", "content"],
      "button-content-title": ["button", "content", "title"],
    };

    return orderMap[elementOrder].map((elementKey) => elements[elementKey]);
  };

  return (
    <div className={containerClasses} style={{ height }}>
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundColor: backgroundImage ? undefined : backgroundColor,
        }}
      />

      {/* Content Container - positioned to match the layout in the image */}
      <div className="relative z-20 h-full px-8 md:px-12 lg:px-16 flex flex-col justify-center font-inter">
        <div className={`max-w-md ${textAlignmentClass}`}>
          {renderElements()}
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
