// src/data/greatChiefSlides.ts

import supplierRelationship from "../assets/images/great_chief/supplier-realtionships.png";
import nationwideDistribution from "../assets/images/great_chief/nationwide-distribution.png";
import importExports from "../assets/images/great_chief/import-exports.png";
import customerFirst from "../assets/images/great_chief/putting-our-customer-first.png";

export interface Slide {
  title: string;
  image: string;
  content: string;
}

export const greatChiefSlides: Slide[] = [
  { 
    title: "Supplier Relationships", 
    image: supplierRelationship,
    content: "Our dedicated supplier relationships ensure quality and reliability across the board."
  },
  { 
    title: "Nationwide Distribution", 
    image: nationwideDistribution,
    content: "We reach every corner of the nation with a robust distribution network."
  },
  { 
    title: "Import & Exports", 
    image: importExports,
    content: "Our global reach allows us to import the best and export excellence."
  },
  { 
    title: "Putting Our Customers First", 
    image: customerFirst,
    content: "Customer satisfaction is at the heart of everything we do."
  },
];
