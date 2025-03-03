import thirdImage from "../../assets/images/section_3.png";
import Accordion from "../Accordion";

const Dropdown = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-8">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-start space-y-8 sm:space-y-0 sm:space-x-1">
        {/* Left Side - Image */}
        <div className=" hidden sm:block flex-shrink-0">
          <img
            src={thirdImage}
            alt="Image Description"
            className="w-[90%] sm:w-[440px] h-[500px] object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center items-start text-left w-full max-w-[500px] pr-4 sm:pr-6">

          <h3 className="text-lg sm:text-xl font-normal text-gray-700 mt-4 mb-6">
            Welcome To Service Foods
          </h3>

          {/* Accordion Sections */}
          <Accordion
            title="Delivering from Kaitaia to Bluff"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s."
          />

          <Accordion
            title="From Abalone to Zucchine"
            content="We provide a wide range of fresh and high-quality seafood and vegetables to meet your needs."
          />

          <Accordion
            title="We’re here to make an impact"
            content="Our mission is to support sustainable sourcing and ensure the best quality for our customers."
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
