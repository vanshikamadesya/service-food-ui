import Articles from "../components/Article"
import ContentHub from "../components/ContentHub"
import OurVideos from "../components/OurVideo"
import { OurStories } from "../components/VideoCarousel"
// import VideoSection from "../components/VideoSection"

const ContentHubPage = () => {
  return (
    <div>
      <ContentHub 
        title="Content Hub" 
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <OurStories/>
      <OurVideos/>
      {/* <VideoSection   /> */}
      <Articles/>
    </div>
  )
}

export default ContentHubPage
