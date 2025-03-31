import OncePlace from "../components/OncePlace";
import CatalogSlider from "../components/our-catalogues";
import ExclusiveBrands from "../components/ExclusiveBrands";
import banner from "../assets/images/banner.png";
import {OurCategory} from "../components/OurCategories";
function ProductPage() {
  return (
    <>
      <OncePlace
        title="Everything You Need All In One Place"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        backgroundImage={banner}
      />
      <OurCategory/>
      <ExclusiveBrands />
      <CatalogSlider />
    </>
  );
}

export default ProductPage;
