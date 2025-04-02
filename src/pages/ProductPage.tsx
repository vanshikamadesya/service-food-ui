import OncePlace from "../components/OncePlace";
import CatalogSlider from "../components/CatalogSlider";
import banner from "../assets/images/banner.png";
import { OurCategory } from "../components/OurCategories";
import { ExclusiveBrand } from "../components/ExclusiveBrands/index";
import { allCategories, catalogs } from "../data/ourCatelogDate";
function ProductPage() {
  return (
    <>
      <OncePlace
        title="Everything You Need All In One Place"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        backgroundImage={banner}
      />
      <OurCategory />
      <ExclusiveBrand />
      <CatalogSlider
        categories={allCategories}
        catalogs={catalogs}
        titleAlignment="center"
        titlePosition="top"
        arrowAlignment="right"
        arrowPosition="bottom"
      />
    </>
  );
}

export default ProductPage;
