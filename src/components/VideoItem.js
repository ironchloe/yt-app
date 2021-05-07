import React from 'react';
import './VideoItem.css';

// The props contains a video object property
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // 讓 Component 和 Root DIV 的 className 相同
    // 若寫成 onClick={onVideoSelect} 點擊其中一個item，onVideoSelect 會被呼叫，但 video 不會跟著一起被呼叫
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
