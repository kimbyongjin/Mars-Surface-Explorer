import React from 'react';

const PhotoOfTheDay = (props) => {
  const { potdUrl } = props;
  return (
    <img src={potdUrl} alt="photo-of-the-day" className="potd"></img>
    );
};

export default PhotoOfTheDay;
