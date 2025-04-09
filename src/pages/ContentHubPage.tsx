import { useState } from "react";
import ArticleList from "../components/ContentHubArticle/ArticleList";
import ContentHub from "../components/ContentHub";
import OurVideos from "../components/OurVideo";
import { OurStories } from "../components/VideoCarousel";
import bgImg from "../assets/images/bannerContent.png";
import BannerComponent from "../components/BannerComponent";
import {
  TitlePosition,
  Alignment,
  VerticalPosition,
  CardElement,
  VideoControlPosition,
} from "../components/ContentHubArticle/article";
import { articleData } from "../data/articleData"; // Import articleData

const ContentHubPage = () => {
  const [textAlignment] = useState<"left" | "center" | "right">("left");
  const [buttonPosition] = useState<"left" | "center" | "right">("left");
  const [elementOrder] = useState<string>("title-content-button");

  // Define missing variables
  const titlePosition: TitlePosition = "center";
  const cardElementsOrder: CardElement[] = ["title", "description", "button"];
  const titleAlignment: Alignment = "left";
  const descriptionAlignment: Alignment = "left";
  const buttonAlignment: Alignment = "left";
  const cardVerticalPosition: VerticalPosition = "start";
  const videoControlPosition: VideoControlPosition = "topLeft";

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
      <ArticleList
        articles={articleData}
        mainTitle="Media Articles"
        backgroundColor="#EFEBE7"
        titlePosition={titlePosition}
        cardElementsOrder={cardElementsOrder}
        titleAlignment={titleAlignment}
        descriptionAlignment={descriptionAlignment}
        buttonAlignment={buttonAlignment}
        cardVerticalPosition={cardVerticalPosition}
        videoControlPosition={videoControlPosition}
      />
    </div>
  );
};

export default ContentHubPage;