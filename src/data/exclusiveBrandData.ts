import leonardsBg from "../assets/images/leonards-bg.png";
import leonardsLogo from "../assets/images/leonards-logo.png";
import balarsBg from "../assets/images/balars-bg.png";
import balarsLogo from "../assets/images/balars-logo.png";
import rawearthBg from "../assets/images/rawearth-bg.png";
import rawearthLogo from "../assets/images/rawearth-logo.png";
import { Brand } from "../components/ExclusiveBrands/TitleSection";

export const brands: Brand[] = Array(7)
  .fill(null)
  .map((_, index) => ({
    name: `Brand ${index + 1}`,
    description:
      "Lorem ipsum dolor sit amet consectetur. Accumsan velit leo amet vestibulum. Urna enim lectus netus dui senectus aliquam. Eget maecenas dictum adipiscing vivamus diam. Eu dolor tincidunt nullam pellentesque odio quis velit tellus.",
    bgImage: [leonardsBg, balarsBg, rawearthBg][index % 3],
    logo: [leonardsLogo, balarsLogo, rawearthLogo][index % 3],
  }));
