import Video from "../assets/images/more-video.mp4";

interface VideoItem {
  videoSrc: string;
  title: string;
  description: string;
}

export const videoData: VideoItem[] = [
  { videoSrc: Video, title: "LOREM IPSUM 1", description: "Lorem Ipsum is simply dummy text of the printing" },
  { videoSrc: Video, title: "LOREM IPSUM 2", description: "Lorem Ipsum is simply dummy text of the printing" },
  { videoSrc: Video, title: "LOREM IPSUM 3", description: "Lorem Ipsum is simply dummy text of the printing" },
  { videoSrc: Video, title: "LOREM IPSUM 4", description: "Lorem Ipsum is simply dummy text of the printing" },
  { videoSrc: Video, title: "LOREM IPSUM 5", description: "Lorem Ipsum is simply dummy text of the printing" },
  { videoSrc: Video, title: "LOREM IPSUM 6", description: "Lorem Ipsum is simply dummy text of the printing" },
];
