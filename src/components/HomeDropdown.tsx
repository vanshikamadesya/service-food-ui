import { useState } from "react";
import meatImage from "../assets/images/Homes/met.png";
import secondImage from "../assets/images/Homes/banner.png";
import thirdImage from "../assets/images/Homes/section_3.png";
import Accordion from "./Accordion";

const Dropdown = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const accordionData = [
    {
      title: "Delivering from Kaitaia to Bluff",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
      image: meatImage,
    },
    {
      title: "From Abalone to Zucchine",
      content: "We provide a wide range of fresh and high-quality seafood and vegetables to meet your needs.",
      image: secondImage,
    },
    {
      title: "We’re here to make an impact",
      content: "Our mission is to support sustainable sourcing and ensure the best quality for our customers.",
      image: thirdImage,
    },
  ];

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-6 sm:px-8 font-inter">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-start space-y-8 sm:space-y-0 sm:space-x-4">
        {/* Left Side - Dynamic Image with transition */}
        <div className="hidden sm:block flex-shrink-0">
          <img
            src={activeIndex !== null ? accordionData[activeIndex].image : thirdImage}
            alt="Image Description"
            className="w-[90%] sm:w-[490px] h-[520px] object-cover transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Right Side - Accordion */}
        <div className="flex flex-col justify-center items-start text-left w-full max-w-[480px] pr-2 sm:pr-4">
          <h3 className="text-lg sm:text-xl font-normal text-[#86704D] mt-4 mb-6">
            Welcome To Service Foods
          </h3>

          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              isOpen={activeIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
