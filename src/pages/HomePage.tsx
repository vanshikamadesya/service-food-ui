import HomeHeroSection from "../components/HomeHeroSection";
import homeVideo from "../assets/images/HomepageVideo.mp4";
import HomeSwiper from "../components/HomeSwiper";
import ServiceFood from "../components/ServiceFood";
import { slidesData } from "../data/ServiceFood";
import HomeIcon from "../components/HomeIcon";
import DropdownIndex from "../components/HomeDropdown/index";
import { slidesDatas } from "../data/home";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection slides={slidesDatas} videoSrc={homeVideo} />
      <ServiceFood
        title={slidesData.title}
        businessOptions={slidesData.businessOptions}
        regionOptions={slidesData.regionOptions}
      />
      <DropdownIndex />
      <HomeSwiper />
      <HomeIcon />
    </>
  );
};

export default HomePage;
