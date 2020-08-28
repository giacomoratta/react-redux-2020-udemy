import { useState, useEffect } from 'react';
import { search as youtubeSearch } from '../apis/youtube';

const useVideos = (defaultSeachTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchVideos(defaultSeachTerm);
  },
    // [] /* one-time */);
    [defaultSeachTerm] /* solve warning missing dependency */);

  const searchVideos = async term => {
    const response = await youtubeSearch(term);
    setVideos(response.data.items);
  };

  return [videos, searchVideos];
};

export default useVideos;