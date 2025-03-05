import BgImage from "../components/HomeContent/BgImage";
import Dropdown from "../components/HomeContent/Dropdown";
import Icon from "../components/HomeContent/Icon";
import ServiceFood from "../components/ServiceFood";
import { slidesData } from "../data/ServiceFood";
const HomePage = () => {
  return (
    <>
      <BgImage />
      <ServiceFood
        title={slidesData.title}
        businessOptions={slidesData.businessOptions}
        regionOptions={slidesData.regionOptions}
      />
      <Dropdown />
      <Icon />
    </>
  );
};

export default HomePage;
