import fish from "../assets/images/fish.png";
import meat from "../assets/images/met.png";
import vag from "../assets/images/veg.png";

const categories = [
  {
    image: fish,
    title: "Fish Straight From The Boat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu id eget feugiat non aliquam mattis. Odio at volutpat eleifend ut interdum. Dignissim arcu sed nunc arcu ac facilisis feugiat id. Nunc magna eget odio praesent porta et tempor nisl.",
    buttonText: "Download Seafood Catalogue",
  },
  {
    image: meat,
    title: "Bringing You The Best in Meat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu id eget feugiat non aliquam mattis. Odio at volutpat eleifend ut interdum. Dignissim arcu sed nunc arcu ac facilisis feugiat id. Nunc magna eget odio praesent porta et tempor nisl.",
    buttonText: "Download Meat Catalogue",
  },
  {
    image: vag,
    title: "Growing Our Relationships",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu id eget feugiat non aliquam mattis. Odio at volutpat eleifend ut interdum. Dignissim arcu sed nunc arcu ac facilisis feugiat id. Nunc magna eget odio praesent porta et tempor nisl.",
    buttonText: "Download Produce Catalogue",
  },
];

export default function OurCategories() {
  return (
    <div className="bg-[#EFEBE7] min-h-screen flex flex-col items-center py-10 px-4 md:px-8">
      {/* Heading */}
      <h2 className="text-xl md:text-3xl font-bold text-center text-[#3A342B] font-inter">
        OUR CATEGORIES
      </h2>
      <div className="w-20 h-1 bg-[#3A342B] mt-2 mb-6"></div>

      {/* Categories List */}
      <div className="w-full max-w-screen-xl flex flex-col gap-10 md:px-0">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 md:w-full"
          >
            {/* Image Section */}
            <div className="md:order-2 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 md:h-96 object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-center items-start text-left md:order-1 md:p-10">
              <h3 className="text-lg md:text-2xl font-bold text-[#86704D] font-inter">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mt-2 font-inter">
                {item.description}
              </p>
              <button className="mt-6 px-6 py-2 bg-[#86704D] text-white text-sm md:text-base rounded-md font-inter">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
