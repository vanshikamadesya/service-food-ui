import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import leftArrow from "../assets/images/arrow-left.png";
import rightArrow from "../assets/images/arrow-right.png";

import BeveragesImg from "../assets/images/Beverages-img.png";
import FrozenFoodsImg from "../assets/images/frozen-foods.png";
import SchoolLunchImg from "../assets/images/School-Lunch.png";
import AnnualImg from "../assets/images/Annual.png";
import cataloguesBg from "../assets/images/catalogues-bg.png";

const fontStyle = "font-inter";
const fontColor = "text-[#FFFFFF]";

const categories = [
  "All Catalogues",
  "Exclusive Brands",
  "Monthly Specials",
  "Customer Segments",
];

const catalogues = [
  { id: 1, image: BeveragesImg, category: "Beverages" },
  { id: 2, image: FrozenFoodsImg, category: "Frozen Foods" },
  { id: 3, image: SchoolLunchImg, category: "School Lunch" },
  { id: 4, image: AnnualImg, category: "Annual" },
  { id: 5, image: BeveragesImg, category: "Beverages" },
  { id: 6, image: FrozenFoodsImg, category: "Frozen Foods" },
  { id: 7, image: SchoolLunchImg, category: "School Lunch" },
  { id: 8, image: AnnualImg, category: "Annual" },
];

export default function OurCatalogues() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className={`relative py-16 px-5 bg-cover bg-center ${fontStyle} ${fontColor}`}
      style={{ backgroundImage: `url(${cataloguesBg})` }}
    >
      <h2 className={`text-2xl md:text-4xl font-bold text-center ${fontStyle} ${fontColor}`}>
        OUR CATALOGUES
      </h2>
      <div className={`w-20 h-1 bg-[#FFFFFF] mt-2 mb-6 mx-auto`}></div>

      {/* Desktop Category Bar */}
      <div className="hidden md:flex justify-center space-x-8 my-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-lg ${fontStyle} ${fontColor} ${
              selectedCategory === category ? "underline" : "opacity-70"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden relative mb-4">
        <button
          className={`flex items-center justify-between w-full bg-gray-800 px-4 py-2 rounded-md ${fontStyle} ${fontColor}`}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedCategory} <img src={leftArrow} alt="Dropdown" className="w-4 h-4" />
        </button>
        {showDropdown && (
          <div className="absolute w-full bg-gray-700 mt-2 rounded-md shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-600 ${fontStyle} ${fontColor}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowDropdown(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0} // Removed gap between images
          slidesPerView={4}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
        >
          {catalogues.map((catalogue) => (
            <SwiperSlide key={catalogue.id}>
              <div className={`flex flex-col items-center ${fontStyle} ${fontColor}`}>
                <img
                  src={catalogue.image}
                  alt={catalogue.category}
                  className="w-32 h-52 object-cover rounded-lg shadow-lg"
                />
                <p className={`mt-1 text-lg ${fontStyle} ${fontColor}`}>{catalogue.category}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrow Buttons (Positioned at Bottom Right of Slider) */}
        <div className="absolute right-5 bottom-5 flex space-x-4">
          <button className="prev-button hidden md:flex items-center justify-center  p-2 rounded-full ">
            <img src={leftArrow} alt="Previous" className="w-6 h-6" />
          </button>
          <button className="next-button hidden md:flex items-center justify-center  p-2 rounded-full ">
            <img src={rightArrow} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
