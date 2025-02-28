import React from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor = "bg-white",
  textColor = "text-black",
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`px-6 sm:px-10 py-2 rounded-lg shadow-lg font-semibold text-sm sm:text-base ${bgColor} ${textColor} ${className} hover:opacity-80 transition`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
