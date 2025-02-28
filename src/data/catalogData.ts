import BeveragesImg from "../assets/images/Beverages-img.png";
import FrozenFoodsImg from "../assets/images/frozen-foods.png";
import SchoolLunchImg from "../assets/images/School-Lunch.png";
import AnnualImg from "../assets/images/Annual.png";

export const allCategories = [
  "ALL CATALOGUES",
  "EXCLUSIVE BRANDS",
  "MONTHLY SPECIALS",
  "CUSTOMER SEGMENTS",
];

export const baseCatalogs = [
  { title: "Beverages", image: BeveragesImg },
  { title: "Frozen Foods", image: FrozenFoodsImg },
  { title: "School Lunch", image: SchoolLunchImg },
  { title: "International", image: AnnualImg },
];


export const catalogs = Array(3).fill(baseCatalogs).flat();
