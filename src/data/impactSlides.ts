// src/data/impactSlides.ts

import sustainability from "../assets/images/Impact/sustainibility.png";
import social from "../assets/images/Impact/social.png";
import people from "../assets/images/Impact/people.png";
import leadership from "../assets/images/Impact/leadership.png";
import innovation from "../assets/images/Impact/innovation.png";
import community from "../assets/images/Impact/community.png";

export interface Slide {
  title: string;
  image: string;
  content: string;
}

export const impactSlides: Slide[] = [
  { 
    title: "SUSTAINABILITY", 
    image: sustainability,
    content: "We are committed to sustainable practices, reducing waste, and minimizing our environmental footprint." 
  },
  { 
    title: "SOCIAL", 
    image: social,
    content: "Empowering communities through social responsibility, ethical sourcing, and inclusive practices." 
  },
  { 
    title: "LEADERSHIP", 
    image: leadership,
    content: "Driving change and innovation with strong leadership that fosters growth and excellence." 
  },
  { 
    title: "COMMUNITY", 
    image: community,
    content: "Building strong community connections through support programs, education, and local engagement." 
  },
  { 
    title: "INNOVATION", 
    image: innovation,
    content: "Pushing boundaries with cutting-edge solutions, technological advancements, and creative thinking." 
  },
  { 
    title: "PEOPLE", 
    image: people,
    content: "Our people are our strength—empowering individuals, fostering diversity, and promoting well-being." 
  },
];
