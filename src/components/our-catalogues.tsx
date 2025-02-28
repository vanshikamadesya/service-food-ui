import CatalogSlider from "./CatalogSlider";
import { allCategories, catalogs } from "../data/catalogData";

const OurCatalogues = () => {
  return <CatalogSlider categories={allCategories} catalogs={catalogs} />;
};

export default OurCatalogues;
