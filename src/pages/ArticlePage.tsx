import ArticleHeroSection from "../components/ArticleHeroSection";
import ArticlePreview from "../components/ArticlePreview";
import MoreArticle from "../components/moreArticle/MoreArticle";
import ArtworkSection from "../components/ArtworkSection";
import ArticleVideoSection from "../components/ArticleVideoSection";

import artworkSectionData from "../data/ArtworkSectionData";
import VideoSection from "../components/VideoSection";

import v1 from "../assets/images/v-1.png";
import v2 from "../assets/images/v-2.png";
import videoFile from "../assets/images/video.mp4";

const ArticlePage = () => {
  return (
    <div>
      <ArticleHeroSection
        title="Maxine Sckeckter On Her Unique Take On Pastry"
        subtitle="Leading By Example - Chef Nancye On Breaking Barriers And Building Kitchens Of Respect"
      />
      <ArticlePreview
        introText="Lorem ipsum dolor sit amet consectetur. Libero eget ultrices varius volutpat non faucibus dui pretium sed. Justo lacus massa massa pellentesque et non. Vitae."
        paragraph1="Lorem ipsum dolor sit amet consectetur. Gravida ac ultrices proin est dolor sit. Egestas fringilla maecenas sed nunc quis magna mi diam sagittis. Ornare scelerisque non tellus amet tortor. Elit vel adipiscing luctus id habitant dui."
        paragraph2="Feugiat elementum ut duis at urna. Tellus imperdiet platea elit amet duis id at auctor nulla. Nibh sagittis tincidunt a rhoncus tortor viverra volutpat lacus. Turpis tortor aliquam turpis in lobortis neque elit purus et. Maecenas pulvinar praesent ultrices erat tinciduntcidunt amet pulvinar varius egestas vulputate. Tristique tortor turpis nisl massa sed sed ipsum. Metus consequat integer aliquam ve."
        bannerTitle="Lorem ipsum dolor sit amet consectetur. Tortor facilisis nisi magna ultricies neque et aliquam tortor."
        column1Text="Lorem ipsum dolor sit amet consectetur. Felis accumsan dictum mollis odio ultricies molestie massa quis sit. Nisi aliquam lectus volutpat et placerat sodales. Nullam sed."
        column2Text="Lorem ipsum dolor sit amet consectetur. Elementum pretium massa ante auctor leo morbi amet dui. Purus a purus cursus egestas hac id. Maecenas enim proin at."
        quoteText="Lorem ipsum dolor sit amet consectetur. Libero eget ultrices varius volutpat non faucibus dui pretium sed. Justo lacus massa massa pellentesque et non."
        quoteAuthor="Lorem ipsum dolor sit amet consectetur. Morbi sagittis in orci vulputate lacus tristique posuere eu."
      />
      <VideoSection
        title="Explore Our Creative Process"
        subtitle="A behind-the-scenes look at how we bring our artistic vision to life through dedication, innovation, and passion."
        mainVideo={videoFile}
        description1="Lorem ipsum dolor sit amet consectetur. Gravida ac ultrices proin est dolor sit. Egestas fringilla maecenas sed nunc quis magna mi diam sagittis. Ornare scelerisque non tellus amet tortor. Elit vel adipiscing luctus id habitant dui."
        description2="Feugiat elementum ut duis at urna. Tellus imperdiet platea elit amet duis id at auctor nulla. Nibh sagittis tincidunt a rhoncus tortor viverra volutpat lacus. Turpis tortor aliquam turpis in lobortis neque elit purus et."
        previewThumbnail={{
          src: v1,
          alt: "Preview of additional content",
        }}
        secondaryThumbnail={{
          src: v2,
          alt: "Preview of behind the scenes content",
        }}
        imgDescription1="Lorem ipsum dolor sit amet consectetur. "
        imgDescription2="Lorem ipsum dolor sit amet consectetur. "
      />
      <ArtworkSection {...artworkSectionData} />
      <ArticleVideoSection
        title="Lorem ipsum dolor sit"
        video={videoFile}
        description1="Lorem ipsum dolor sit amet consectetur. Gravida ac ultrices proin est dolor sit. Egestas fringilla maecenas sed nunc quis magna mi diam sagittis. Ornare scelerisque non tellus amet tortor. Elit vel adipiscing luctus id habitant dui."
        description2="Feugiat elementum ut duis at urna. Tellus imperdiet platea elit amet duis id at auctor nulla. Nibh sagittis tincidunt a rhoncus tortor viverra volutpat lacus. Turpis tortor aliquam turpis in lobortis neque elit purus et. Maecenas pulvinar praesent ultrices erat tinciduntcidunt amet pulvinar varius egestas vulputate. Tristique tortor turpis nisl massa sed sed ipsum. Metus consequat integer aliquam ve."
        buttonText="CTA Example"
      />
      <MoreArticle />
    </div>
  );
};

export default ArticlePage;
