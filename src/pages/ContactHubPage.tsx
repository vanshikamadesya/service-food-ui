import ContentHub from "../components/ContactHub"
import OurStory from "../components/OurStories"
// import OurVideos from "../components/OurVideo"
import VideoSection from "../components/VideoSection"
const ContactHubPage = () => {
  return (
    <div>
      <ContentHub/>
      <OurStory/>
      {/* <OurVideos/> */}
      <VideoSection/>
    </div>
  )
}

export default ContactHubPage
