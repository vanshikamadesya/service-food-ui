
export type TextAlignment = "left" | "center" | "right";

export interface Article {
  id: number;
  mediaUrl: string; 
  mediaType: "image" | "video";
  title: string;
  description: string;
}

export interface SwiperInstance {
  slideNext: () => void;
  slidePrev: () => void;
  slides: any[]; 
  activeIndex: number;
  isBeginning?: boolean; 
  isEnd?: boolean;
}


export const BG_COLOR_ARTICLE_SECTION = "#EFEBE7";
export const TEXT_COLOR_ARTICLE_HEAD = "#505050";
export const TEXT_COLOR_DESC = "black";
export const MEDIA_PLACEHOLDER_BG = "bg-gray-300"; 


export const getAlignmentClass = (
  alignment: TextAlignment | undefined
): string => {
  switch (alignment) {
    case "center":
      return "text-center";
    case "right":
      return "text-right";
    case "left":
    default:
      return "text-left";
  }
};
