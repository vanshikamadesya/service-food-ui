import meatImage from "../assets/images/Homes/met.png";
import secondImage from "../assets/images/Homes/banner.png";
import thirdImage from "../assets/images/Homes/section_3.png";

export interface AccordionItem {
  title: string;
  content: string;
  image: string;
}

export const accordionData: AccordionItem[] = [
  {
    title: "Delivering from Kaitaia to Bluff",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
    image: meatImage,
  },
  {
    title: "From Abalone to Zucchine",
    content:
      "We provide a wide range of fresh and high-quality seafood and vegetables to meet your needs.",
    image: secondImage,
  },
  {
    title: "We’re here to make an impact",
    content:
      "Our mission is to support sustainable sourcing and ensure the best quality for our customers.",
    image: thirdImage,
  },
];
