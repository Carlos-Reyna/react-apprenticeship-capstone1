import React, { useState, useEffect } from 'react';
import {
  Title,
  Description,
  CustomCard,
} from '../../components/CustomElements/index';
import { storage } from '../../utils/storage';
import { Link, useHistory } from 'react-router-dom';

function VideoDetail({
  styles,
  selectedVideo,
  userId,
  isLogged,
  isPrivateRoute,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const result = storage.find(userId, selectedVideo.id);
    if (result !== null) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [selectedVideo, isLogged]);

  //TODO: Remove the is favorite flag, is useless in the logic of the app.
  const addToFavorites = () => {
    storage.set(userId, {
      ...selectedVideo,
      favorite: !isFavorite,
      id: { videoId: selectedVideo.id },
    });
    setIsFavorite(true);
  };

  const removeFromFavorites = () => {
    storage.remove(userId, selectedVideo.id);
    setIsFavorite(false);
    if (isPrivateRoute) {
      history.push('/favorites');
    }
  };

  return (
    <>
      <Description
        color={styles.customCard.fontColor}
        title="breadcrumb-VideoDetail-title"
      >
        <Link to="/">Home </Link>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>{' '}
        {selectedVideo.snippet.title}
      </Description>
      <iframe
        width="100%"
        height="500px"
        name="iframe-youtube"
        title={selectedVideo.id}
        src={`https://www.youtube.com/embed/${selectedVideo.id}`}
      ></iframe>
      <CustomCard
        className="card-div-detail"
        title="customCard-VideoDetail"
        elementBackground={styles.customCard.backgroundColor}
        height={'150px'}
      >
        <Title
          fontColor={styles.customCard.fontColor}
          title="title-videoDetail"
        >
          {selectedVideo.snippet.title}{' '}
          {isLogged ? (
            <FavoriteBadge
              isFavorite={isFavorite}
              removeFromFavorites={removeFromFavorites}
              addToFavorites={addToFavorites}
            />
          ) : null}
        </Title>
        <Description title="description-videoDetail">
          {selectedVideo.snippet.description}
        </Description>
      </CustomCard>
    </>
  );
}

const FavoriteBadge = ({ isFavorite, removeFromFavorites, addToFavorites }) => {
  return (
    <>
      {isFavorite ? (
        <button
          type="button"
          title="btn-videoDetail-remove"
          className="btn btn-primary"
          onClick={removeFromFavorites}
        >
          Remove from favorites
        </button>
      ) : (
        <button
          type="button"
          title="btn-videoDetail-add"
          className="btn btn-primary"
          onClick={addToFavorites}
        >
          Add to favorites
        </button>
      )}
    </>
  );
};

export default VideoDetail;
