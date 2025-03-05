import HomeHeroSection from "../components/HomeHeroSection";
import LoremText from "../components/HomeContent/LoremText";
import Dropdown from "../components/HomeContent/Dropdown";
import Icon from "../components/HomeContent/Icon";
import { slidesData } from "../data/home";
import homeVideo from "../assets/images/HomepageVideo.mp4"

const HomePage = () => {
  return (
    <>
      <HomeHeroSection slides={slidesData} videoSrc={homeVideo} />
      <LoremText />
      <Dropdown />
      <Icon />
    </>
  );
};

export default HomePage;
