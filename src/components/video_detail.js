import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {  {/*this if fixes the problem with the empty list of VideoList
     - before the videos are loaded*/}
    return <div>Loading...</div>;
  }
{/* crafting our own embed video (because the only thing that changes
  is the ID of the video)*/}
  const videoID = video.id.videoID;
  const url = `http://www.youtube.com/embed/${videoID}`; {/* this will create
whichever url of the ID, wrapped in backtics. Equal to
'https://www.youtube.com/embed/' + videoID; */}

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}> {/* we need to provide url
          to iframe, the browser will reach the url and place whatever content
          inside iframe */}
        </iframe>
      </div>
      <div className="details">
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
