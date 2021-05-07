import axios from 'axios';

const KEY = 'AIzaSyDOQ_0FVM8bI8mAXFwkmJrjCeKS90dnB7U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
