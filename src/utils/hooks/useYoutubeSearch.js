import { useEffect } from 'react';

export default function useYoutubeSearch(
  searchTerm,
  setVideos,
  setDisplayVideo,
  performSearch
) {
  useEffect(() => {
    async function getVideos() {
      if (performSearch) {
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video`;
        var resultJson = await fetch(url);
        var { items } = await resultJson.json();
        setVideos(items);
        setDisplayVideo(false);
      }
    }
    getVideos();
  }, [performSearch]);
}
