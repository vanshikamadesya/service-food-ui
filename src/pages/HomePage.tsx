import ServiceFood from "../components/ServiceFood";
import { slidesData } from "../data/ServiceFood";
const HomePage = () => {
  return (
    <>
      <ServiceFood
        title={slidesData.title}
        businessOptions={slidesData.businessOptions}
        regionOptions={slidesData.regionOptions}
      />
    </>
  );
};

export default HomePage;
