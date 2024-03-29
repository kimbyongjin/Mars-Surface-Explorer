import React from 'react';

const MarsPhoto = (props) => {
  const { camera, earth_date, img_src, rover } = props.activePhoto;

  return (
    <img src={img_src} alt={
      `An image from the ${rover.name} rover ${camera.full_name}, earth date ${earth_date}`
      }
      className='mars-photo' />
  )
};

export default MarsPhoto;
