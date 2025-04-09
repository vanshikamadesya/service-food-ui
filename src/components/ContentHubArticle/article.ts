export interface ArticleItem {
  id: number;
  mediaSrc: string;
  isVideo?: boolean;
  title: string;
  description: string;
}

export type TitlePosition = "left" | "center" | "right" | "top" | "bottom";
export type Alignment = "left" | "center" | "right";
export type VerticalPosition = "start" | "center" | "end";
export type CardElement = "title" | "description" | "button";
export type VideoControlPosition =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "center";

// Props interfaces
export interface ArticleListProps {
  articles: ArticleItem[];
  mainTitle?: string;
  backgroundColor?: string;
  titlePosition?: TitlePosition;
  cardElementsOrder?: CardElement[];
  titleAlignment?: Alignment;
  descriptionAlignment?: Alignment;
  buttonAlignment?: Alignment;
  cardVerticalPosition?: VerticalPosition;
  videoControlPosition?: VideoControlPosition;
}
