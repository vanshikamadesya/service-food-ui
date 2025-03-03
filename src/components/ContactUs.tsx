import { useState } from "react";
import Hero from "./Hero";
import Button from "./Button";
import Dropdown from "./Dropdown";
import bgImg from "../assets/images/contact-us/background.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Contactus = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    console.log("Selected:", option);
  };

  return (
    <>
      <div className="relative min-h-screen"> 
        <Hero
          title="How can we help you?"
          backgroundImage={bgImg}
          className="md:text-left md:mr-0 md:px-20 md:mb-[90px]"
        >
          <div className="flex flex-col md:flex-row md:ml-36  space-y-2 md:space-y-3 md:space-x-6 md:mt-[-20px]">
            <Dropdown
              label="Select an Option"
              options={["Option 1", "Option 2", "Option 3"]}
              onSelect={handleSelect}
              className="mt-4 "
            />
            <Button
              text="Submit"
              bgColor="bg-white"
              textColor="text-black"
              className="md:py-0 md:px-16 md:text-[18px]"
            />
          </div>
        </Hero>
        <div className="absolute bottom-4 right-4 flex flex-row space-x-3">
          <Button
            text="Google Play"
            icon={<FaGooglePlay color="#34A853" />}
            bgColor="bg-black"
            textColor="text-white"
            className="px-4 md:px-10 text-sm md:text-[18px] py-2 md:py-3"
          />
          <Button
            text="App Store"
            icon={<FaApple />}
            bgColor="bg-black"
            textColor="text-white"
            className="px-4 md:px-14 text-sm md:text-[18px] py-2 md:py-3"
          />
        </div>
      </div>
    </>
  );
};

export default Contactus;
