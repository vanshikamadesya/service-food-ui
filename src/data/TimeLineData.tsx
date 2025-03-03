import img1983 from "../assets/images/1983.png";
import img1994 from "../assets/images/1994.png";
import img1997 from "../assets/images/1997.png";
import img2001 from "../assets/images/2001.png";
import img2005 from "../assets/images/2005.png";
import { TimelineItem } from "../types"; // Adjust path if needed

export const timelineData: TimelineItem[] = [
  {
    year: 1983,
    image: img1983,
    description:
      "After immigrating from India, Stan Balar and his wife Vicki buy a small grocery store on Colombo Street in Christchurch.",
  },
  {
    year: 1994,
    image: img1994,

    description:
      "The success of the grocery store leads the family to open Balar Wholesale Supplies Ltd, a grocery wholesaler located on Coleridge Street.",
  },
  {
    year: 1997,
    image: img1997,

    description:
      "The business acquires Service Foods, which gives them access to the chilled and frozen goods market. The same year, the company changes its name to Service Foods and joins Cooperative Group, opening up national distribution.",
  },
  {
    year: 2001,
    image: img2001,

    description:
      "As the wholesale business grows, so too does its property arm, and the family creates Balar Property Co.",
  },
  {
    year: 2005,
    image: img2005,

    description:
      "Balar Wholesale Supplies Ltd acquires Asian Food Warehouse, significantly expanding its footprint and proposition.",
  },
];
