export interface TimelineItem {
  year: number;
  image: string;
  description: string;
}

export interface TimelineProps {
  items: TimelineItem[];
}

export interface VideoSectionProps {
  isVideo?: boolean;
}