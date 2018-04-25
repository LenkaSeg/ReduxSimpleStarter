import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { //the s.grider has something against for loops And
  //wants to use built-in iterators (built-in map iterator)
  //{props.videos.length} //this is an array with all the videos. To get one.
  //loop through it and for each video create an instance
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect} 
      key={video.etag}
      video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
