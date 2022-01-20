import React, { useEffect, useState } from 'react';
import { storage } from '../../utils/storage';

function LikeButton({ video, setFavorite, userId, removeFavorite }) {
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    if (storage.find(userId, video.id.videoId) === null) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  }, []);

  return (
    <div className="heart">
      {!isFavorite ? (
        <i
          className="fa fa-heart-o"
          title="no-favorite-icon"
          aria-hidden="true"
          onClick={() => {
            setFavorite(video);
            setIsFavorite(true);
          }}
        />
      ) : (
        <i
          className="fa fa-heart"
          title="favorite-icon"
          aria-hidden="true"
          onClick={() => {
            removeFavorite(video);
            setIsFavorite(false);
          }}
        />
      )}
    </div>
  );
}

export default LikeButton;
