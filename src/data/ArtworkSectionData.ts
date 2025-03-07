// src/data/ArtworkSectionData.ts

import angels from '../assets/images/ArticleP/angels.png';
import droplet from '../assets/images/ArticleP/droplet.png';
import paintbrushes from '../assets/images/v-2.png';

export interface ArtworkSectionData {
  title: string;
  subtitle: string;
  mainImage: {
    src: string;
    alt: string;
    caption: string;
  };
  leftColumnText: string;
  rightColumnQuote: string;
  rightColumnAuthor: string;
  bannerImage: {
    src: string;
    alt: string;
    text: string;
  };
  artworkDetails: {
    image: {
      src: string;
      alt: string;
    };
    text: string;
  };
}

const artworkSectionData: ArtworkSectionData = {
  title: "Lorem ipsum dolor sit",
  subtitle: "Lorem ipsum dolor sit amet consectetur. Volutpat sodales arcu dui est duis consectetur purus. Porta sit praesent sed interdum. Volutpat augue dolor mauris aliquam sit a ut. Odio turpis pharetra in amet semper. Ut nisl ante.",
  mainImage: {
    src: angels,
    alt: "Renaissance painting of angels and mythological figures",
    caption: "Lorem ipsum dolor sit amet consectetur."
  },
  leftColumnText: "Lorem ipsum dolor sit amet consectetur. Felis accumsan dictum mollis odio ultricies molestie massa quis sit. Nisi aliquam lectus volutpat et placerat sodales. Nullam sed. Lorem ipsum dolor sit amet consectetur. Felis accumsan dictum mollis odio ultricies molestie massa quis sit. Nisi aliquam lectus volutpat et placerat sodales. Nullam sed.",
  rightColumnQuote: "Lorem ipsum dolor sit amet consectetur. Libero eget ultrices varius volutpat non faucibus dui pretium sed. Justo lacus massa massa pellentesque et non.",
  rightColumnAuthor: "Lorem ipsum dolor sit amet consectetur.",
  bannerImage: {
    src: droplet,
    alt: "Water droplet on a leaf",
    text: "Lorem ipsum dolor sit amet consectetur. Tortor facilisis nisi magna ultricies neque et aliquam tortor."
  },
  artworkDetails: {
    image: {
      src: paintbrushes,
      alt: "Paintbrushes with red paint"
    },
    text: "Lorem ipsum dolor sit amet consectetur. Felis accumsan dictum mollis odio ultricies molestie massa quis sit. Nisi aliquam lectus volutpat et placerat sodales. Nullam sed. Lorem ipsum dolor sit amet consectetur. Felis accumsan dictum mollis odio ultricies molestie massa quis sit. Nisi aliquam lectus volutpat et placerat sodales. Nullam pricies molestie massa quis sit. Nisi aliquam lectus volutpat et placerat sodales. Nullam sed."
  }
};

export default artworkSectionData;