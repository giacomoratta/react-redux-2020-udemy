import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Song1', duration:'03:11' },
    { title: 'Song2', duration:'04:22' },
    { title: 'Song3', duration:'02:33' },
    { title: 'Song4', duration:'05:44' }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});