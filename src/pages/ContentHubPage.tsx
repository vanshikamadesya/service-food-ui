import Articles from "../components/Article"
import ContentHub from "../components/ContentHub"
import OurVideos from "../components/OurVideo"
// import VideoSection from "../components/VideoSection"
import VideoCarousel from "../components/VideoCarousel";

const ContentHubPage = () => {
  return (
    <div>
      <ContentHub 
        title="Content Hub" 
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <VideoCarousel mainTitle="OUR STORIES" />
      <OurVideos/>
      {/* <VideoSection   /> */}
      <Articles/>
    </div>
  )
}

export default ContentHubPage
