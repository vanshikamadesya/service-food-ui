import React from "react";
import contactHubImage from "../assets/images/contact-hub.png";

const ContentHub: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={contactHubImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col justify-center items-start h-full p-48 text-white max-w-4xl leading-relaxed">
        <h1 className="text-[55px] font-bold tracking-wide font-inter">
          Content Hub
        </h1>
        <p className="text-md  tracking-wide font-inter font-normal max-w-[470px] leading-snug [word-spacing:0.2rem]">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default ContentHub;
