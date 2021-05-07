import React from 'react';

// props.video --> video (Destructuring)
const VideoDetail = ({ video }) => {
  // If there's no selected video(原始state設定selectedVideo: null)
  // if (!null)
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      {/* <iframe />: HTML Tag for displaying a video player */}
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
