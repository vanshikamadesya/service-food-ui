// ArticlePage.tsx
import ArticleHeroSection from '../components/ArticleHeroSection'
import ArticlePreview from '../components/ArticleTestimonial'
import MoreArticle from '../components/MoreArticle'
import ArtworkSection from "../components/ArtworkSection"
import ArticleVideoSection from "../components/ArticleVideoSection"
import videoFile from "../assets/images/video.mp4";
import artworkSectionData from '../data/ArtworkSectionData';

const ArticlePage = () => {
  return (
    <div>
      <ArticleHeroSection/>
      <ArticlePreview/>
      <ArtworkSection {...artworkSectionData} />
      <ArticleVideoSection 
        title="Lorem ipsum dolor sit"
        video={videoFile}
        description1="Lorem ipsum dolor sit amet consectetur. Gravida ac ultrices proin est dolor sit. Egestas fringilla maecenas sed nunc quis magna mi diam sagittis. Ornare scelerisque non tellus amet tortor. Elit vel adipiscing luctus id habitant dui."
        description2="Feugiat elementum ut duis at urna. Tellus imperdiet platea elit amet duis id at auctor nulla. Nibh sagittis tincidunt a rhoncus tortor viverra volutpat lacus. Turpis tortor aliquam turpis in lobortis neque elit purus et. Maecenas pulvinar praesent ultrices erat tinciduntcidunt amet pulvinar varius egestas vulputate. Tristique tortor turpis nisl massa sed sed ipsum. Metus consequat integer aliquam ve."
        buttonText="CTA Example"
      />
      <MoreArticle/>
    </div>
  )
}

export default ArticlePage