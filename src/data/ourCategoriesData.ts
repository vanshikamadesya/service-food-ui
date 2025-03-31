import fish from "../assets/images/fish.png";
import meat from "../assets/images/met.png";
import vag from "../assets/images/veg.png";
import { CategoryData } from "../components/OurCategories/CategoryButton";


export const categories: CategoryData[] = [
  {
    id: "1",
    image: fish,
    title: "Fish Straight From The Boat",
    description: "We work directly with local fishermen to bring you the freshest seafood possible. Our seafood is caught daily and delivered straight to our facilities, ensuring maximum freshness and supporting sustainable fishing practices.",
    buttonText: "Download Seafood Catalogue",
    buttonLink: "/seafood-catalogue.pdf",
    titleAlignment: "left",
    descriptionAlignment: "left",
    buttonAlignment: "left",
    imagePosition: "right",
    contentOrder: ['title', 'description', 'button'],  

  },
  {
    id: "2",
    image: meat,
    title: "Bringing You The Best in Meat",
    description: "Our premium meats come from ethically raised, grass-fed livestock from local farms. We carefully select each cut to ensure tenderness, flavor, and quality. From aged steaks to artisanal sausages, our meat selection is unparalleled.",
    buttonText: "Download Meat Catalogue", 
    buttonLink: "/meat-catalogue.pdf",
    titleAlignment: "left",
    descriptionAlignment: "left",
    buttonAlignment: "left",
    imagePosition: "right",
    contentOrder: ['title', 'description', 'button'],  

  },
  {
    id: "3", 
    image: vag,
    title: "Growing Our Relationships",
    description: "We partner with local farmers who share our commitment to quality and sustainability. Our produce is harvested at peak ripeness and delivered to you within hours, preserving all the nutrients and flavors nature intended.",
    buttonText: "Download Produce Catalogue",
    buttonLink: "/produce-catalogue.pdf", 
    titleAlignment: "left",
    descriptionAlignment: "left",
    buttonAlignment: "left",
    imagePosition: "right",
    contentOrder: ['title', 'description', 'button'],  

  }
];

