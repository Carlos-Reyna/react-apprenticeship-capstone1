import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  Title,
  Description,
  CustomCard,
  VideoThumbnail,
} from '../CustomElements/CustomElement.component';
import './VideoList.styles.css';

function VideoList(props) {
  const handleClick = (video) => {
    props.handleSelectVideo(video);
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
            <CustomCard onClick={() => handleClick(video)}>
              <VideoThumbnail
                src={video.snippet.thumbnails.medium.url}
                data-testid="header-component-thumbnail"
              ></VideoThumbnail>

              <Title>{video.snippet.title}</Title>
              <Description>{video.snippet.description}</Description>
            </CustomCard>
          </Col>
        );
      })}
    </Row>
  );
}
export default VideoList;
