import VideoCarousel from "./VideoCarousel";
import { videoData } from "../data/videoData";

const OurStory = () => {
  return <VideoCarousel videos={videoData} mainTitle="Our Story" backgroundColor="#EFEBE7" />;
};

export default OurStory;
