import React from 'react';

const VideoListItem = ({video}) => {
  //const video = props.video; also works, with (props) where the video is
  const imageUrl = video.snippet.thumbnails.default.url; // setting a variable
  //for the thumbnails of videos
  return (
    <li className="list-group-item"> {/*some html formatting */}
    <div className="video-list-media">
      <div className="media-left">
        <img className="media-object" src={imageUrl}/> {/*space left for the video picture*/}
{/* imr src like in normal html, but put the variable with url instead*/}
      </div>
      <div className="media-body">
        <div className="media-heading"> {/*space left for video heading*/}
        {video.snippet.title} {/* title of the video*/}
        </div>
      </div>
    </div>
    </li>
  );
};

export default VideoListItem;
