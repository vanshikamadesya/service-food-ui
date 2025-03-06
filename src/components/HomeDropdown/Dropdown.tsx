import { useState } from "react";
import Accordion from "./Accordion";
import { AccordionItem } from "../../data/accordianData";

interface DropdownProps {
  data: AccordionItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-6 sm:px-8 font-inter">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-start space-y-8 sm:space-y-0 sm:space-x-4">
        <div className="hidden sm:block flex-shrink-0">
          <img
            src={activeIndex !== null ? data[activeIndex].image : data[2].image}
            alt="Image Description"
            className="w-[90%] sm:w-[490px] h-[520px] object-cover transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex flex-col justify-center items-start text-left w-full max-w-[480px] pr-2 sm:pr-4">
          <h3 className="text-lg sm:text-xl font-normal text-[#86704D] mt-4 mb-6">
            Welcome To Service Foods
          </h3>
          {data.map((item, index) => (
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
