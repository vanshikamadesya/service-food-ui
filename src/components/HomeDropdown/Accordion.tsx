import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi2";
import { useState, useEffect, useRef } from "react";

interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-black">{title}</h2>
        <button onClick={onClick} className="ml-2">
          {isOpen ? (
            <HiOutlineChevronUp className="text-3xl text-[#86704D]" />
          ) : (
            <HiOutlineChevronDown className="text-3xl text-[#86704D]" />
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden mt-5 text-[#3A342B] text-base sm:text-lg transition-all duration-500 ease-in-out`}
        style={{ maxHeight }}
        ref={contentRef}
      >
        <div className={`transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[#3A342B] text-[16px]">{content}</p>
          <button className="mt-6 mb-5 px-9 py-3 md:mx-6 bg-[#86704D] text-white rounded-lg hover:bg-[#705C3E] text-sm sm:w-auto w-full">
            Learn More
          </button>
        </div>
      </div>
      <hr className={`border-t-4 border-[#86704D] w-full my-4 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-1/2'}`} />
    </div>
  );
};

export default Accordion;
