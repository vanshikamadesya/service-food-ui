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
  { title: "Beverages", image: BeveragesImg, category: "EXCLUSIVE BRANDS" },
  { title: "Frozen Foods", image: FrozenFoodsImg, category: "MONTHLY SPECIALS" },
  { title: "School Lunch", image: SchoolLunchImg, category: "CUSTOMER SEGMENTS" },
  { title: "International", image: AnnualImg, category: "EXCLUSIVE BRANDS" },
];

export const catalogs = Array(3).fill(baseCatalogs).flat();
