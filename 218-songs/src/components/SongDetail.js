// no need of action creators; only status changes

import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <h3>Song details for:</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  // state.selectedSong defined in combineReducers
  return {
    song: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail)
