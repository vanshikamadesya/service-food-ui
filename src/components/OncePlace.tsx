import banner from "../assets/images/banner.png";
import Hero from "./Hero";

export default function OncePlace() {
  return (
    <Hero
      title="Everything You Need All In Once Place"
      subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      backgroundImage={banner}
      className="md:text-left md:mr-108 md:px-32  "
    />
  );
}
