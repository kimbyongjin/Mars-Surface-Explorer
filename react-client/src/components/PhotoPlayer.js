import React from 'react';

const PhotoPlayer = (props) => {
  // const { activePhoto } = props;
  const { camera, earth_date, img_src, rover } = props.activePhoto;
  return (
    <div className="photo-player-container">
      <img className="active-photo" src={img_src}/>
    </div>
  );
};

export default PhotoPlayer;