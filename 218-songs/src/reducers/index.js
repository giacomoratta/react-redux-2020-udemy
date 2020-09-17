import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { id: 823, title: 'Song1', duration: '03:11' },
    { id: 654, title: 'Song2', duration: '04:22' },
    { id: 245, title: 'Song3', duration: '02:33' },
    { id: 958, title: 'Song4', duration: '05:44' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

// n.b. in mapStateToProps, 'state' arg will have the following 2 props
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
