import { useState, useEffect } from 'react';
import bgImg from "../assets/images/contact-us/background.png";
import android from "../assets/images/contact-us/Android 1.png";
import ios from "../assets/images/contact-us/Ios 1.png";

const HeroSection = () => {
  const [selectedOption, setSelectedOption] = useState("I am a new customer and want to create an account");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const options = [
    "I am a new customer and want to create an account",
    "I am an existing customer and need support",
    "I have a question about your products",
  ];
  
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };
  
  return (
    <div className="relative w-full bg-cover bg-center text-white" style={{ 
      backgroundImage: `url(${bgImg})`,
      height: "87vh"
    }}>
      {/* Main content container with fixed height */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-12 md:px-4">
        {/* Content wrapper with fixed height to prevent shifting */}
        <div className="flex flex-col items-center w-full max-w-xl" style={{ minHeight: "320px" }}>
          {/* Title with fixed position */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">
            How Can We Help You?
          </h1>
          
          {/* Form container with extra padding to prevent edge touching */}
          <div className="relative w-full px-2 sm:px-4 md:px-0">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative w-full">
                <div
                  className="flex items-center justify-between w-full p-3 border border-white rounded-lg cursor-pointer bg-transparent transition-colors duration-300 hover:bg-white hover:bg-opacity-10"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="truncate">{selectedOption}</span>
                  <svg className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
                
                {/* Dropdown with extra spacing to prevent edge touching */}
                <div 
                  className={`absolute top-full left-0 right-0 mt-1 bg-transparent rounded-lg shadow-lg z-20 border border-white overflow-hidden transition-all duration-300 ${
                    isDropdownOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 border-none'
                  }`}
                >
                  {options.map(option => (
                    <div 
                      key={option} 
                      className="p-3 border-b border-white hover:bg-white hover:bg-opacity-20 cursor-pointer transition-all duration-300"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Modified button container with text-left on mobile */}
              <div className={`w-full md:w-auto text-left md:text-center ${(!isMobile || !isDropdownOpen) ? 'block' : 'hidden'}`}>
                <button
                  className="bg-white text-gray-800 font-semibold rounded-lg hover:opacity-70 transition-all duration-300 transform hover:scale-105 
                    py-2 md:py-3 px-8 md:px-12 text-sm md:text-base"
                  onClick={() => console.log("Form submitted with option:", selectedOption)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 px-10 flex justify-end w-full gap-4">
        <a href="#"><img src={android} alt="Download App" className="h-10 transition-transform duration-300 hover:scale-110" /></a>
        <a href="#"><img src={ios} alt="Download App" className="h-10 transition-transform duration-300 hover:scale-110" /></a>
      </div>
    </div>
  );
};

export default HeroSection;