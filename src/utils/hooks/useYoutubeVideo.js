import { useEffect } from 'react';

export default function useYoutubeVideo(
  videoId,
  setSelectedVideo,
  setShowError
) {
  useEffect(() => {
    async function getVideo() {
      try {
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video`;
        var resultJson = await fetch(url);
        var { items } = await resultJson.json();
        if (items.length !== 0) {
          setSelectedVideo(items[0]);
        } else {
          setShowError(true);
        }
      } catch (err) {
        setShowError(true);
      }
    }
    getVideo();
  }, [videoId]);
}
