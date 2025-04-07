import React from "react";
import droplet from "../assets/images/ArticleP/droplet.png";

interface ArticlePreviewProps {
  introText: string;
  paragraph1: string;
  paragraph2: string;
  bannerTitle: string;
  column1Text: string;
  column2Text: string;
  quoteText: string;
  quoteAuthor: string;
  // Alignment props for each element
  introAlignment?: "left" | "center" | "right";
  paragraph1Alignment?: "left" | "center" | "right";
  paragraph2Alignment?: "left" | "center" | "right";
  bannerTitleAlignment?: "left" | "center" | "right";
  column1Alignment?: "left" | "center" | "right";
  column2Alignment?: "left" | "center" | "right";
  quoteTextAlignment?: "left" | "center" | "right";
  quoteAuthorAlignment?: "left" | "center" | "right";
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  introText,
  paragraph1,
  paragraph2,
  bannerTitle,
  column1Text,
  column2Text,
  quoteText,
  quoteAuthor,
  // Default alignments
  introAlignment = "left",
  paragraph1Alignment = "left",
  paragraph2Alignment = "left",
  bannerTitleAlignment = "left",
  column1Alignment = "left",
  column2Alignment = "left",
  quoteTextAlignment = "center",
  quoteAuthorAlignment = "center",
}) => {
  // Helper function to get text alignment class
  const getAlignmentClass = (alignment: "left" | "center" | "right") => {
    return `text-${alignment}`;
  };

  return (
    <div className="flex flex-col">
      {/* Text Section  */}
      <div className="max-w-2xl mx-auto text-[#3A342B] py-8 font-inter">
        {/* Larger introductory paragraph */}
        <p
          className={`text-[22px] font-semibold mb-6 text-[#86704D] leading-relaxed ${getAlignmentClass(
            introAlignment
          )}`}
        >
          {introText}
        </p>

        {/* First body paragraph */}
        <p
          className={`text-[16px] mb-5 leading-relaxed font-light ${getAlignmentClass(
            paragraph1Alignment
          )}`}
        >
          {paragraph1}
        </p>

        {/* Second body paragraph */}
        <p
          className={`text-[16px] leading-relaxed text-[#3A342B] font-light ${getAlignmentClass(
            paragraph2Alignment
          )}`}
        >
          {paragraph2}
        </p>
      </div>

      <hr className="border-gray-300 my-6 mx-4 max-w-6xl" />

      {/* Droplet Banner Section - Full Width */}
      <div className="w-full relative mb-8">
        <img
          src={droplet}
          alt="Water droplet on a leaf"
          className="w-full h-64 md:h-72 lg:h-80 object-cover"
        />
        <div className="absolute top-0 left-0 w-full p-8 md:p-12 text-white">
          <p
            className={`text-2xl md:text-3xl font-medium max-w-sm mx-auto ${getAlignmentClass(
              bannerTitleAlignment
            )}`}
          >
            {bannerTitle}
          </p>
        </div>
      </div>

      {/* Two Column Content Section */}
      <div className="flex flex-col md:flex-row px-4 gap-8 mb-8 max-w-6xl mx-auto">
        <div className="md:w-1/2 text-[#3A342B]">
          <p
            className={`mb-6 font-normal ${getAlignmentClass(
              column1Alignment
            )}`}
          >
            {column1Text}
          </p>
        </div>
        <div className="md:w-1/2 text-[#3A342B]">
          <p
            className={`mb-6 font-normal ${getAlignmentClass(
              column2Alignment
            )}`}
          >
            {column2Text}
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="w-full bg-[#F2F2F2] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p
            className={`text-[#86704D] text-2xl md:text-3xl font-semibold mb-8 leading-relaxed ${getAlignmentClass(
              quoteTextAlignment
            )}`}
          >
            {quoteText}
          </p>

          <p
            className={`text-[#3A342B] text-base italic font-light max-w-md mx-auto ${getAlignmentClass(
              quoteAuthorAlignment
            )}`}
          >
            {quoteAuthor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
