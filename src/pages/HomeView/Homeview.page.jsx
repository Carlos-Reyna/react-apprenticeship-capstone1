import React, { useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import VideoDetailsView from '../VideoDetailsView';
import useYoutubeSearch from '../../utils/hooks/useYoutubeSearch';

function HomeView({ searchTerm, performSearch, setPerformSearch }) {
  const [selectedVideo, setSelectedVideo] = useState({});

  const [videos, setVideos] = useState([]);
  const [displayVideo, setDisplayVideo] = useState(false);

  useEffect(() => {
    const getVideos = () => {
      if (performSearch) {
        setDisplayVideo(false);
        setPerformSearch(false);
      }
    };
    getVideos();
  }, [performSearch]);

  useYoutubeSearch(searchTerm, setVideos, setDisplayVideo, performSearch);

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
    setDisplayVideo(true);
  };

  const handleDisplay = () => {
    setDisplayVideo(false);
  };

  return (
    <Container style={{ paddingBottom: '5%' }}>
      <Col xs={12} sm={12} md={12}>
        {displayVideo ? (
          <VideoDetailsView
            selectedVideo={selectedVideo}
            handleDisplay={handleDisplay}
            handleSelectVideo={handleSelectVideo}
          ></VideoDetailsView>
        ) : (
          <VideoList
            videos={videos}
            handleSelectVideo={handleSelectVideo}
          ></VideoList>
        )}
      </Col>
    </Container>
  );
}

export default HomeView;
