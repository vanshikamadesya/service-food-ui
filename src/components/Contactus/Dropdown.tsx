import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full md:w-[480px] px-4 md:px-7 py-2 md:py-3 mt-2 md:mt-5 text-white bg-transparent/10 border border-white rounded-lg focus:outline-none text-sm md:text-lg"
      >
        {selected || label}
        <ChevronDown size={20} className="ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-transparent/0 border border-white rounded-lg shadow-lg backdrop-blur-md text-sm md:text-lg z-50">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 md:py-3 cursor-pointer text-white bg-transparent hover:bg-gray-200 hover:text-black transition"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;