import React, { useContext, useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import VideoList from '../../components/VideoList';
import VideoDetailsView from '../VideoDetailsView';
import useYoutubeSearch from '../../utils/hooks/useYoutubeSearch';
import appContext from '../../context/appContext';

function HomeView() {
  const [selectedVideo, setSelectedVideo] = useState({});
  const [performSearch, setPerformSearch] = useState(true);
  const thisContext = useContext(appContext);

  const { styles, videos, setVideos, searchTerm, userProps, isLogged } =
    thisContext;

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

  useYoutubeSearch(searchTerm, setVideos, setDisplayVideo);

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
            styles={styles}
            userId={userProps.id}
            isLogged={isLogged}
          ></VideoDetailsView>
        ) : (
          <VideoList
            videos={videos}
            handleSelectVideo={handleSelectVideo}
            styles={styles}
          ></VideoList>
        )}
      </Col>
    </Container>
  );
}

export default HomeView;
