import img1 from "../assets/images/ArticlePage/1.png";
import img2 from "../assets/images/ArticlePage/2.png";
import img3 from "../assets/images/ArticlePage/3.png";
import img4 from "../assets/images/ArticlePage/4.png";
import img5 from "../assets/images/ArticlePage/5.png";
import img6 from "../assets/images/ArticlePage/6.png";
import img7 from "../assets/images/ArticlePage/7.png";
import img8 from "../assets/images/ArticlePage/8.png";
import img9 from "../assets/images/ArticlePage/9.png";

export interface Article {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface SwiperInstance {
  slideNext: () => void;
  slidePrev: () => void;
  slides: any[];
  activeIndex: number;
}

export const articles: Article[] = [
  {
    id: 1,
    image: img1,
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet consectetur. Parturient consectetur nunc quis turpis nibh interdum proin pellentesque arcu. In orci."
  },
  {
    id: 2,
    image: img2,
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet consectetur. Parturient consectetur nunc quis turpis nibh interdum proin pellentesque arcu. In orci."
  },
  {
    id: 3,
    image: img3,
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet consectetur. Parturient consectetur nunc quis turpis nibh interdum proin pellentesque arcu. In orci."
  },
  {
    id: 4,
    image: img4,
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet consectetur. Parturient consectetur nunc quis turpis nibh interdum proin pellentesque arcu. In orci."
  },
  {
    id: 5,
    image: img5,
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet consectetur. Parturient consectetur nunc quis turpis nibh interdum proin pellentesque arcu. In orci."
  },
  {
    id: 6,
    image: img6,
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet consectetur. Parturient consectetur nunc quis turpis nibh interdum proin pellentesque arcu. In orci."
  },
  {
    id: 7,
    image: img7,
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet consectetur. Parturient consectetur nunc quis turpis nibh interdum proin pellentesque arcu. In orci."
  },
  {
    id: 8,
    image: img8,
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet consectetur. Parturient consectetur nunc quis turpis nibh interdum proin pellentesque arcu. In orci."
  },
  {
    id: 9,
    image: img9,
    title: "LOREM IPSUM",
    description: "Lorem ipsum dolor sit amet consectetur. Parturient consectetur nunc quis turpis nibh interdum proin pellentesque arcu. In orci."
  }
];