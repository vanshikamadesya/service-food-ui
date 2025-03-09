import Hero from "./Hero";
import ArticleImage from "../assets/images/ArticleHero.png";

// Define interface for the props
interface ArticleHeroSectionProps {
  title: string;
  subtitle: string;
}

const ArticleHeroSection = ({ title, subtitle }: ArticleHeroSectionProps) => {

  return (
    <div >
      <Hero
        title={title}
        subtitle={subtitle}
        backgroundImage={ArticleImage}
        titleWidthPercent={70}
        subtitleWidthPercent={50}
        socialLinks={{
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          linkedin: "https://www.linkedin.com",
        }}
        textAlignment="center"
      />
    </div>
  );
};

export default ArticleHeroSection;
