import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Button from "./Button";

const ServiceFood = () => {
  const [selectedBusinessOption, setSelectedBusinessOption] = useState("");
  const [selectedRegionOption, setSelectedRegionOption] = useState("");
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const businessDropdownRef = useRef<HTMLDivElement>(null);
  const regionDropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBusinessSelect = (value: string) => {
    setSelectedBusinessOption(value);
    setIsBusinessDropdownOpen(false);
    setIsContentVisible(true);
  };

  const handleRegionSelect = (value: string) => {
    setSelectedRegionOption(value);
    setIsRegionDropdownOpen(false);
    setIsContentVisible(true);
  };

  const toggleBusinessDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBusinessDropdownOpen(prev => !prev);
    setIsRegionDropdownOpen(false);
    setIsContentVisible(true);
  };

  const toggleRegionDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRegionDropdownOpen(prev => !prev);
    setIsBusinessDropdownOpen(false);
    setIsContentVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isBusinessDropdownClicked = businessDropdownRef.current?.contains(e.target as Node);
      const isRegionDropdownClicked = regionDropdownRef.current?.contains(e.target as Node);
      
      if (!isBusinessDropdownClicked && !isRegionDropdownClicked) {
        setIsBusinessDropdownOpen(false);
        setIsRegionDropdownOpen(false);
        
        setIsContentVisible(prev => !prev);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className="bg-[#efebe7] py-20 px-6 sm:px-8 relative font-inter">
        <div className="max-w-screen-lg mx-auto text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  sm:mb-14 font-sans">
            Is Service Foods For Me?
          </h2>

          {/* Input Fields with Dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 justify-center mb-9 ">
            {/* Business Type Dropdown */}
            <div className="flex flex-col text-left max-w-[450px] w-full mx-auto">
              <label
                htmlFor="businessType"
                className="text-lg sm:text-xl mb-2 sm:mb-3 font-sans font-medium text-[#666666]"
              >
                My business is:
              </label>

              {/* Dropdown */}
              <div className="relative" ref={businessDropdownRef}>
                <div
                  className={`flex items-center justify-between p-3 sm:pl-4 border-2 border-gray-600 rounded-xl focus:outline-none bg-white text-gray-500 w-full mt-2 cursor-pointer transition-all duration-300 ease-in-out ${
                    isBusinessDropdownOpen ? "border-b-0 rounded-b-none" : ""
                  }`}
                  onClick={toggleBusinessDropdown}
                >
                  <span className="pl-2 text-lg sm:text-xl">{selectedBusinessOption || "(Select an option)"}</span>
                  <ChevronDown className="w-7 h-7 text-gray-500" />
                </div>

                {/* Dropdown content */}
                {isBusinessDropdownOpen && (
                  <div className="bg-white shadow-md w-full rounded-b-xl border-2 border-t-0 border-gray-600 z-10 absolute">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBusinessSelect("Restaurant");
                      }}
                      className="p-3 pl-5 hover:bg-gray-100 cursor-pointer text-lg sm:text-xl"
                    >
                      Restaurant
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBusinessSelect("Cafe");
                      }}
                      className="p-3 pl-5 hover:bg-gray-100 cursor-pointer text-lg sm:text-xl"
                    >
                      Cafe
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBusinessSelect("Bar");
                      }}
                      className="p-3 pl-5 hover:bg-gray-100 cursor-pointer text-lg sm:text-xl"
                    >
                      Bar
                    </div>

                  </div>
                )}
              </div>
            </div>

            {/* Region Dropdown */}
            <div className="flex flex-col text-left max-w-[450px] w-full mx-auto">
              <label
                htmlFor="region"
                className="text-lg sm:text-xl mb-2 sm:mb-3 font-sans font-medium text-[#666666]"
              >
                My region is:
              </label>

              {/* Dropdown */}
              <div className="relative" ref={regionDropdownRef}>
                <div
                  className={`flex items-center justify-between p-3 sm:pl-4 border-2 border-gray-600 rounded-xl focus:outline-none bg-white text-gray-500 w-full mt-2 cursor-pointer transition-all duration-300 ease-in-out ${
                    isRegionDropdownOpen ? "border-b-0 rounded-b-none" : ""
                  }`}
                  onClick={toggleRegionDropdown}
                >
                  <span className="pl-2 text-lg sm:text-xl">{selectedRegionOption || "(Select an option)"}</span>
                  <ChevronDown className="w-7 h-7 text-gray-500" />
                </div>

                {/* Dropdown content */}
                {isRegionDropdownOpen && (
                  <div className="bg-white shadow-md w-full rounded-b-xl border-2 border-t-0 border-gray-600 z-10 absolute">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRegionSelect("Northland");
                      }}
                      className="p-3 pl-5 hover:bg-gray-100 cursor-pointer text-lg sm:text-xl"
                    >
                      Northland
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRegionSelect("Auckland");
                      }}
                      className="p-3 pl-5 hover:bg-gray-100 cursor-pointer text-lg sm:text-xl"
                    >
                      Auckland
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRegionSelect("Waikato");
                      }}
                      className="p-3 pl-5 hover:bg-gray-100 cursor-pointer text-lg sm:text-xl"
                    >
                      Waikato
                    </div>

                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Lorem Ipsum Text (conditionally rendered) */}
          {isContentVisible && (
            <div className="max-w-[900px] mx-auto mt-16 text-center px-4 sm:px-0">
              <p className="mt-12 text-[28px] font-bold text-gray-800 font-sans px-9">
                We serve 500 Cafes in the Waikato Region <br /> That's 10,000 litres of milk a day, or 100,000 Flat Whites!
              </p>
            </div>
          )}

          {/* Café Name and Button */}
          {isContentVisible && (
            <div className="mt-14 mb-12 text-lg sm:text-xl text-gray-400 text-center sm:text-right ml-[-40px]">
              <Button
                text="Know more"
                bgColor="bg-[#86704D]"
                textColor="text-white"
                className="md:ml-[430px] md:px-20 md:py-3"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceFood;
