import React, { Component } from 'react'

// Connect component -> needed to get the song list from reducers
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
  renderList () {
    return this.props.songs.map(song => {
      return (
        <div className='item' key={song.id}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => { this.props.selectSong(song) }}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      )
    })
  }

  render () {
    // see mapStateToProps:
    // this.props === { songs: state.songs }
    // also... this.props has dispatch!

    return (
      <div className='ui divided list'>
        {this.renderList()}
      </div>
    )
  }
}

/* (2) get specific data from redux store
 *  - n.b. the name is a convention
 *  - 'state' arg has the entire store
 *  - re-runs everytime redux state changes (e.g. a reducer runs and changes the state)
 */
const mapStateToProps = (state) => {
  // console.log('current state store', state);
  // return state; - useless

  // state.song defined in combineReducers
  return {
    songs: state.songs
  }
}

// (0) [old] export default SongList;

// (1) create instance of SongList wired with Connect component
export default connect(mapStateToProps, {
  // (3) all action creators which will be passed to components as props
  selectSong
})(SongList /* component to wire with provider */)

/* (3) WHY do we need to pass selectSong to connect and we cannot use directly in our component??
 *  - selectSong is just a simple js function
 *  - to make redux update the status, we need dispatch function
 *  - dispatch function needs the output of an action creator, that is an action
 *  - connect basically wraps all the action creators in another function which uses dispatch + the original selectSong
 */
