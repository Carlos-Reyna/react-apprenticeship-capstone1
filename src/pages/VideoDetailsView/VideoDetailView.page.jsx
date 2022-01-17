import React, { useState } from 'react';
import VideoList from '../../components/VideoList';
import useYoutubeRelatedSearch from '../../utils/hooks/useYoutubeRelatedSearch';
import {
  Title,
  Description,
  CustomCard,
} from '../../components/CustomElements';
import './VideoDetailView.styles.css';
function VideoDetailView({
  selectedVideo,
  handleDisplay,
  handleSelectVideo,
  styles,
}) {

  const [relatedVideos, setRelatedVideos] = useState([]);

  useYoutubeRelatedSearch(selectedVideo, setRelatedVideos);

  return (
    <div>

      <Description color={styles.customCard.fontColor}>

        <a href="#!" onClick={handleDisplay}>
          Home{' '}
        </a>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>{' '}
        {selectedVideo.snippet.title}
      </Description>

      <iframe
        width="100%"
        height="500px"
        title={selectedVideo.id.videoId}
        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
      ></iframe>
      <CustomCard
        className="card-div-detail"
        elementBackground={styles.customCard.backgroundColor}
        height={'10vh'}
      >
        <Title fontColor={styles.customCard.fontColor}>
          {selectedVideo.snippet.title}
        </Title>

        <Description>{selectedVideo.snippet.description}</Description>
      </CustomCard>
      <VideoList
        videos={relatedVideos}
        handleSelectVideo={handleSelectVideo}

        styles={styles}
      ></VideoList>
    </div>
  );
}

export default VideoDetailView;
