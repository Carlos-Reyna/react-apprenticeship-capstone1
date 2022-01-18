import React, { useContext, useState, useEffect } from 'react';
import VideoDetail from '../../components/VideoDetail';
import appContext from '../../context/appContext';
import { useLocation } from 'react-router-dom';
import useYoutubeVideo from '../../utils/hooks/useYoutubeVideo';
import VideoList from '../../components/VideoList';
import { Container, Row, Col } from 'react-bootstrap';
import { storage } from '../../utils/storage';

function FavoritesViewDetail() {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const thisContext = useContext(appContext);
  const { styles, userProps, isLogged } = thisContext;

  let query = useQuery();

  useYoutubeVideo(query.get('videoId'), setSelectedVideo);

  useEffect(() => {
    try {
      const item = storage.get(userProps.id);
      if (item !== null) {
        setRelatedVideos(item);
      }
    } catch (err) {
      setRelatedVideos([]);
    }
  }, [selectedVideo]);

  return (
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          {selectedVideo !== null ? (
            <VideoDetail
              styles={styles}
              selectedVideo={selectedVideo}
              isLogged={isLogged}
              userId={userProps.id}
              isPrivateRoute={true}
            ></VideoDetail>
          ) : null}
          <VideoList
            videos={relatedVideos}
            styles={styles}
            privateRoute={true}
          ></VideoList>
        </Col>
      </Row>
    </Container>
  );
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default FavoritesViewDetail;
