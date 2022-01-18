import { useEffect } from 'react';

export default function useYoutubeVideo(videoId, setSelectedVideo) {
  useEffect(() => {
    async function getVideo() {
      let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video`;
      var resultJson = await fetch(url);
      var { items } = await resultJson.json();
      setSelectedVideo(items[0]);
    }
    getVideo();
  }, [videoId]);
}
