import React from "react";
import ImpactSection from "./tab-carousel";

import supplierRelationship from "../assets/great_chief/supplier-realtionships.png";
import nationwideDistribution from "../assets/great_chief/nationwide-distribution.png";
import importExports from "../assets/great_chief/import-exports.png";
import customerFirst from "../assets/great_chief/putting-our-customer-first.png";

const slides = [
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

function GreatChief() {
  return (
    <ImpactSection 
      slides={slides} 
      mainTitle="Behind Every Great Chef" 
      showDownloadButton={false} 
    />
  );
}

export default GreatChief;
