import { useEffect } from 'react';

export default function useYoutubeRelatedSearch(
  selectedVideo,
  setRelatedVideos
) {
  useEffect(() => {
    async function getVideos() {
      let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${selectedVideo.id.videoId}&type=video&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
      var resultJson = await fetch(url);
      var { items } = await resultJson.json();
      var safeItems = items.filter((item) => item.snippet !== undefined);
      setRelatedVideos(safeItems);
    }
    getVideos();
  }, [selectedVideo]);
}
