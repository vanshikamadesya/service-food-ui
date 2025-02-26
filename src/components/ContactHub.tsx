import React from "react";
import contactHubImage from "../assets/images/contact-hub.png";

const ContentHub: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">
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
      <div className="relative flex flex-col justify-end md:justify-center items-start min-h-screen p-8 sm:p-10 md:p-52 mb-12 sm:mb-0  text-white max-w-4xl leading-relaxed  md:pb-7">
      <h1 className="text-4xl sm:text-5xl md:text-[55px] font-bold tracking-wide font-inter mb-6 md:mb-4">          Content Hub
        </h1>
        <p className="text-sm sm:text-base md:text-md tracking-wider font-inter font-normal max-w-full lg:max-w-[470px] leading-snug [word-spacing:0.2rem] mb-32 ">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default ContentHub;
