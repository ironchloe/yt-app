import React from 'react';
import VideoItem from './VideoItem';

/*
const VideoList = (props) => {
  // props.videos is going to be an array of data we wanna render to the screen as HTML
  return <div>{props.videos.length}</div>;
};
*/

// Destructuring arguments { videos, onVideoSelect } 皆從parent App Component 傳進 VideoList 的 Props
// videos 是 Object, onVideoSelect 是 Callback
const VideoList = ({ videos, onVideoSelect }) => {
  // Map over videos array
  const renderedList = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video}
    />
  ));

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;

/* Sematic UI: List
<div class="ui relaxed divided list"> => VideoList
  <div class="item"> => VideoItem
   <i class="large github middle aligned icon"></i>
    <div class="content">
      <a class="header">Semantic-Org/Semantic-UI</a>
      <div class="description">Updated 10 mins ago</div>
    </div>
  </div>
</div>
*/
