import BrandSlider from './BrandSlider'
import { brands } from "../../data/exclusiveBrandData";

export const ExclusiveBrand: React.FC = () => {
  return (
    <BrandSlider
      brands={brands}
      title="EXCLUSIVE BRANDS"
      titleAlignment="center"
      titlePosition="top"
      navAlignment="right"
      navPosition="bottom"
      contentOrder={[
        "title",
        "description",
        "learnMoreButton",
        "brochureButton",
        "orderButton",
      ]}
      swiperTitleAlignment="left"
      imagePosition="top"
    />
  );
};
