import React, { useContext, useEffect, useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import VideoList from '../../components/VideoList';

import useYoutubeSearch from '../../utils/hooks/useYoutubeSearch';
import appContext from '../../context/appContext';
import ErrorMessage from '../../components/ErrorMessage';

function HomeView() {
  const [performSearch, setPerformSearch] = useState(true);
  const thisContext = useContext(appContext);
  const [showError, setShowError] = useState(false);
  const { styles, videos, setVideos, searchTerm, userProps } = thisContext;

  useEffect(() => {
    const getVideos = () => {
      if (performSearch) {
        setPerformSearch(false);
      }
    };
    getVideos();
  }, [performSearch]);

  useYoutubeSearch(searchTerm, setVideos, setShowError);

  return (
    <Container style={{ paddingBottom: '5%' }}>
      <Col xs={12} sm={12} md={12}>
        {showError ? (
          <ErrorMessage
            styles={styles}
            message={'Your request could not be handled'}
          />
        ) : null}
        <VideoList
          videos={videos}
          styles={styles}
          privateRoute={false}
          userId={userProps.id}
        />
      </Col>
    </Container>
  );
}

export default HomeView;
