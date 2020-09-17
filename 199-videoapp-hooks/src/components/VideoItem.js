import React from 'react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  // const rendered
  // fixed warning about missing alt on img tag
  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem
