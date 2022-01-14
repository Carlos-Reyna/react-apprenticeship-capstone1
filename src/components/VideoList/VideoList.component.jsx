import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  Title,
  Description,
  CustomCard,
  VideoThumbnail,
} from '../CustomElements/CustomElement.component';
import './VideoList.styles.css';
import { useHistory } from 'react-router-dom'


function VideoList(props) {
  
  let history = useHistory()

  const handleClick = (video) => {
    navigateURL()
    props.handleSelectVideo(video);
  };

  const navigateURL = () =>{
    history.push("/private/videos");

  }

  return (
    <Row >
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
                onClick={() => handleClick(video)}
                elementBackground={props.styles.customCard.backgroundColor}
              >
                <VideoThumbnail
                  src={video.snippet.thumbnails.medium.url}
                  data-testid="header-component-thumbnail"
                ></VideoThumbnail>

                <Title fontColor={props.styles.customCard.fontColor}>
                  {video.snippet.title}
                </Title>
                <Description>{video.snippet.description}</Description>
              </CustomCard>
          </Col>
        );
      })}
    </Row>
  );
}
export default VideoList;
