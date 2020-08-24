import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import { search as youtubeSearch } from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtubeSearch(term);
    this.setState({
      videos: response.data.items
    })
  };

  render () {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        Videos found: {this.state.videos.length}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;