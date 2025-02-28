import React from 'react'
import VideoPageHero from '../components/videoPageHero'
import VideoContent from '../components/videoContent'
import MoreVideos from '../components/MoreVideos'

const VideoPage = () => {
  return (
    <div>
      <VideoPageHero/>
      <VideoContent/>
      <MoreVideos/>
    </div>
  )
}

export default VideoPage
