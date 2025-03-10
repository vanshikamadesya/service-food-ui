import Articles from "../components/Article";
import ContentHub from "../components/ContactHub";
import OurStory from "../components/OurStories";
import OurVideos from "../components/OurVideo";
import ImageSection from "../components/ContentHubImageSection";
const ContactHubPage = () => {
  return (
    <div>
      <ContentHub />
      <OurStory />
      <OurVideos />
      <ImageSection />
      <Articles />
    </div>
  );
};

export default ContactHubPage;
