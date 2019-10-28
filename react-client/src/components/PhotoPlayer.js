import React from 'react';
import MarsPhoto from './MarsPhoto';

const PhotoPlayer = (props) => {
  const { marsPhotos, activePhoto } = props;

  if (marsPhotos.length) {
    return (
      <div className="photo-player">
        <div className="mars-photo-container">
          <MarsPhoto key={activePhoto.id} activePhoto={activePhoto} />
        </div>
      </div>
    );
  }
  return null;
};

export default PhotoPlayer;
