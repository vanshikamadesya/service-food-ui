import Articles from "../components/Article";
import ContentHub from "../components/ContentHub";
import OurVideos from "../components/OurVideo";
import { OurStories } from "../components/VideoCarousel";
import bgImg from "../assets/images/bannerContent.png";
// import VideoSection from "../components/VideoSection"
import BannerComponent from "../components/BannerComponent";
import { useState } from "react";

const ContentHubPage = () => {
  const [textAlignment] = useState<"left" | "center" | "right">("left");
  const [buttonPosition] = useState<"left" | "center" | "right">("left");
  const [elementOrder] = useState<string>("title-content-button");

  // The image from the uploaded file

  return (
    <div>
      <ContentHub
        title="Content Hub"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <OurStories />
      <OurVideos />
      <BannerComponent
        backgroundImage={bgImg}
        title="Lorem Ipsum Dolor Sit Dolor Sit Siquamemt"
        content="Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        buttonText="Learn More"
        textAlignment={textAlignment}
        buttonPosition={buttonPosition}
        elementOrder={elementOrder as any}
        height="500px"
      />
      <Articles />
    </div>
  );
};

export default ContentHubPage;
