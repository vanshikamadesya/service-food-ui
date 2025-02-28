import { useState } from "react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi2";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Accordion Header */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-black">{title}</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="ml-2">
          {isOpen ? (
            <HiOutlineChevronUp className="text-3xl text-[#86704D]" />
          ) : (
            <HiOutlineChevronDown className="text-3xl text-[#86704D]" />
          )}
        </button>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="mt-5 text-[#3A342B] text-base sm:text-lg">
          <p>{content}</p>
          <button className="mt-6 mb-5 px-4 py-2 bg-[#86704D] text-white rounded-md hover:bg-[#705C3E]">
            Learn More
          </button>
        </div>
      )}

      <hr className="border-t-4 border-[#86704D] w-full my-4" />
    </div>
  );
};

export default Accordion;
