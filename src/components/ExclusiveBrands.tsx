import BrandSlider from "./BrandSlider";
import ErrorBoundary from "../components/ErrorBoundary";
import { brands } from "../data/brandData";

const ExclusiveBrands = () => {
  return (
    <div className="w-full mx-auto py-16  relative">
      <h2 className="text-2xl md:text-3xl font-bold md:mt-3 text-center text-[#3A342B] font-inter">
        EXCLUSIVE BRANDS
      </h2>
      <div className="w-36 h-[2px] bg-[#3A342B] mt-2 mb-6 mx-auto"></div>

      <ErrorBoundary>
        <BrandSlider brands={brands} />
      </ErrorBoundary>
    </div>
  );
};

export default ExclusiveBrands; 
