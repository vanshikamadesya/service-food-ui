import { useState } from "react";
import Hero from "../Hero";
import Dropdown from "./Dropdown"; 
import StoreButtons from "./StoreButton"; 
import bgImg from "../../assets/images/contact-us/background.png";
import Button from "../Button";

// Define interface for dropdown options
interface DropdownProps {
  label: string;
  options: string[];
}

interface ContactusProps {
  title: string; 
}

const dropdownData: DropdownProps = {
  label: "Select an Option",
  options: ["Option 1", "Option 2", "Option 3"],
};

const Contactus: React.FC<ContactusProps> = ({ title }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected:", option);
  };

  return (
    <div className="relative min-h-screen">
      <Hero title={title} backgroundImage={bgImg}  textAlignment="center">
        <div className="md:flex md:flex-row md:items-center md:justify-center md:space-x-5 md:w-[500px] md:px-0
                        flex flex-col items-center justify-start space-y-3 w-full px-6 max-md:min-w-[400px] max-md:translate-y-[-60px] max-md:mt-[50px]">
          <Dropdown
            label={dropdownData.label}
            options={dropdownData.options}
            onSelect={handleSelect}
            className="w-full md:w-auto mb-2"
          />
          <Button
            text="Submit"
            bgColor="bg-white"
            textColor="text-black"
            className="px-4 md:px-20 text-sm md:text-[18px] py-2 md:py-4 md:mt-4 w-full md:w-auto"
          />
        </div>
      </Hero>

      <StoreButtons />
    </div>
  );
};

export default Contactus;
