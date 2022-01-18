import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  Title,
  Description,
  CustomCard,
  VideoThumbnail,
} from '../CustomElements/CustomElement.styles';
import './VideoList.styles.css';
import { useHistory } from 'react-router-dom';

function VideoList(props) {
  let history = useHistory();

  const handleClick = (video) => {
    navigateURL(video);
  };

  const navigateURL = (video) => {
    if (props.privateRoute) {
      history.push(`/playFavorites?videoId=${video.id.videoId}`);
    } else {
      history.push(`/play?videoId=${video.id.videoId}`);
    }
  };

  return (
    <Row>
      {props.videos.map((video) => {
        return (
          <Col
            key={video.id.videoId}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="card-container"
          >
            <CustomCard
              title="customCard-videoList"
              cursor={'pointer'}
              onClick={() => handleClick(video)}
              elementBackground={props.styles.customCard.backgroundColor}
            >
              <VideoThumbnail
                src={video.snippet.thumbnails.medium.url}
                data-testid="header-component-thumbnail"
                title="video-thumbnail"
              ></VideoThumbnail>

              <Title
                fontColor={props.styles.customCard.fontColor}
                title="video-title"
              >
                {video.snippet.title}
              </Title>
              <Description title="video-description">
                {video.snippet.description}
              </Description>
            </CustomCard>
          </Col>
        );
      })}
    </Row>
  );
}

export default VideoList;
