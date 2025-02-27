import EssentialImg from "../assets/images/essentials-logo 1.png"
import LeonardImg from "../assets/images/Leonard.png"
import BalarsImg from "../assets/images/balars-logo 1.png"
import FirstCatchImg from "../assets/images/first-catch-logo .png"
import RawEarthImg from "../assets/images/RawEarth.png"
import FarmFreshImg  from "../assets/images/Farm fresh logo2 1.png"
import WildcareImd from "../assets/images/Wildcare.png"
import DairyImg from "../assets/images/the-dairy-press-logo 1.png"

const ExclusiveBrands = () => {
    const brands = [
      { name: "Leonards", logo: LeonardImg},
      { name: "Balars Whole Foods", logo: BalarsImg },
      { name: "Raw Earth", logo: RawEarthImg },
      { name: "First Catch", logo: FirstCatchImg },
      { name: "Farm Fresh", logo: FarmFreshImg },
      { name: "Wild Acre Farms", logo: WildcareImd},
      { name: "Essentials", logo: EssentialImg },
      { name: "The Dairy Shed", logo: DairyImg },
    ];
  
    return (
      <div className="max-w-5xl mx-auto p-6">
        {/* Exclusive Brands Section */}
        <h2 className="text-3xl font-bold text-center">EXCLUSIVE BRANDS</h2>
        <div className="w-16 h-1 bg-black mx-auto mt-2 mb-6"></div>
  
        <div className="grid grid-cols-4 gap-6 justify-items-center">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-12 object-contain"
            />
          ))}
        </div>
  
        {/* Promo Card */}
        <div className="mt-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/promo-image.jpg"
              alt="Promo"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
              <div className="absolute top-6 right-6">
                <img src="/images/leonards.png" alt="Leonards" className="h-12" />
              </div>
              <p className="text-white text-lg">
                Lorem Ipsum Dolor Sit Amet Consectetur. Aliquet Hendrerit Gravida Dis Odio Non Et Et.
              </p>
              <button className="mt-4 bg-white text-black px-4 py-2 rounded-md font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExclusiveBrands;
  