import React, { useState, useContext } from 'react';
import VideoList from '../../components/VideoList';
import useYoutubeRelatedSearch from '../../utils/hooks/useYoutubeRelatedSearch';
import useYoutubeVideo from '../../utils/hooks/useYoutubeVideo';
import { useLocation } from 'react-router-dom';
import './VideoDetailView.styles.css';
import VideoDetail from '../../components/VideoDetail';
import appContext from '../../context/appContext';
import { Container, Row, Col } from 'react-bootstrap';

function VideoDetailView() {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const thisContext = useContext(appContext);
  const { styles, userProps, isLogged } = thisContext;

  let query = useQuery();

  useYoutubeVideo(query.get('videoId'), setSelectedVideo);

  useYoutubeRelatedSearch(query.get('videoId'), setRelatedVideos);

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
              isPrivateRoute={false}
            ></VideoDetail>
          ) : null}

          <VideoList
            videos={relatedVideos}
            styles={styles}
            userId={userProps.id}
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


export default VideoDetailView;
