import React from "react";
import Hero from "./Hero";
import contactHubImage from "../assets/images/contact-hub.png";

interface ContentHubProps {
  title: string;
  subtitle: string;
}

const ContentHub: React.FC<ContentHubProps> = ({ title, subtitle }) => {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      backgroundImage={contactHubImage}
      textAlignment="left"
      subtitleWidthPercent={47}
    />
  );
};

export default ContentHub;
