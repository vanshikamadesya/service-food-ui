import Hero from "./Hero";
import ArticleImage from "../assets/images/ArticleHero.png";
const ArticleHeroSection = () => {
  return (
    <div className="">
      <Hero
        title="MAXINE SCHECKTER ON HER UNIQUE TAKE ON PASTRY"
        subtitle="LEADING BY EXAMPLE - CHEF NANCYE ON BREAKING BARRIERS AND BUILDING KITCHENS OF RESPECT"
        backgroundImage={ArticleImage}
        socialLinks={{
          instagram: "https://www.instagram.com",
          facebook: "https://www.facebook.com",
          linkedin: "https://www.linkedin.com",
        }}
        className="md:mb-3 md:w-[1180px]  md:px-16  "
      ></Hero>
    </div>
  );
};

export default ArticleHeroSection;
