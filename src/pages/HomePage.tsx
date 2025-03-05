import HomeHeroSection from "../components/HomeHeroSection";
import LoremText from "../components/HomeContent/LoremText";
import Dropdown from "../components/HomeContent/Dropdown";
import Icon from "../components/HomeContent/Icon";

const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <LoremText />
      <Dropdown />
      <Icon />
    </>
  );
};

export default HomePage;
