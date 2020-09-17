import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  // fixed warning on missing key attr
  const rdList = videos.map((video) => {
    return <VideoItem
      video={video}
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
    />
  })

  return (
    <div className='ui relaxed divided list'>{rdList}</div>
  )
}

export default VideoList
