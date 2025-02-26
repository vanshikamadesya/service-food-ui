import React, { useState, useEffect } from 'react';
import bgImg from "../assets/images/contact-us/background.png";
import android from "../assets/images/contact-us/Android 1.png";
import ios from "../assets/images/contact-us/Ios 1.png";

const HeroSection = () => {
  const [selectedOption, setSelectedOption] = useState("I am a new customer and want to create an account");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const options = [
    "I am a new customer and want to create an account",
    "I am an existing customer and need support",
    "I have a question about your products",
    // You can add more options here and the container will grow
  ];

  return (
    <div className={`relative w-full ${isMobile ? 'min-h-screen' : 'h-[82vh]'}`}>

      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-black/40" style={{ backgroundImage: `url(${bgImg})` }}></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-10">
        {/* Heading - Fixed position in mobile */}
        <h1 className={`text-white text-5xl md:text-6xl font-bold mb-12 text-center ${isMobile ? 'mt-12' : ''}`}>
          {isMobile ? (
            <>
              <span>How Can we</span><br />
              <span>Help You?</span>
            </>
          ) : (
            "How Can We Help You?"
          )}
        </h1>

        {/* Dropdown and Submit Button */}
        {isMobile ? (
          // Mobile Layout
          <div className="relative w-full max-w-md flex flex-col">
  {/* Dropdown Menu */}
  <div className="relative w-full mb-4 z-30">
    <div className="flex items-center justify-between w-full p-3 border border-white rounded-lg cursor-pointer bg-transparent text-white" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <span>{selectedOption}</span>
      <svg className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
    {/* Dropdown Options - Added max-height with overflow */}
    {isDropdownOpen && (
      <div className="absolute top-full left-0 right-0 mt-1 bg-transparent rounded-lg shadow-lg z-40 border border-white max-h-60 overflow-y-auto">
        {options.map(option => (
          <div key={option} className="p-3 border-b border-white last:border-b-0 hover:opacity-70 cursor-pointer text-white" onClick={() => { setSelectedOption(option); setIsDropdownOpen(false); }}>
            {option}
          </div>
        ))}
      </div>
    )}
  </div>

  {/* Submit Button - Hidden when dropdown is open on mobile */}
  {!isDropdownOpen && (
    <button className="bg-white text-gray-800 font-semibold py-3 px-12 rounded-lg hover:opacity-70 transition duration-200 w-32 z-20" onClick={() => console.log("Form submitted with option:", selectedOption)}>
      Submit
    </button>
  )}

  {/* App Download Links for Mobile - Fixed position at bottom */}
{/* App Download Links for Mobile - Properly positioned at bottom */}
{/* App Download Links for Mobile - Stick to bottom of the section */}
<div className="absolute bottom-8 left-0 px-10 flex justify-end w-full gap-4">
            <a href="#"><img src={android} alt="Download App" className="h-10" /></a>
            <a href="#"><img src={ios} alt="Download App" className="h-10" /></a>
          </div>

</div>

        ) : (
          // Desktop Layout (unchanged)
          <div className="w-full max-w-xl flex flex-col md:flex-row gap-4">
            {/* Dropdown Menu */}
            <div className="relative w-full">
              <div className="flex items-center justify-between w-full p-3 border border-white rounded-lg cursor-pointer bg-transparent text-white" 
                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>{selectedOption}</span>
                <svg className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {/* Dropdown Options */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-transparent rounded-lg shadow-lg z-20 border border-white">
                  {options.map(option => (
                    <div key={option} className="p-3 border border-white hover:opacity-70 cursor-pointer text-white" 
                         onClick={() => { setSelectedOption(option); setIsDropdownOpen(false); }}>
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button - Always visible on desktop */}
            <button 
              className="bg-white text-gray-800 font-semibold py-3 px-12 rounded-lg hover:opacity-70 transition duration-200" 
              onClick={() => console.log("Form submitted with option:", selectedOption)}>
              Submit
            </button>
          </div>
        )}

        {/* App Download Links for Desktop */}
        {!isMobile && (
          <div className="absolute bottom-8 left-0 px-10 flex justify-end w-full gap-4">
            <a href="#"><img src={android} alt="Download App" className="h-10" /></a>
            <a href="#"><img src={ios} alt="Download App" className="h-10" /></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
