import React from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor = "bg-white",
  textColor = "text-black",
  icon,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`px-6 sm:px-10 py-2 rounded-lg shadow-lg font-semibold flex justify-center items-center text-sm sm:text-base ${bgColor} ${textColor} ${className} hover:opacity-80 transition`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
