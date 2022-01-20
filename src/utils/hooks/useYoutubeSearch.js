import { useEffect } from 'react';

export default function useYoutubeSearch(searchTerm, setVideos, setShowError) {
  useEffect(() => {
    async function getVideos() {
      try {
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video`;
        var resultJson = await fetch(url);
        var { items } = await resultJson.json();
        if (items.length !== 0) {
          setVideos(items);
        } else {
          setShowError(true);
        }
      } catch (err) {
        setShowError(true);
      }
    }
    getVideos();
  }, [searchTerm]);
}
