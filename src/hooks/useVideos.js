import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  // 法一：onTermSubmit function can be used to modify the data videos
  return [videos, search];
  // 法二：
  // return { videos, search };
};

export default useVideos;
/* 
***** Custom Hooks *****
1. Best way to create reusable code in a React project (besides components)
2. Created by extracting hook-related code out of a function component
3. Custom hooks always make use of at least one primitive hook internally
4. Each custom hook should only have one purpose
5. Kind of an art form (Difficult)
6. Data-fetching is a great thing to try to make reusable

***** Process For Creating Reusable Hooks *****
1. Identify each line of code related to some single purpose
2. Identify the INPUTS to that code
3. Identify the OUTPUTS to that code
4. Extract all of the code into a separate function, receiving the inputs as arguments, and returning outputs
*/

// (INPUTS) If you give me a "default search term", (OUTPUTS) I will give you "a way to search for videos" and "a list of videos"
