import React from "react";
import contactHubImage from "../assets/images/contact-hub.png";
import Hero from "./Hero";

const ContentHub: React.FC = () => {
  return (
    <Hero
      title="Content Hub"
      subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      backgroundImage={contactHubImage}
      className="md:text-left md:mr-108 md:px-44  "
   />
  );
};

export default ContentHub;
