import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  /* code moved to ../hooks/useVideo.js */
  const [videos, searchVideos] = useVideos('buildings')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={searchVideos} defaultTerm='buildings' />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <p>Videos found: {videos.length}</p>
            <VideoList
              videos={videos}
              onVideoSelect={(video) => { setSelectedVideo(video) }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
