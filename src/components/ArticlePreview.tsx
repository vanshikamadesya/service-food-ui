import React from "react";
import droplet from "../assets/images/ArticleP/droplet.png";

// Type definitions
type TextAlignment = "left" | "center" | "right";
type BannerPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "center-left"
  | "center-center"
  | "center-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";
type ColumnOrder = "1-2" | "2-1";
type TextSectionKey = "intro" | "p1" | "p2";

interface ArticlePreviewProps {
  // Content
  introText: string;
  paragraph1: string;
  paragraph2: string;
  bannerTitle: string;
  column1Text: string;
  column2Text: string;
  quoteText: string;
  quoteAuthor: string;

  // Alignments
  introAlignment?: TextAlignment;
  paragraph1Alignment?: TextAlignment;
  paragraph2Alignment?: TextAlignment;
  bannerTitleAlignment?: TextAlignment;
  column1Alignment?: TextAlignment;
  column2Alignment?: TextAlignment;
  quoteTextAlignment?: TextAlignment;
  quoteAuthorAlignment?: TextAlignment;

  // Layout
  bannerPosition?: BannerPosition;
  columnOrder?: ColumnOrder;
  textSectionOrder?: TextSectionKey[];
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  // Content props with no defaults needed
  introText,
  paragraph1,
  paragraph2,
  bannerTitle,
  column1Text,
  column2Text,
  quoteText,
  quoteAuthor,

  // Alignment props with defaults
  introAlignment = "left",
  paragraph1Alignment = "left",
  paragraph2Alignment = "left",
  bannerTitleAlignment = "left",
  column1Alignment = "left",
  column2Alignment = "left",
  quoteTextAlignment = "center",
  quoteAuthorAlignment = "center",

  // Layout props with defaults
  bannerPosition = "center-center",
  columnOrder = "1-2",
  textSectionOrder = ["intro", "p1", "p2"],
}) => {
  // Helper functions
  const getAlignmentClass = (alignment: TextAlignment): string => {
    const alignmentMap = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    };

    return alignmentMap[alignment] || "text-left";
  };

  const getBannerPositionClasses = (position: BannerPosition): string => {
    const verticalMap = {
      top: "items-start",
      center: "items-center",
      bottom: "items-end",
    };

    const horizontalMap = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    };

    const [vertical, horizontal] = position.split("-");

    return `${verticalMap[vertical as keyof typeof verticalMap]} ${
      horizontalMap[horizontal as keyof typeof horizontalMap]
    }`;
  };

  // Content renderer functions
  const renderTextSection = (sectionKey: TextSectionKey) => {
    const sectionConfig = {
      intro: {
        text: introText,
        className: `text-[22px] font-semibold mb-6 text-[#86704D] leading-relaxed ${getAlignmentClass(
          introAlignment
        )}`,
      },
      p1: {
        text: paragraph1,
        className: `text-[16px] mb-5 leading-relaxed font-light ${getAlignmentClass(
          paragraph1Alignment
        )}`,
      },
      p2: {
        text: paragraph2,
        className: `text-[16px] leading-relaxed text-[#3A342B] font-light ${getAlignmentClass(
          paragraph2Alignment
        )}`,
      },
    };

    const config = sectionConfig[sectionKey];

    return (
      <p key={sectionKey} className={config.className}>
        {config.text}
      </p>
    );
  };

  return (
    <div className="flex flex-col">
      {/* Text Sections */}
      <div className="max-w-2xl mx-auto text-[#3A342B] py-8 px-4 font-inter">
        {textSectionOrder.map(renderTextSection)}
      </div>

      {/* Banner Section */}
      <div className="w-full relative mb-8">
        <img
          src={droplet}
          alt="Water droplet on a leaf"
          className="w-full h-64 md:h-72 lg:h-80 object-cover block"
        />
        <div
          className={`absolute inset-0 flex p-8 md:p-12 bg-black bg-opacity-30 ${getBannerPositionClasses(
            bannerPosition
          )}`}
        >
          <div className="text-white max-w-sm">
            <p
              className={`text-2xl md:text-3xl font-medium ${getAlignmentClass(
                bannerTitleAlignment
              )}`}
            >
              {bannerTitle}
            </p>
          </div>
        </div>
      </div>

      {/* Two Column Section */}
      <div
        className={`flex flex-col md:flex-row px-4 gap-8 mb-8 max-w-6xl mx-auto ${
          columnOrder === "2-1" ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 text-[#3A342B]">
          <p
            className={`mb-6 font-normal text-[16px] leading-relaxed ${getAlignmentClass(
              column1Alignment
            )}`}
          >
            {column1Text}
          </p>
        </div>
        <div className="md:w-1/2 text-[#3A342B]">
          <p
            className={`mb-6 font-normal text-[16px] leading-relaxed ${getAlignmentClass(
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
            "{quoteText}"
          </p>
          <p
            className={`text-[#3A342B] text-base italic font-light ${getAlignmentClass(
              quoteAuthorAlignment
            )}`}
          >
            — {quoteAuthor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
