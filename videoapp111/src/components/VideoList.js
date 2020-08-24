import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const rdList = videos.map((video) => {
    return <VideoItem video={video} />;
  })

  return (
    <div className="ui relaxed divided list">{ rdList }</div>
  );
}

export default VideoList;