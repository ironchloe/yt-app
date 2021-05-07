import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  /* 以下轉成 Custom Hook : useVideos
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // useEffect is roughly equivalent to componentDidMount, componentDidMount only runs one time when App Component first rendered
  useEffect(() => {
    onTermSubmit('Empire State of Mind');
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  */

  // * After Custom Hook : useVideos
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 2. Destructuring
  const [videos, search] = useVideos('Empire State of Mind');

  // 3. Any time we get a new list of videos, we're gonna run the 1st argument function
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // * One line function callback is better written in inline
  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  return (
    <div className="ui container">
      {/* Call search function */}
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              // onVideoSelect={(video) => {
              //   setSelectedVideo(video);
              // }} 等於下方
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
/*
When you write like this:
onVideoSelect={(video)=>setSelectedVideo(video)} 

you are explicitly identifying the fact that this callback will eventually be invoked with an argument.

Since we are not calling it here, we don't need to write it like that. It is also less performant for no reason since anonymous arrow functions are recreated on every render and re-render. 

The refactor is an optimization, which passes a single reference of the callback as props:
<VideoList onVideoSelect={setSelectedVideo} videos={videos} />

If you look at the VideoItem component you will see that we are invoking the callback with the argument here:
<div onClick={() => onVideoSelect(video)} className="video-item item">
*/
