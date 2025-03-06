import Articles from "../components/Article"
import ContentHub from "../components/ContactHub"
import OurVideos from "../components/OurVideo"
import VideoSection from "../components/VideoSection"
import VideoCarousel from "../components/VideoCarousel";

const ContactHubPage = () => {
  return (
    <div>
      <ContentHub/>
      <VideoCarousel mainTitle="OUR STORIES" />
      <OurVideos/>
      <VideoSection/>
      <Articles/>
    </div>
  )
}

export default ContactHubPage
