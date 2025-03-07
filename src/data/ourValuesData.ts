import CreativityIcon from "../assets/images/our-values/v-1.svg";
import CollaborationIcon from "../assets/images/our-values/v-2.svg";
import InclusivityIcon from "../assets/images/our-values/v-3.svg";
import ResilienceIcon from "../assets/images/our-values/v-4.svg";
import WorkEthicIcon from "../assets/images/our-values/v-5.svg";
import HumilityIcon from "../assets/images/our-values/v-6.svg";

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export const values: ValueItem[] = [
  {
    title: "Cretivity",
    description:
      "We deliver solutions, not problems, are always learning, and never settle for average or the status quo",
    icon: CreativityIcon,
  },
  {
    title: "Collaboration",
    description:
      "We communicate honestly, listen empathetically, and help each other whenever needed.",
    icon: CollaborationIcon,
  },
  {
    title: "Inclusivity",
    description:
      "We are welcoming, open-minded, and respectful of others' ideas, points of view, and preferences.",
    icon: InclusivityIcon,
  },
  {
    title: "Resilience",
    description:
      "We are adaptive, perseverant, and passionate about our industry and work.",
    icon: ResilienceIcon,
  },
  {
    title: "Work Ethic",
    description: "We have integrity, are reliable, and get things done.",
    icon: WorkEthicIcon,
  },
  {
    title: "Humility",
    description: "We stay modest and appreciative regardless of our success.",
    icon: HumilityIcon,
  },
];