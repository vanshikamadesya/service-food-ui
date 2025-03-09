import Hero from "./Hero";

// Define the interface for props
interface OncePlaceProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const OncePlace = ({ title, subtitle, backgroundImage }: OncePlaceProps) => {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      backgroundImage={backgroundImage}
      titleWidthPercent={60}
      subtitleWidthPercent={50}
    />
  );
};

export default OncePlace;
