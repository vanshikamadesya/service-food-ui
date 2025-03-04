import VideoCarousel from "./VideoCarousel";
import { videoData } from "../data/videoData";

const MoreVideos = () => {
  return <VideoCarousel videos={videoData} mainTitle="More Videos" backgroundColor="#EFEBE7" />;
};

export default MoreVideos;
