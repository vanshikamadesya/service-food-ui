// Import images and video
import Ar1 from "../assets/images/ar-1.png";
import Ar2 from "../assets/images/ar-2.mp4"; // Video
import Ar3 from "../assets/images/ar-3.png";
import Ar4 from "../assets/images/ar-4.png";
import Ar5 from "../assets/images/ar-5.png";
import Ar6 from "../assets/images/ar-6.png";

// Define an interface for article items
export interface ArticleItem {
  id: number;
  mediaSrc: string;
  isVideo?: boolean;
  title: string;
  description: string;
}

// Create a constant array for articles
export const articleData: ArticleItem[] = [
  {
    id: 1,
    mediaSrc: Ar1,
    title: "LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    mediaSrc: Ar2,
    isVideo: true,
    title: "LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    mediaSrc: Ar3,
    title: "LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    mediaSrc: Ar4,
    title: "LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    mediaSrc: Ar5,
    title: "LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    mediaSrc: Ar6,
    title: "LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 7,
    mediaSrc: Ar5,
    title: "LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 8,
    mediaSrc: Ar6,
    title: "LOREM IPSUM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
